from ultralytics import YOLO
from PIL import Image
import cv2
import numpy as np
import torch
import sys
# Load a COCO-pretrained YOLOv8n model
model = YOLO('machineLearning/Crack/resultscrack/rock/weights/best.pt','v8')

# Display model information (optional)
# model.info()


inputPath  =  sys.argv[1]
outputPath = sys.argv[2] + sys.argv[3] + "_predication.png"


# Run inference with the YOLOv8n model on the 'bus.jpg' image
results = model.predict(source=inputPath,conf=0.20,save=True)
print(results)

# Show the results
for r in results:
    im_array = r.plot()  # plot a BGR numpy array of predictions
    im = Image.fromarray(im_array[..., ::-1])  # RGB PIL image
    im.save(outputPath)  # save image


# # Access the first element of the results list
# first_result = results[0]

# # Get the original image as a numpy array
# orig_img = first_result.orig_img

# # Convert the boxes and class indices to numpy arrays if they are tensors
# boxes = first_result.boxes.xyxy[0].numpy() if isinstance(first_result.boxes.xyxy[0], torch.Tensor) else first_result.boxes.xyxy[0]
# classes = first_result.boxes.cls[0].numpy() if isinstance(first_result.boxes.cls[0], torch.Tensor) else first_result.boxes.cls[0]

# # Handle cases where there's only one detection
# if boxes.ndim == 1:
#     boxes = np.array([boxes])
# if classes.ndim == 0:
#     classes = np.array([classes])

# # Iterate over the boxes and class indices
# for box, cls_idx in zip(boxes, classes):
#     # Extract coordinates
#     x1, y1, x2, y2 = map(int, box[:4])
#     label_text = first_result.names[int(cls_idx)]

#     # Draw the bounding box
#     cv2.rectangle(orig_img, (x1, y1), (x2, y2), color=(0, 255, 0), thickness=2)

#     # Put the label near the bounding box
#     cv2.putText(orig_img, label_text, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

# # Convert to BGR for OpenCV
# orig_img_bgr = cv2.cvtColor(orig_img, cv2.COLOR_RGB2BGR)

# # Save the image with detections
# cv2.imwrite('runs/Crackdetection_image.jpg', orig_img_bgr)
