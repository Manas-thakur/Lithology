from roboflow import Roboflow
from PIL import Image
import sys
# from io import BytesIO
import json


from roboflow import Roboflow

rf = Roboflow(api_key="kigJNbmvpgc8kO9PEhPq")
project = rf.workspace().project("mine-xipgx")
model = project.version(1).model

inputPath  =  sys.argv[1]
outputPath = sys.argv[2] + sys.argv[3] + "_predication.png"

# infer on a local image
print(model.predict(inputPath).json())

# infer on an image hosted elsewhere
# print(model.predict("URL_OF_YOUR_IMAGE", hosted=True).json())

# save an image annotated with your predictions
# model.predict(inputPath).save(outputPath)
