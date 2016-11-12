var subfirst = document.getElementsByClassName("subfirst");
var bottom = document.getElementsByClassName("bottom");
	
	for (var i = 1; i < 3; i++) {
		bottom[i].style.display = "none";
	}

		$.ajax({
    			url: "../../php/code/jszc.php?id="+0,    //请求的url地址
    			dataType: "json",   //返回格式为json
    			type: "GET",   //请求方式
    			success: function(arr) {
        			//请求成功时处理
   				create(arr,bottom[0])
    			}
		});
		$.ajax({
    			url: "../../php/code/jszc.php?id="+1,    //请求的url地址
    			dataType: "json",   //返回格式为json
    			type: "GET",   //请求方式
    			success: function(arr) {
        			//请求成功时处理
   				create(arr,bottom[1])
    			}
		});
		$.ajax({
    			url: "../../php/code/jszc.php?id="+2,    //请求的url地址
    			dataType: "json",   //返回格式为json
    			type: "GET",   //请求方式
    			success: function(arr) {
        			//请求成功时处理
   				create(arr,bottom[2])
    			}
		});

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
		title.attr("href","http://www.shuncom.com/filedownload/4707");
		title.text(arr[i].title)
		p.append(title);
		var time = $("<span/>");
		time.text(arr[i].time);
		p.append(time);		
	}
}