//	------------下拉菜单---------------
	var menu = document.getElementsByClassName("menu");
	var submenu = document.getElementsByClassName("submenu");
	var arr = [64,64,192,96]
	for (var i = 0; i < menu.length; i++) {
		menu[i].index = i;
		menu[i].onmouseover = function(){
			submenu[this.index].style.height = arr[this.index] + "px";	
		}
	};
	for (var i = 0; i < menu.length; i++) {
		menu[i].onmouseout = function(){
			submenu[this.index].style.height = "0px";
		}
	};
	for (var i = 0; i < submenu.length; i++) {
		submenu[i].index = i;
		submenu[i].onmouseover = function(){
			submenu[this.index].style.height = arr[this.index] + "px";	
		}
	};
	for (var i = 0; i < submenu.length; i++) {
		submenu[i].onmouseout = function(){
			submenu[this.index].style.height = "0px";
		}
	};