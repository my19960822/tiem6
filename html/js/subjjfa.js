
function getvl(name) {
	var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
	if (reg.test(location.href)){
		return decodeURI(RegExp.$2.replace(/\+/g, " "));
    }  
    return "";
};
var id = getvl("id");

$.ajax({
    url: "../../php/code/subjjfa.php?id="+id,    //请求的url地址
    dataType: "json",   //返回格式为json
    type: "GET",   //请求方式
    success: function(arr) {
        //请求成功时处理
        console.log(arr)
        create(arr);
    }
});



function create(arr){
	for (var i = 0; i < arr.length; i++) {
		var news = $("<div/>");
		news.addClass("news");
		$(".main").append(news);
		var a1 = $("<a/>")
		news.append(a1)
		var img = $("<img/>");
		img.attr("src","../img/jjfaImg/"+arr[i].img);
		a1.append(img);
		var a2 = $("<a/>")
		a2.text(arr[i].title);
		news.append(a2)
		var p = $("<p/>");
		p.text(arr[i].content)
		news.append(p);
		a1.attr("href","#");
		a2.attr("href","#");
		$(".name").text(arr[i].name);
	}
}
