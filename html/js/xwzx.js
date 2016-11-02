var img,a2,p;
$.ajax({
    url: "../../php/code/xwzx.php",    //请求的url地址
    dataType: "json",   //返回格式为json
    type: "GET",   //请求方式
    success: function(arr) {
    	create(arr)
    	show(arr,1);
        //请求成功时处理
	}        
});
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
		    if (now_page==page_num) {
		        page_str+='<span onclick="show(arr,'+(now_page-2)+')">'+(now_page-2)+'</span>';
		      };
		    page_str+='<span onclick="show(arr,'+(now_page-1)+')">'+(now_page-1)+'</span>';
		  };
		    page_str+="<span style='background:black;color:white;margin:0'>"+now_page+"</span>";
		
		  if (now_page<page_num) {
		    page_str+='<span onclick="show(arr,'+(now_page+1)+')">'+(now_page+1)+'</span>';
		      if (now_page==1) {
		        page_str+='<span onclick="show(arr,'+(now_page+2)+')">'+(now_page+2)+'</span>';
		      };
		    page_str+='<span onclick="show(arr,'+(now_page+1)+')">下一页</span>';
		    page_str+='<span onclick="show(arr,'+(page_num)+')">尾页</span>';
		  };
		  
		  var constr=pageCon(arr,start,page_size);
		      	console.log(constr);
		  	alter(constr);		  
        		$('.wrap').html(page_str);
		}
    

function alter(arr) {
	for (var i = 0; i < arr.length; i++) {
		img.attr("src","../img/xwzxImg/"+arr[i].img);
		a2.text(arr[i].title);
		p.text(arr[i].content)	
	}
}

function create(arr){
	for (var i = 0; i < 10; i++) {
		var news = $("<div/>");
		news.addClass("news");
		$(".wrap").append(news);
		var a1 = $("<a/>")
		news.append(a1)
		img = $("<img/>");		
		a1.append(img);
		a2 = $("<a/>")		
		news.append(a2)
		p = $("<p/>");		
		news.append(p);
		a1.attr("href","#");
		a2.attr("href","#");
	}
}
