const picdown = document.querySelector('.bikes__picture-background');

picdown.addEventListener('pointerdown', (event) => {
  console.log(event.layerX)
  picdown.addEventListener('pointerup', (event) => {
    console.log(event)
  })
})
