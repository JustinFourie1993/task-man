from rest_framework import serializers
from .models import Note, Task
from django.contrib.humanize.templatetags.humanize import naturaltime


class NoteSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()
    
    def get_is_owner(self, obj):
        return obj.owner == self.context['request'].user

    def get_created_at(self, obj):
        return naturaltime(obj.created_at)

    def get_updated_at(self, obj):
        return naturaltime(obj.updated_at)

    class Meta:
        model = Note
        fields = ['id', 'task', 'owner', 'created_at',
                  'updated_at', 'content', 'profile_id', 'is_owner']


class NoteDetailSerializer(NoteSerializer):
    
    task = serializers.ReadOnlyField(source='task.id')
