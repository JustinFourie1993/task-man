# Generated by Django 3.2.23 on 2023-12-11 12:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0005_alter_task_task_file'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='task_file',
        ),
    ]
