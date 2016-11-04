var subfirst = document.getElementsByClassName("subfirst");
var bottom = document.getElementsByClassName("bottom");
	
	for (var i = 1; i < 4; i++) {
		bottom[i].style.display = "none";
	}

	for (var i = 0; i < subfirst.length; i++) {
		subfirst[i].index = i
		subfirst[i].onmouseover = function() {
			clear()
			this.id = "subfirst2";
			bottom[this.index].style.display = "block";
		}
	}
	function clear(){
		for (var i = 0; i < subfirst.length; i++) {
			subfirst[i].id = "";
			bottom[i].style.display = "none";
		}
	}

	


function create(arr,wrap){
	for (var i = 0; i < arr.length; i++) {
		var p = $("<p/>");
		$(wrap).append(p);
		var title = $("<a/>");
		title.attr("href","#");
		title.text(arr[i].title)
		p.append(title);
		var time = $("<span/>");
		time.text(arr[i].time);
		p.append(time);		
	}
}