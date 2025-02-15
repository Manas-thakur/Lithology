from roboflow import Roboflow
import sys
import base64
import json
from PIL import Image
from io import BytesIO

rf = Roboflow(api_key="K55NQTRJSzFTBv4mT7VB")
project = rf.workspace().project("val-test-wevma")
model = project.version(1).model


def base64_to_image(base64_data):
    
    base64_data += '=' * (len(base64_data) % 4)
    # Decode base64 data
    image_data = base64.b64decode(base64_data)

    # Create a BytesIO object to treat the binary data as a file
    image_stream = BytesIO(image_data)

    # Open the image using PIL
    image = Image.open(image_stream)
    return image


def image_to_base64(image):
    # Convert image to bytes
    image_bytes = image.tobytes()

    # Encode bytes to base64
    base64_encoded = base64.b64encode(image_bytes)

    # Convert bytes to a string (if needed)
    base64_string = base64_encoded.decode('utf-8')

    return base64_string



base64_data = sys.argv[1]
imageData = base64_data.split(',')[1]
image = base64_to_image(imageData)

# Save the image as a JPEG file
image.save("output.jpg")

# image.show()



result = {}











# visualize your prediction
# print(model.predict("output.jpg", confidence=40, overlap=30).json())
# print(model.predict("output.jpg", confidence=40, overlap=30).json())

model.predict("output.jpg").save("prediction.jpg")










image_path = 'prediction.jpg'  # Change this to the path of your image
imageJpg = Image.open(image_path)

# Convert image to bytes
image_bytes = imageJpg.tobytes()

# Encode bytes to base64
base64_encoded = base64.b64encode(image_bytes)

# Convert bytes to a string (if needed)
base64_string = base64_encoded.decode('utf-8')

# result["imageBase64"] = base64_string
# result["json"] = jsonData


# print(json.dumps(result))
# infer on a local image
# print(model.predict(sys.argv[1], confidence=40, overlap=30).json())
# infer on an image hosted elsewhere
# print(model.predict("URL_OF_YOUR_IMAGE", hosted=True, confidence=40, overlap=30).json())