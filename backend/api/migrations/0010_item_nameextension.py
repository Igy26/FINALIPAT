# Generated by Django 5.0.6 on 2024-07-10 00:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_item_fatherfirstname_item_fathermiddlename_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='nameextension',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
