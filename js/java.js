//below is code worked on from javatest workspace for random tarot card

/*$(document).ready(function() {
    alert("I am an alert box!");
});    USED THIS TO TEST JS  */

/*all of probs had with items not appearing when I saved (css color only showed while typing notes and would revert back to nothing and also not have js work was for 2 reasons: had clickMe instead of clickME and had a directory up on css link in head*/

$(document).ready(function() {
    $('#ask').click(function(){
        $('#tarotframe').fadeIn(2000); /* i may change rate. still too fast. something wrong with main page layout, as before tarotframe was hidden and cards faded in, and when refreshed page, tarotframe would be empty again. 9/4 */
        $('#image').fadeIn(5000);
  });
});  

var images = [ /* 16 cards in total as of 9/5. Prefer to have more selection for guests. Don't care if random sometimes displays similar cards in a row. That would make me want to stay on longer to see which other cards there...if I liked what I saw and didn't feel duped */

/*for images below, don't want them muddying up cards. And seems like a pain in ass to get all of this on img, esp since some photos have asian or arabic names in print/script. SHOULD I JUST ACKNOWLEDGE THAT ALL CARDS IMGS FROM PNGTREE.COM? */
/* img all 550W x 730H font used in pixler: Sitka Text */

  //
  "img-t/gray.jpg", // also, I made this 'smooth' in c9 editing. Graphics from  <a href="https://pngtree.com/freepng/cute-sleeping-cat_1462582.html">pngtree.com</a>
  "img-t/tree.jpg",
  "img-t/call.jpg", // Graphics from  <a href="https://pngtree.com/freepng/cat-call_2417042.html">pngtree.com</a> (Axel Arriaza Muñoz)
  "img-t/money.jpg",// <a href='https://pngtree.com/'>Graphics from pngtree.com</a>  )(Jechelle Ann Martin)
  "img-t/travel.jpg",
  "img-t/god.jpg",
  "img-t/love.jpg",
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




