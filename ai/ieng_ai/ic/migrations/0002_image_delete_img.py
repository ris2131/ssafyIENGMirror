# Generated by Django 4.1.1 on 2022-09-29 16:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("ic", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Image",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("image", models.ImageField(upload_to="images/")),
            ],
        ),
        migrations.DeleteModel(
            name="Img",
        ),
    ]
