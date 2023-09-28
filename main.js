function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/nt6VqCZRR/model.json", modelready);
}

function modelready(){
    classifier.classify(gotresult);
}

