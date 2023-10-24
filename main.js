Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera=document.getElementById('webcam');
Webcam.attach('#camera');

function identify() {
    Webcam.snap(function(data_uri){
        document.getElementById('pic').innerHTML="<img src="+data_uri+" id='fr_img'>"; 
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ddZ45JcdD/model.json", modelloaded)