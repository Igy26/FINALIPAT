# Generated by Django 5.0.6 on 2024-07-10 00:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_item_telphone_alter_item_phone'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='telphone',
            new_name='telephone',
        ),
    ]
