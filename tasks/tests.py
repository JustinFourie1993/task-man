from django.contrib.auth.models import User
from .models import Task
from rest_framework import status
from rest_framework.test import APITestCase


class TaskListViewTests(APITestCase):
    def setUp(self):
        User.objects.create_user(username='testuser', password='testpassword')

    def test_can_list_tasks(self):
        user = User.objects.get(username='testuser')
        Task.objects.create(owner=user, title='test title',
                            content='test content')
        response = self.client.get('/tasks/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_logged_in_user_can_create_task(self):
        self.client.login(username='testuser', password='testpassword')
        response = self.client.post(
            '/tasks/', {'title': 'test title', 'content': 'test content'})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_user_not_logged_in_cant_create_task(self):
        response = self.client.post(
            '/tasks/', {'title': 'test title', 'content': 'test content'})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)


class TaskDetailViewTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser', password='testpassword')
        self.user1 = User.objects.create_user(
            username='testuser1', password='testpassword1')

        self.task = Task.objects.create(
            owner=self.user, title='title', content='user content')
        self.task.owners.set([self.user, self.user1])

        self.task1 = Task.objects.create(
            owner=self.user1, title='title1', content='user1 content')
        self.task1.owners.set([self.user, self.user1])

    def test_can_retrieve_task_using_valid_id(self):
        response = self.client.get('/tasks/1/')
        self.assertEqual(response.data['title'], 'title')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_cant_retrieve_task_using_invalid_id(self):
        response = self.client.get('/tasks/999/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_user_can_update_own_task(self):
        self.client.login(username='testuser', password='testpassword')
        response = self.client.put(
            '/tasks/1/', {'title': 'a new title', 'content': 'updated content'})
        self.task.refresh_from_db()
        self.assertEqual(self.task.title, 'a new title')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
