# Generated by Django 2.2.5 on 2019-11-10 09:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import django_mysql.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=45)),
                ('indexes', django_mysql.models.ListCharField(models.PositiveSmallIntegerField(), max_length=100, size=10, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Match',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='', max_length=100)),
                ('match_thumbnail', models.ImageField(blank=True, null=True, upload_to='thumbnail/')),
                ('capacity', models.PositiveSmallIntegerField(default=2)),
                ('is_online', models.BooleanField(default=False)),
                ('is_full', models.BooleanField(default=False)),
                ('location_text', models.CharField(default='', max_length=100)),
                ('location_latitude', models.PositiveSmallIntegerField(default=0)),
                ('location_longitude', models.PositiveSmallIntegerField(default=0)),
                ('period', models.PositiveSmallIntegerField(default=0)),
                ('additional_info', models.TextField(default='')),
                ('is_age_restricted', models.BooleanField(default=False)),
                ('restrict_age_from', models.PositiveSmallIntegerField(default=0)),
                ('restrict_age_to', models.PositiveSmallIntegerField(default=0)),
                ('is_gender_restricted', models.BooleanField(default=False)),
                ('restricted_gender', models.BooleanField(default=False)),
                ('time_begin', models.DateTimeField(default=django.utils.timezone.now)),
                ('time_end', models.DateTimeField(default=django.utils.timezone.now)),
                ('view_count', models.PositiveIntegerField(default=0)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='matchmaker.Category')),
                ('host_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='match_set', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Participation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.PositiveSmallIntegerField(blank=True, default=None, null=True)),
                ('match', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='participation_match', to='matchmaker.Match')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='participation_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
