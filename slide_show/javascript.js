
const slide_anh = ['anh.png', 'anh1.jpg', 'anh2.jpg', 'anh3.jpg', 'anh4.jpg'];
let currentIndex = 0;
let slideshowterval;


function load_imgae()
{
    const poster = document.getElementById('poster');
    poster.src = slide_anh[currentIndex];
}
function back()
{
    currentIndex = (currentIndex -1+slide_anh.length) %slide_anh.length
    load_imgae();
}
function next()
{
    currentIndex = (currentIndex +1 + slide_anh.length) %slide_anh.length
    load_imgae();
}
function show()
{
    stop()
    slideshowterval = setInterval(next, 1000)
}
function stop()
{
    clearInterval(slideshowterval)
}