const video = document.getElementById("vid");
const btn = document.getElementById("btn");
const canvas = document.getElementById("canva");
const ctx = canvas.getContext('2d');

let image = '';

navigator.mediaDevices.getUserMedia({
    video : true, audio : false
})
.then((stream) => {
    video.srcObject = stream;
})
.catch(alert("Permission not granted"));

btn.addEventListener('click', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    image = canvas.toDataURL('image/jpeg');
    console.log("Image : " + image);
  });
