# Generated by Django 5.0.6 on 2024-07-09 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_item_datebirth'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='datebirth',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
