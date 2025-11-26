from django.db import models

# Create your models here.
from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=255)  # short text for task name
    due_date = models.DateField(null=True, blank=True)  # deadline
    estimated_hours = models.PositiveIntegerField(default=1)  # effort in hours
    importance = models.PositiveIntegerField(default=5)  # 1–10 scale
    dependencies = models.JSONField(default=list, blank=True)  # list of task IDs

    def __str__(self):
        return self.title
