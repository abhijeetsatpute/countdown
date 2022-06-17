import("https://use.fontawesome.com/c67bc484ed.js")
let dateToday = new Date();
dateToday.setDate(dateToday.getDate() + 1);
let dateNow = dateToday.toISOString().split('T')[0];
$("#input .dateInput input").attr('min', dateNow);

function start(date){
	 //prompt("Enter Date in YEAR-MM-DD Format");
	var d = new Date(`${date}T00:00:00`) - new Date();
	const l = Array.from(document.querySelectorAll('span')).reverse();
	const s = [1000,60,60,24];

	const vset = (e,t,c) => {
		const m = c ? t % c : t;
		e.setAttribute('b', m < 10 ? '0' + m : m);
		e.classList.remove('ping');
		setTimeout(() => e.classList.add('ping'), 10);
		return m;
	};
	const calc = (t,i=0,b=0) => {
		if (!s[i]) return;
		t = opti(t,s[i]);
		if (vset(l[i],t,s[i+1])==s[i+1]-1 || b) calc(t,i+1,b);
	}

	const count = (b=0) => (d -= 1000) && calc(d,0,b);
	const opti = (v,n) => (v - (v % n)) / n;

	setTimeout(() => {
		!count(1) && setInterval(count, 1000)
	}, d % 1000);

}

const box = document.querySelector('.box');
box.addEventListener('click', (e)=>{
  e.target.classList.toggle('pause');
})

function startTimer(){
	let inputDate = $(".dateInput input").val();
	console.log(inputDate);
	console.log(inputDate<=dateNow);
	if( inputDate != '' && inputDate>=dateNow){	
		$($(".titleInput input")[0]).css("background-color", "#1a1c2a");
		$($(".titleInput input")[0]).css("color", "white");
		$($(".titleInput input")[0]).css("border", "2px solid white");
		$($(".titleInput input")[0]).prop("disabled",true);
		$($(".dateInput input")[0]).prop("disabled",true);
		$($(".dateInput input")[0]).css("-webkit-app-region", "drag");
		$($(".dateInput input")[0]).css("background-color", "grey");
		start(inputDate);
		let text = $(".startBtn button")[0].innerText;
		if(text == 'Start'){
			$(".startBtn button")[0].innerText = "Reset";
			$(".startBtn button").removeClass('buttonGreen').addClass('buttonRed')
		} else if(text == 'Reset'){
			$(".startBtn button")[0].innerText = "Start";
			$(".startBtn button").removeClass('buttonRed').addClass('buttonGreen');
			window.location.reload();
		}
		$("#errorMessage").addClass("hide");
	}else{
		$($(".dateInput input")[0]).css("background-color", "#FF6F61");
		$("#errorMessage").removeClass("hide");
	}
}

