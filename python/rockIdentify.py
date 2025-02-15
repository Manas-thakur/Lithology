from roboflow import Roboflow
# infer on a local from roboflow import Roboflow
from PIL import Image
import sys
# from io import BytesIO
import json




rf = Roboflow(api_key="kigJNbmvpgc8kO9PEhPq")
project = rf.workspace().project("rock-life-detection")
model = project.version(1).model


inputPath  =  sys.argv[1]
outputPath = sys.argv[2] + sys.argv[3] + "_predication.png"

# print(outputPath)

print(model.predict(inputPath).json())

# predictImage = model.predict(inputPath)

# predictImage.save(outputPath)

# print(json.dumps(predictImage.json()))
