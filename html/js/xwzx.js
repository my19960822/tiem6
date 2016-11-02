var a = 0;
var arr;
$.ajax({
    url: "../../php/code/xwzx.php",    //请求的url地址
    dataType: "json",   //返回格式为json
    type: "GET",   //请求方式
    async:false,
    success: function(arr1) {
        //请求成功时处理
        arr=arr1;
	}        
});
	create(arr)
    show(arr,1);
	function alter(arr) {
		var img = document.getElementsByClassName('img');
		var a2 = document.getElementsByClassName('title');
		var p = document.getElementsByClassName('content');
		for (var i = 0; i < arr.length; i++) {
			img[i].src = "../img/xwzxImg/"+arr[i].img;
			console.log("../img/xwzxImg/"+arr[i].img);
			a2[i].innerHTML = arr[i].title;
			p[i].innerHTML = arr[i].content;	
		}
		
	}
	function pageCon(arr,start,len){
      var constr=[];
      for(var i=start;i<start+len;i++){
          if(arr[i-1]){constr.push(arr[i-1])} 
      }
      return constr;
    }
	function show(arr,now_page){
		  var sum=arr.length; //数据总个数
		  var page_size=8;//一页显示的内容
		  var page_num=Math.ceil(sum/page_size);//分页链接个数
		  var start=(now_page-1)*page_size+1;//页面从数据的哪一条开始
		  var page_str='';//创建分页链接
		  if (now_page>1) {
		    page_str+='<span onclick="show(arr,1)">首页</span>';
		    page_str+='<span onclick="show(arr,'+(now_page-1)+')">上一页</span>';
		    if (now_page-1!=1) {
      			page_str+='<span onclick="show(arr,'+(now_page-1)+')">...</span>';
    		};
		    if (now_page==page_num) {
		        page_str+='<span onclick="show(arr,'+(now_page-2)+')">'+(now_page-2)+'</span>';
		      };
		    page_str+='<span onclick="show(arr,'+(now_page-1)+')">'+(now_page-1)+'</span>';
		  };
		    page_str+="<span style='background:#036cb4;color:white;margin:0'>"+now_page+"</span>";
		
		  if (now_page<page_num) {
		    page_str+='<span onclick="show(arr,'+(now_page+1)+')">'+(now_page+1)+'</span>';
		      if (now_page==1) {
		        page_str+='<span onclick="show(arr,'+(now_page+2)+')">'+(now_page+2)+'</span>';
		      };
		      if (now_page+1!=page_num) {
      			page_str+='<span onclick="show(arr,'+(now_page+1)+')">...</span>';
    		  };
		    page_str+='<span onclick="show(arr,'+(now_page+1)+')">下一页</span>';
		    page_str+='<span onclick="show(arr,'+(page_num)+')">尾页</span>';
		  };
		  
		  var constr=pageCon(arr,start,page_size);
		  	alter(constr);
		  	if (a==0) {
		  		var bbb = $("<div/>");
		  		bbb.addClass("fylj");
		  		$('.wrap').append(bbb);
		  		a=1
		  	};		  	  
        	$(".fylj").html(page_str);
		}
    


function create(arr){
	for (var i = 0; i < 8; i++) {
		var news = $("<div/>");
		news.addClass("news");
		$(".wrap").append(news);
		var a1 = $("<a/>")
		news.append(a1)
		var img = $("<img/>");
		img.addClass("img");		
		a1.append(img);
		var a2 = $("<a/>")
		a2.addClass("title");	
		news.append(a2)
		var p = $("<p/>");
		p.addClass("content");		
		news.append(p);
		a1.attr("href","#");
		a2.attr("href","#");
	}
}
