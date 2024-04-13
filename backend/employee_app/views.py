import json
from django.http import JsonResponse  # type: ignore
from . import db_manager
from rest_framework.response import Response  # type: ignore
from rest_framework.serializers import ModelSerializer  # type: ignore


# Create your views here.
def create_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        db_manager.create_emp(data)
        return JsonResponse({"Success": "Ok"})
    return JsonResponse({"Error": "Data ! send successfully"})


def edit_user(request, id):
    if request.method == "POST":
        data = json.loads(request.body)
        emp = db_manager.get_one_emp(id)
        emp.emp_name = data["emp_name"]
        emp.emp_age = data["emp_age"]
        emp.save()
        return JsonResponse({"Success": "Ok"})
    return JsonResponse({"Error": "Data ! send successfully"})


def delete_user(request, id):
    if request.method == "POST":
        db_manager.delete_emp(id)
        return JsonResponse({"Success": "Ok"})
    return JsonResponse({"Error": "Data ! send successfully"})


def get_user(request):
    if request.method == "GET":
        data = list(db_manager.get_emp())
        return JsonResponse(data, safe=False)
        # data = db_manager.get_emp()
        # serialize = employeeSerializer(data, many=True)

        # return HttpResponse(serialize.data, content_type='application/json')
    return JsonResponse({"Error": "Data ! send successfully"})
