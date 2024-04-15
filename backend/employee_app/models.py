from django.db import models  # type: ignore


# Create your models here.
class EMPLOYEE_DETAILS(models.Model):
    emp_id = models.IntegerField(primary_key=True)
    emp_name = models.TextField(blank=True)
    emp_age = models.IntegerField()

    def __str__(self):
        return self.emp_name
