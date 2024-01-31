from django.db import models
from django.contrib.auth.models import User
from tasks.models import Task


class Note(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, null=True,
                             blank=True)  # Optional title field
    content = models.TextField()
    status = models.CharField(max_length=50, null=True,
                              blank=True)  # Status/type field
    tags = models.CharField(max_length=255, null=True,
                            blank=True)  # Simple tagging system
    privacy = models.CharField(max_length=50, default='private', choices=[
                               ('private', 'Private'), ('public', 'Public')])  # Privacy setting
    reminder_date = models.DateTimeField(
        null=True, blank=True)  # Optional reminder date
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.title}: {self.content[:50]}..." if self.title else self.content[:50]

    
