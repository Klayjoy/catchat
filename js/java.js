//below is code worked on from javatest workspace for random tarot card

/*$(document).ready(function() {
    alert("I am an alert box!");
});    USED THIS TO TEST JS  */

/*all of probs had with items not appearing when I saved (css color only showed while typing notes and would revert back to nothing and also not have js work was for 2 reasons: had clickMe instead of clickME and had a directory up on css link in head*/

// cards come up fine, but if one clicks on image that slid down and new random card is up when click on 'think of question'. personally i like this so doesn't have to keep sliding down, BUT THEN MUST STATE HOW WORKS in wording on play.html. 

$(document).ready(function() {
    $('#ask').click(function(){
        $('#image').fadeIn(3000);
        $('#tarotframe').slideDown(3000);
  });
});  

var images = [ /* 13 cards in total. I will let querant know how many cards are in the deck so they don't wonder if the got them all. 

/*for images below, don't want them muddying up cards. And seems like a pain in ass to get all of this on img, esp since some photos have asian or arabic names in print/script. SHOULD I JUST ACKNOWLEDGE THAT ALL CARDS IMGS FROM PNGTREE.COM? */


  //
  "img-t/gray.jpg", // also, I made this 'smooth' in c9 editing. Graphics from  <a href="https://pngtree.com/freepng/cute-sleeping-cat_1462582.html">pngtree.com</a>
  "img-t/tree.jpg",
  "img-t/call.jpg", // Graphics from  <a href="https://pngtree.com/freepng/cat-call_2417042.html">pngtree.com</a> (Axel Arriaza Muñoz)
  "img-t/money.jpg",// <a href='https://pngtree.com/'>Graphics from pngtree.com</a>  )(Jechelle Ann Martin)
  "img-t/newspaper.jpg",
  "img-t/bad.jpg",
  "img-t/fly.jpg",
  "img-t/movie.jpg",
  "img-t/clan.jpg",
  "img-t/vroom.jpg",
  "img-t/art.jpg",
  "img-t/shower.jpg", 
  "img-t/dog-cat.jpg"   
   ];

init();

function random_image(images) {
  var random = randomize(images);
  while(images[random] === document.getElementById("image").src){
    random = randomize(images)
  }
  document.getElementById("image").src = images[random].toString();
}

function randomize(array){
  return Math.floor((Math.random() * (array.length)));
}

function init() {
  document.getElementById("ask").addEventListener("click", function(){
    random_image(images);
  });
  random_image(images);
}




