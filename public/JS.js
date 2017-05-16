$(".gokufights").hide()
$(".gohanfights").show()
$(".vegetafights").hide()
$(".trunksfights").hide()
GohanInfo()

// ==========        Axios Get Call to the Api        ===========
const key ="81599007ff214265c13a0888da791d0c"

function dbz() {
  return axios.get(`http://api.themoviedb.org/3/search/tv?&query=Dragon&api_key=81599007ff214265c13a0888da791d0c`)
}

function supersayain(ssj){
  // console.log("hello world")
  let dbzTitle = ssj.name;
  let dbzOverview = ssj.overview;
  let title = document.querySelector('.title');
  title.innerText = dbzTitle;
  $('.overview').text(dbzOverview)
  // console.log(dbzTitle , dbzOverview)
}

dbz().then(result => result.data.results[2]).then(supersayain)


//======        This will make the hidden heros show up.      ==========
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

// =======     Brings up each Characters information on to the screen      =========
function dragon(){
	// alert('Dragon Ball Z!')
	document.body.style.background = "url('./images/Dragon.jpg') no-repeat"
	document.body.style.backgroundSize = "1424px 860px"
}
function goku(){
	// alert('Here Comes Goku!')
	document.body.style.background = "url('./images/Goku.jpg') no-repeat"
	document.body.style.backgroundSize = "1424px 860px"
}
function vegeta(){
	// alert('I am Prince Vegeta!')
	document.body.style.background = "url('./images/Vegeta.png') no-repeat"
	document.body.style.backgroundSize = "1424px 860px"
}
function gohan(){
	// alert('I know your kind!')
	document.body.style.background = "url('./images/SSJ2_Gohan.jpg') no-repeat"
	document.body.style.backgroundSize = "1424px 860px"
}
function trunks(){
	// alert('I dont have time to waste here!')
	document.body.style.background = "url('./images/trunks.jpg') no-repeat"
	document.body.style.backgroundSize = "1424px 860px"
}

function goten(){
	// alert('I dont have time to waste here');
	document.body.style.background = "url('./images/Goten.jpeg') no-repeat"
	document.body.style.backgroundSize = "1424px 860px"
}

function GokuInfo () {
  let name = data[0].name;
  let died = data[0].died;
  let fought = data[0].fought;
  $('.name').text(name)
  fighter(fought)
  // console.log(data, name, died,fought)
}



function GokuInfo () {
  let name = data[0].name;
  let died = data[0].died;
  let fought = data[0].fought;
  $('.name').text(name)
  gokufighter(fought)
  // console.log(data, name, died,fought)
}

function GohanInfo () {
  let name = data[2].name;
  let died = data[2].died;
  let fought = data[2].fought;
  $('.name').text(name)
  $('.gohanName').text(name)
  gohanfighter(fought)
  // console.log(data, name, died,fought)
}

function VegetaInfo () {
  let name = data[1].name;
  let died = data[1].died;
  let fought = data[1].fought;
  $('.name').text(name)
  $('.vegetaName').text(name)
  vegetafighter(fought)
  // console.log(data, name, died,fought)
}

function TrunksInfo () {
  let name = data[3].name;
  let died = data[3].died;
  let fought = data[3].fought;
  $('.name').text(name)
  $('.trunksName').text(name)
  trunksfighter(fought)
  // console.log(data, name, died,fought)
}




function gokufighter(fought){
fought.map( (name,index) =>
$('.gokuvillians').append(`<li class="key">${name.name}</li>`)
)
  // console.log(fought)
}

function gohanfighter(fought){
fought.map( (name,index) =>
$('.gohanvillians').append(`<li class="key">${name.name}</li>`)
)
  // console.log(fought)
}

function vegetafighter(fought){
fought.map( (name,index) =>
$('.vegetavillians').append(`<li class="key">${name.name}</li>`)
)
  // console.log(fought)
}

function trunksfighter(fought){
fought.map( (name,index) =>
$('.trunksvillians').append(`<li class="key">${name.name}</li>`)
)
  // console.log(fought)
}

function whichHero(event){
  console.log(event.target.textContent.length)
  let clicked = event.target.textContent
  if (clicked === "Dragon Ball"){
    $(".gokufights").hide()
    $(".gohanfights").hide()
    $(".vegetafights").hide()
    $(".trunksfights").hide()
    // console.log("hello world")
  }
  else if(clicked === "Goku"){
    $(".gokufights").show()
    $(".gohanfights").hide()
    $(".vegetafights").hide()
    $(".trunksfights").hide()
    // console.log("hello Goku")
    GokuInfo()
  }
  else if(clicked === "Gohan"){
    $(".gokufights").hide()
    $(".gohanfights").show()
    $(".vegetafights").hide()
    $(".trunksfights").hide()
    // console.log("hello Gohan")
    GohanInfo()
  }
  else if(clicked === "Trunks"){
    $(".gokufights").hide()
    $(".gohanfights").hide()
    $(".vegetafights").hide()
    $(".trunksfights").show()
    TrunksInfo()
    // console.log("hello Trunks")
  }
  else if(clicked === "Vegeta"){
    $(".gokufights").hide()
    $(".gohanfights").hide()
    $(".vegetafights").show()
    $(".trunksfights").hide()
    // console.log("hello Vegeta")
    VegetaInfo()
  }
}
