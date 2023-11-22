from rest_framework import serializers
from .models import Note, Task
from django.contrib.auth.models import User


class NoteSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    task = serializers.ReadOnlyField(source='task.id')

    class Meta:
        model = Note
        fields = ['id', 'task', 'owner', 'created_at', 'updated_at', 'content']
        read_only_fields = ['created_at', 'updated_at', 'owner', 'is_owner']

    def get_is_owner(self, obj):
        return obj.owner == self.context['request'].user

    def create(self, validated_data):
        user = self.context['request'].user
        return Note.objects.create(owner=user, **validated_data)
