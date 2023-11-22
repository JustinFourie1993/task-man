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

    class Meta:
        model = Task
        fields = [
            'id', 'owner', 'owners', 'is_owner',
            'created_at', 'updated_at',
            'title', 'content', 'due_date', 'overdue',
            'category', 'state'
        ]
        read_only_fields = ['created_at', 'updated_at',
                            'owner',]
        
