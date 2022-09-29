from django.shortcuts import render


from django.shortcuts import get_list_or_404, get_object_or_404, render, redirect
from django.views.decorators.http import require_http_methods,require_POST,require_safe
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import json
from .models import Img
import io
@api_view(['POST'])
def imagecaption(request):
    from .clarifai.test import test
    # path = json.loads(request.body)['picture_path']
    
    img = io.BytesIO(request.body)
    # return Response(img)
    new_img = Img(
            image = img,
            title = '사진용'
        )
    new_img.save()

    # ans = test(path)
    return Response(new_img.image)
    