# Generated by Django 3.2.23 on 2023-11-23 10:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0004_alter_task_owners'),
        ('notes', '0003_alter_note_task'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='task',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tasks.task'),
        ),
    ]
