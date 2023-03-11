let images = [];
let imageTrail = [];

function preload() {
  // Load the images
  images.push(loadImage("./imgs/poster-08.png"));
  images.push(loadImage("./imgs/poster-09.png"));
  images.push(loadImage("./imgs/poster-10.png"));
  images.push(loadImage("./imgs/poster-11.png"));
  images.push(loadImage("./imgs/poster-12.png"));
  images.push(loadImage("./imgs/poster-13.png"));
  images.push(loadImage("./imgs/poster-14.png"));
  images.push(loadImage("./imgs/poster-15.png"));
  images.push(loadImage("./imgs/poster-16.png"));
  images.push(loadImage("./imgs/poster-18.png"));
  images.push(loadImage("./imgs/poster-19.png"));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(5);
}

function draw() {
  // Draw an image at the current mouse location
  let img = getRandomImage();
  let imgWidth = img.width;
  let imgHeight = img.height;
  let currentTime = millis();

  // Add image to trail
  imageTrail.push({
    img: img,
    x: mouseX - imgWidth / 2,
    y: mouseY - imgHeight / 2,
    width: imgWidth,
    height: imgHeight,
    createTime: currentTime
  });

  // Draw trail
  clear();
  for (let i = 0; i < imageTrail.length; i++) {
    let imageInfo = imageTrail[i];
    let age = currentTime - imageInfo.createTime;
    let opacity = map(age, 0, 6000, 255, 0); 
    tint(255, opacity);
    image(imageInfo.img, imageInfo.x, imageInfo.y, imageInfo.width, imageInfo.height);
  }

  // Remove oldest image from trail if more than 20 images
  if (imageTrail.length > 20) {
    imageTrail.shift();
  }
}

function getRandomImage() {
  return random(images);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


