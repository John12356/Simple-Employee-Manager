from . models import EMPLOYEE_DETAILS

def create_emp(emp):
    EMPLOYEE_DETAILS.objects.create(**emp)
    
def get_one_emp(emp_id):
    return EMPLOYEE_DETAILS.objects.get(emp_id=emp_id)

def delete_emp(emp_id):
    EMPLOYEE_DETAILS.objects.get(pk=emp_id).delete()
    
def get_emp():
    return EMPLOYEE_DETAILS.objects.values()