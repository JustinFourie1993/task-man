from rest_framework import generics, permissions
from .models import Note
from .serializers import NoteSerializer, NoteDetailSerializer
from task_man.permissions import IsOwnerOrReadOnly


from rest_framework import generics, permissions
from .models import Note
from .serializers import NoteSerializer, NoteDetailSerializer
from task_man.permissions import IsOwnerOrReadOnly


class NoteList(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        queryset = Note.objects.all()
        task_id = self.request.query_params.get('task', None)
        if task_id is not None:
            queryset = queryset.filter(task=task_id)
        return queryset

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = NoteDetailSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Note.objects.all()