# Generated by Django 2.2.5 on 2019-11-06 13:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('matchmaker', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='match',
            name='num_participants',
        ),
    ]
