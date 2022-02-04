const picdown = document.querySelector('.bikes__picture-background');

picdown.addEventListener('pointerdown', (event) => {
  console.log(event.layerX)
  picdown.addEventListener('pointerup', (event) => {
    console.log(event)
  })
})

const bikes = document.querySelector('.bikes');

let scrollWidth = Math.max(
  document.body.scrollWidth, document.documentElement.scrollWidth,
  document.body.offsetWidth, document.documentElement.offsetWidth,
  document.body.clientWidth, document.documentElement.clientWidth
);

console.log(scrollWidth);

window.onresize = function() {
  scrollWidth = Math.max(
    document.body.scrollWidth,
    document.body.offsetWidth,
    document.body.clientWidth,
  );
  console.log(scrollWidth);
};