# Generated by Django 5.1.1 on 2024-09-11 18:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('studentId', models.AutoField(primary_key=True, serialize=False)),
                ('firstName', models.CharField(max_length=100)),
                ('lastName', models.CharField(max_length=100)),
                ('RegistrationNo', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
            ],
        ),
    ]
