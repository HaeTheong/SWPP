# Generated by Django 2.2.5 on 2019-10-27 06:45

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('matchmaker', '0003_auto_20191027_0638'),
    ]

    operations = [
        migrations.AlterField(
            model_name='match',
            name='timeBegin',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='match',
            name='timeEnd',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]