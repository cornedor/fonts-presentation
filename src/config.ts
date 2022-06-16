export const config = {
  width: 1024,
  height: 768,
  scale: 1,
};

function setScale() {
  const windowRatio = window.innerHeight / window.innerWidth;
  const slideRatio = config.height / config.width;
  console.log(windowRatio, slideRatio, window.innerHeight / config.height);
  if (windowRatio < slideRatio) {
    config.scale = window.innerHeight / config.height;
  } else {
    config.scale = window.innerWidth / config.width;
  }
}

setScale();
window.addEventListener("resize", setScale);
