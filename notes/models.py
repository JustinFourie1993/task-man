from django.db import models
from django.contrib.auth.models import User
from tasks.models import Task


class Note(models.Model):
    task = models.ForeignKey(
        Task, on_delete=models.CASCADE, related_name='notes')
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Note for {self.task.title}: {self.content}"
