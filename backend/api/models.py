from django.db import models


# Create your models here.


class Item(models.Model):
    fname = models.CharField(max_length=100, null=True)
    mname = models.CharField(max_length=100, null=True)
    sname = models.CharField(max_length=100, null=True)
    nameextension = models.CharField(max_length=50, null=True)
    address = models.CharField(max_length=100, null=True)
    barangay = models.CharField(max_length=100, null=True)
    zipcode = models.CharField(max_length=100, null=True)
    region = models.CharField(max_length=100, null=True)
    municipality = models.CharField(max_length=100, null=True)
    telephone = models.CharField(max_length=50, null=True)
    phone = models.CharField(max_length=50, null=True)
    datebirth = models.CharField(max_length=50, null=True)
    placebirth = models.CharField(max_length=100, null=True)
    gender = models.CharField(max_length=50, null=True)
    civilstatus = models.CharField(max_length=50, null=True)
    height = models.CharField(max_length=50, null=True)
    weight = models.CharField(max_length=50, null=True)
    bloodtype = models.CharField(max_length=50, null=True)
    fathersurname = models.CharField(max_length=50, null=True)
    fatherfirstname = models.CharField(max_length=50, null=True)
    fathermiddlename = models.CharField(max_length=50, null=True)
    fatheroccupation = models.CharField(max_length=100, null=True)
    mothersurname = models.CharField(max_length=50, null=True)
    motherfirstname = models.CharField(max_length=50, null=True)
    mothermiddlename = models.CharField(max_length=50, null=True)
    motheroccupation = models.CharField(max_length=100, null=True)
    elementaryname = models.CharField(max_length=100, null=True)
    secondaryname = models.CharField(max_length=100, null=True)
    vocationalname = models.CharField(max_length=100, null=True)
    collegename = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.fname 
