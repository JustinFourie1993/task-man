from rest_framework import serializers
from .models import Task
from django.contrib.auth.models import User


class TaskSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    owners = serializers.SlugRelatedField(
        many=True,
        queryset=User.objects.all(),
        slug_field='username'
    )

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def validate_file(self, value):
        if value.size > 2 * 1024 * 1024:  
            raise serializers.ValidationError(
                "File size too large. The maximum file size is 2MB.")
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
            'title', 'content', 'task_file', 'due_date', 'overdue', 'priority',
            'category', 'state'
        ]
        read_only_fields = ['created_at', 'updated_at',
                            'owner',]
        
