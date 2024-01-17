// DOM
const slide = document.querySelector(".slide")

const images = ["./images/meme1.jpg", "./images/meme2.jpg", "./images/meme3.jpg"];

let i = 0

function next() {
  i = i + 1
  i %= images.length
  slide.src = images[i]
}

function auto() {
  setInterval(function() {
    next()
  }, 1000)
}
