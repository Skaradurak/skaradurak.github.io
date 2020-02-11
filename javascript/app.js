var backgroundImg = ['img/notrump.jpeg',
                     'img/don.jpg'
                    ]; //Add more backgrounds to the array
var backgroundCount = 0;


// $(function() {
//   $('body').css('background-image', 'url(' + backgroundImg[backgroundCount] + ')'); //allows a variable for changing background img based in an array, change number in [] to change background...
// });
//
// $('#onClick').on('click', function(){
//   console.log("test");
//   backgroundCount++;
//   if (backgroundCount > backgroundImg.length - 1) backgroundCount = 0;
//   $('body').css('background-image', 'url(' + backgroundImg[backgroundCount] + ')');
// });

function showdon (num){
  document.getElementById(`holetest-${num}`).style.backgroundImage = `url('${backgroundImg[backgroundCount]}`
  console.log(document.getElementById("holetest"))
}
