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

//	------------轮播图---------------
	var index = 0;
	$.ajax({
	    url: "../../php/code/index.php",    //请求的url地址
	    dataType: "json",   //返回格式为json
	    type: "GET",   //请求方式
	    success: function(arr) {
	        //请求成功时处理
	        create(arr);
	        var carousel = document.getElementById('carousel');
		    var wrap = document.getElementsByClassName('wrap')[0];
			var ul = carousel.getElementsByTagName('ul')[0];	
			var li = ul.getElementsByTagName('li');
			clicklb(li,wrap);
			roll(li,wrap)
	    }
	});

	function create(arr) {
		var carousel = $("#carousel")
		var wrap = $("<div/>");
		wrap.addClass("wrap");
		carousel.append(wrap);
		var ul = $("<ul/>");
		carousel.append(ul);
		for (var i = 0; i < arr.length; i++) {
			var img = $("<img/>");
			img.attr("src","../img/syImg/"+arr[i].img);
			img.css({height:"490px",width:"1440px"});
			wrap.append(img);
			var li = $("<li/>");
			ul.append(li)
		};
		carousel.css({width:img.width()})
		wrap.css({width:arr.length*wrap.width()})
	}
	function clicklb(li,wrap){
		for (var i = 0; i < li.length; i++) {
			li[i].onclick = (function(num) {			
				return function() {
					empty(li);
					wrap.style.left = num*(-1440) + "px";
					li[num].style.background = "#333";							
				};
			})(i)	
		};
	}
	function empty(li) {
		for (var i = 0; i < li.length; i++) {
			li[i].style.background = "#ccc";
		};
	};

	function roll(li,wrap){
		jsq1 = setInterval(function(){
			empty(li);
			index++;
			if (index > 3) {
				index = 0;
			};
			wrap.style.left = index*(-1440) + "px";
			li[index].style.background = "#333";
		},4000);
	};