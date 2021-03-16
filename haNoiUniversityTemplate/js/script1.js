//start slide
var imgNum = document.getElementsByClassName("slide-img");
var imgNum1 = document.getElementsByClassName("slide-img1");
var slideNum = 0;
showSlide(2);  
function next () {
  slideNum++;
  if (slideNum >= imgNum.length) {
    slideNum = 0;
  }
  showSlide(slideNum);
}
function pre () {
  slideNum--;
  if (slideNum < 0) {
    slideNum = imgNum.length-1;
  }
  showSlide(slideNum);
}
function showSlide (n) {
  for (var i = 0; i < imgNum.length; i++) {
    imgNum[i].style.display = 'NONE';
  }
  imgNum[n].style.display = 'block';
}
setInterval(function(){
  next();
},6000);
// end slide