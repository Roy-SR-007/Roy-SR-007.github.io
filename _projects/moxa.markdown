---
layout: page
title: MOXA10k
description: Real-Time Mask Detection System
img: /assets/img/moxa/moxa-0.jpg
importance: 1
year: 2020
category: Social
---

The COVID-19 pandemic has changed the way we socialize once and for all. Maintaining safety protocols have now become utmost concern wherever we go and with whoever we talk to. To reduce contact, the majority of the entire working class has moved to the safety of their homes. But whenever, one goes out, the imperturbable Face Mask has now become mandatory in our lives.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3">
        <img class="img-fluid rounded z-depth-1" src="https://www.indiaspend.com/h-upload/2020/12/17/359858-covid-19-retrospective1600.jpg" alt="" title=""/>
    </div>
</div>
<div class="caption">
    Health workers visiting a locality to collect RT-PCR samples to gauge the infection spread in that residential area
</div>

To monitor whether safety protocols are maintained in different areas, local police agencies have to resort to installed CCTV camera footage in order to mark areas which need additional measures. Nowadays, these cameras are already endowed with computer vision functionalities through embedded systems and have been used in wide range of applications, most notably license plate detection.

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3">
        <img class="img-fluid rounded z-depth-1" src="https://sod.pixlab.io/images/out_plate.png" alt="" title=""/>
    </div>
    <div class="col-sm-6 mt-3">
        <img class="img-fluid rounded z-depth-1" src="https://learn.alwaysai.co/hubfs/object-dectection-4.jpg" alt="" title=""/>
    </div>
</div>
<div class="caption">
    Common use cases such as license plate detection and object detection
</div>

Similarly, face mask detection can be thought of as a special case of object detection. Although, detection can be done fairly accurately using different state-of-the-art object detection methods, the real time performance is the one that needs to be taken into considering as all practical use cases demand instant processing of results for rapid response measures.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3">
        <img class="img-fluid rounded z-depth-1" src="https://user-images.githubusercontent.com/4096485/82835867-f1c62380-9ecd-11ea-9134-1598ed2abc4b.png" alt="" title=""/>
    </div>  
</div>
<div class="caption">
    Performance comparison of Yolov4 v/s other SOTA object detection methods
</div>

For this project, we used [YOLOv4](https://arxiv.org/abs/2004.10934), one of the most popular object detection methods, which claims to use universal features such as Weighted-Residual-Connections (WRC), Cross-Stage-Partial-connections (CSP), Cross mini-Batch Normalization (CmBN), Self-adversarial-training (SAT) and Mish-activation to have a considerable increase in real time processing on widely used GPUs.

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/moxa/moxa-1a.jpg' | relative_url }}" alt="" title=""/>
    </div>
    <div class="col-sm-6 mt-3">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/moxa/moxa-1b.jpg' | relative_url }}" alt="" title=""/>
    </div>
</div>
<div class="caption">
    (Left) Original image and (Right) Output image with bounding boxes drawn on faces along with the predicted mask/nomask annotations
</div>

Even though detection on faces which occupy a good portion of the image are is relatively easy, long range detection is extremely tough and requires a specialized training dataset. By coordinating with an arrangement with Kolkata Police, a 2-3 CCTV feeds were taken for annotation purposes. The feed videos were broken into frames and around 10k frames were annotated by hand for model training purposes. The final trained model showed a considerable increase in performance for long range detection purposes where other models by other police agencies failed.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/moxa/moxa-2a.jpg' | relative_url }}" alt="" title=""/>
    </div>
    <div class="col-sm-6 mt-3">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/moxa/moxa-2b.jpg' | relative_url }}" alt="" title=""/>
    </div>
    <div class="col-sm-6 mt-3">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/moxa/moxa-2c.jpg' | relative_url }}" alt="" title=""/>
    </div>
</div>
<div class="caption">
   Output images with bounding boxes drawn on faces along with the predicted mask/nomask annotations along with long range detections
</div>

Using YOLOv4, we were able to achieve around 30 FPS on Full HD footage.
Along with extensive documentation, the final product delivered was containerized for easy deployment. The docker code used for YOLOv4 deployment can be found in the following public GitHub repository.

<div class="row justify-content-sm-center">
    <div class="col-sm-5 mt-3">
        <a href="https://github.com/nathzi1505/yolov4-darknet-docker" target="_blank">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/moxa/moxa-3.jpg' | relative_url }}" alt="" title=""/>
        </a>
    </div>
</div>