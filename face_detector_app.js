

async function loadModels() {
    await faceapi.nets.tinyFaceDetector.loadFromUri("C:/Users/Anton/Desktop/ANTEI - projects/face-detector-app/models");
    await faceapi.nets.ageGenderNet.loadFromUri("C:/Users/Anton/Desktop/ANTEI - projects/face-detector-app/models");
}

async function handleImageUpload() {
    const imageUpload = document.getElementById('imageUpload');
    const image = await faceapi.bufferToImage(imageUpload.files[0]);
    const detections = await faceapi.detectAllFaces(image, new faceapi.TinyFaceDetectorOptions())
                .withAgeAndGender(); 

            if (detections.length > 0) {
                detections.forEach(detection => {
                    const gender = detection.gender;

                    console.log("Пол:", gender);
                });
            }
}

document.getElementById('imageUpload').addEventListener('change', handleImageUpload);

loadModels();