
$.ajax({
    url: "../../php/code/gcal.php",    //请求的url地址
    dataType: "json",   //返回格式为json
    type: "GET",   //请求方式
    success: function(arr) {
        //请求成功时处理
        create(arr);
    }
});



function create(arr){
	for (var i = 0; i < arr.length; i++) {
		var news = $("<div/>");
		news.addClass("news");
		$(".wrap").append(news);
		var a1 = $("<a/>")
		news.append(a1)
		var img = $("<img/>");
		img.attr("src","../img/gcalImg/"+arr[i].img);
		a1.append(img);
		var a2 = $("<a/>")
		a2.text(arr[i].title);
		news.append(a2)
		var p = $("<p/>");
		p.text(arr[i].content)
		news.append(p);
		a1.attr("href","#");
		a2.attr("href","#");
	}
}
