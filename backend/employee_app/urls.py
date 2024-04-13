from django.urls import path, include  # type: ignore
from . import views

urlpatterns = [
    path("create", views.create_user, name="create_user"),
    path("edit/<int:id>", views.edit_user, name="edit_user"),
    path("delete/<int:id>", views.delete_user, name="delete_user"),
    path("get", views.get_user, name="get_user"),
]
