# Generated by Django 5.0.6 on 2024-07-09 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_item_barangay_item_municipality_item_region_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='bloodtype',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='height',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='weight',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
