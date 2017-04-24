// This makes the search bar increase in size after clicked.
$('.search').focus('click', function () {
  let pressed = $(this);
  pressed.animate({
    width:"35%"
  },1000)
});

// This will make the hidden heros show up.
$('.hidden').hover(function () {
	$('#side-link').animate({
		width:"100px"
	}, 1000);
	$('.heroes').css("display","unset")
	$('.heroes').animate({
		left:"0px"
	}, 1000);

}, function () {
	$('#side-link').animate({
		width:"100px"
	}, 1000);
	$('.heroes').animate({
		left:"-100px"
	});
	$('.heroes').css("display","none")
});

// Brings up Goku's information on to the screen.
function goku(){
	// alert('Here Comes Goku!')
	document.body.style.background = "url('./images/Goku.jpg') no-repeat"
	document.body.style.backgroundSize = "1424px 860px"
}
function vegeta(){
	alert('I am Prince Vegeta!')
	document.body.style.background = "url('./images/Vegeta.png') no-repeat"
	document.body.style.backgroundSize = "1424px 860px"
}
function gohan(){
	alert('I know your kind!')
	document.body.style.background = "url('./images/SSJ2_Gohan.jpg') no-repeat"
	document.body.style.backgroundSize = "1424px 860px"
}
function trunks(){
	alert('I dont have time to waste here!')
	document.body.style.background = "url('./images/trunks.jpg') no-repeat"
	document.body.style.backgroundSize = "1424px 860px"
}

function goten(){
	alert('I dont have time to waste here');
	document.body.style.background = "url('./images/Goten.jpeg') no-repeat"
	document.body.style.backgroundSize = "1424px 860px"
}

