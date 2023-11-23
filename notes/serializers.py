from rest_framework import serializers
from .models import Note, Task
from django.contrib.auth.models import User


class NoteSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    
    def get_is_owner(self, obj):
        return obj.owner == self.context['request'].user

    class Meta:
        model = Note
        fields = ['id', 'task', 'owner', 'created_at',
                  'updated_at', 'content', 'profile_id', 'is_owner']


class NoteDetailSerializer(NoteSerializer):
    
    task = serializers.ReadOnlyField(source='task.id')
