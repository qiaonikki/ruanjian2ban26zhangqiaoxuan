window.onload = function(){
	var activity = document.getment.getElementById("activity");
	var top = activity.offsetTop+150;

	windown.onscroll = function(){
		var scrollTop = 
document.documentElement.scrollTop||document.body.scrollTop;

		if(scrollTop>=top){
			activity.className += " "+"fixed";
		}else {
			activity.className = "";
		}
	}
}
