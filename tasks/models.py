from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField


class Task(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    owners = models.ManyToManyField(User, related_name='owned_tasks')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=255, blank=True)
    content = models.TextField(blank=True)
    due_date = models.DateTimeField(null=True, blank=True)
    overdue = models.BooleanField(default=False)
    PRIORITY_CHOICES = [
        ('LOW', 'Low'),
        ('MEDIUM', 'Medium'),
        ('HIGH', 'High'),
    ]
    priority = models.CharField(
        max_length=6,
        choices=PRIORITY_CHOICES,
        default='LOW',)
    CATEGORY_CHOICES = [
        ('WORK', 'Work'),
        ('PERSONAL', 'Personal'),
        ('HOME', 'Home'),
        ('HEALTH', 'Health'),
        ('FINANCE', 'Finance'),
        ('EDUCATION', 'Education'),
        ('SHOPPING', 'Shopping'),
        ('TRAVEL', 'Travel'),
        ('HOBBIES', 'Hobbies'),
        ('SOCIAL', 'Social'),
    ]
    category = models.CharField(
        max_length=100, choices=CATEGORY_CHOICES, blank=True)
    STATE_CHOICES = [
        ('OPEN', 'Open'),
        ('IN_PROGRESS', 'In Progress'),
        ('COMPLETED', 'Completed'),
        ('CLOSED', 'Closed'),
    ]
    state = models.CharField(
        max_length=20, choices=STATE_CHOICES, default='OPEN')

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.id} {self.title}"
