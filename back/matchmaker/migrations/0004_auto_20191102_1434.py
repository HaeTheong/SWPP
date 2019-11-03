# Generated by Django 2.2.5 on 2019-11-02 14:34

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('matchmaker', '0003_auto_20191102_1407'),
    ]

    operations = [
        migrations.AlterField(
            model_name='match',
            name='created_on',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='match',
            name='time_begin',
            field=models.BigIntegerField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='match',
            name='time_end',
            field=models.BigIntegerField(default=django.utils.timezone.now),
        ),
    ]