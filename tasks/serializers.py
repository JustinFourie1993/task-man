from rest_framework import serializers
from .models import Task
from django.contrib.auth.models import User
from django.utils import timezone


class TaskSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')
    is_owner = serializers.SerializerMethodField()
    owners = serializers.SlugRelatedField(
        many=True,
        queryset=User.objects.all(),
        slug_field='username'
    )

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def validate_title(self, value):
        if not value.strip():
            raise serializers.ValidationError("Title cannot be blank.")
        return value

    def validate_content(self, value):
        if not value.strip():
            raise serializers.ValidationError("Content cannot be blank.")
        return value

    def validate_due_date(self, value):
        if value and value < timezone.now():
            raise serializers.ValidationError(
                "Due date cannot be in the past.")
        return value

    def create(self, validated_data):
        owners_data = validated_data.pop('owners')
        task = Task.objects.create(**validated_data)
        task.owners.set(owners_data)
        return task

    def update(self, instance, validated_data):
        owners_data = validated_data.pop('owners', None)
        instance = super().update(instance, validated_data)

        if owners_data is not None:
            instance.owners.set(owners_data)

        return instance

    class Meta:
        model = Task
        fields = [
            'id', 'owner', 'owners', 'is_owner',
            'created_at', 'updated_at',
            'title', 'content', 'due_date', 'overdue', 'priority',
            'category', 'state', 'profile_id', 'profile_image'
        ]
        read_only_fields = ['created_at', 'updated_at', 'owner', 'overdue']
