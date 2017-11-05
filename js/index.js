window.onload=function(){
var mySwiper = new Swiper('#swiper1',{
    pagination : '.swiper-pagination',
    loop : true,
    paginationClickable :true,
    paginationClickable :true,
});
var mySwiper = new Swiper('#swiper2',{
	freeMode : true,
    slidesPerView : 3,
});
var mySwiper = new Swiper('#swiper3',{
    loop : true,

	freeMode : true,
    
});
// 滚动轮播
var oUl=document.getElementById('gd');
var scroll=document.getElementById("scroll")
// console.log(scroll);
var speed = 30; 


var oLi=oUl.getElementsByTagName('li');
var timer=null;
 oUl.innerHTML +=  oUl.innerHTML;

timer=setInterval(function(){
	// console.log(oUl.offsetTop)
	
	 var disTop = oUl.offsetTop-speed;
	 // console.log(oLi[0].offsetHeight*oLi.length/2)
	 if(disTop<=-(oLi[0].offsetHeight*oLi.length/2)){
	 	disTop=0;
	 	// alert(999)
	 }
               
    
     oUl.style.top = disTop + 'px';
    
},3000)
// 获取节点
var s=document.getElementById("s");
var h=document.getElementById("h");
var m=document.getElementById("m")

setInterval(function(){
	var date=new Date();
	// 获取小时
	var hours=date.getHours();
	// 获取分
	var min=date.getMinutes();
	// 获取秒
	var sec=date.getSeconds();
	if(hours<10){
		h.innerText="0"+hours;
	}else{
		h.innerText=hours;
	}
	if(min<10){
		m.innerText="0"+min;
	}else{
		m.innerText=min;
	}
	if(sec<10){
		s.innerText="0"+sec;
	}else{
		s.innerText=sec;
	}
	

})
// 滚动监听事件
var data=[
			{"id":"12","title":"户外弹弓 射鱼弹弓 射鱼套装 红外线打鱼弹弓 射鱼器 飞镖打鱼器 霸王龙射鱼弹弓 射鱼套装 霸王龙套装一","price":"￥249","pic":"好评率60%","img":"image/59119767Nff62af83.jpg!q70.jpg"},
			{"id":"12","title":"【京东配送】北京特产御食园小紫薯500g休闲食品小吃零食","price":"￥358","pic":"好评率90%","img":"image/58e7022dNa4569598.jpg!q70.jpg"},
			{"id":"12","title":"朵菲清妮短外套女棒球服2017新款秋装女休闲宽松风衣中长款加绒加厚卫衣外套女 V820 卡其 M","price":"￥79","pic":"好评率90%","img":"image/59fade6dN9ccb4343.jpg!q70.jpg"},
			{"id":"12","title":"极灯 吊灯客厅灯餐厅卧室灯美式欧式简约现代乡村复古铁艺灯具灯饰 651-3头朝上适用5-10平左右","price":"￥29","pic":"好评率60%","img":"image/59f9704dNa77d4a83.jpg!q70.jpg"},
			{"id":"12","title":"【三件套】童装男儿童套装秋装2017秋款儿童校服中大童卫衣运动套装小孩子衣服 风火轮两件套 藏青色 140建议身高1米25-1米35","price":"￥249","pic":"好评率40%","img":"image/59a6883dN3f61c632.jpg!q70.jpg"},
			{"id":"12","title":"全国包邮KDV俄罗斯进口紫皮糖巧克力糖扁桃仁糖士力架牛轧糖婚庆喜糖花生酥 1000g约140颗左右","price":"￥999","pic":"好评率80%","img":"image/59cdeb53N6b0c4786.jpg!q70.jpg"},
			{"id":"12","title":"思情姿短外套女2017新款韩版时尚大气女装长袖修身上衣牛仔外套女短款显瘦秋装 军绿色 M","price":"￥29","pic":"好评率60%","img":"image/5957a1fbNf9db16b9.jpg!q70.jpg"},
			]


function ScollPostion() {//滚动条位置
var t, l, w, h;
// 兼容处理
if (document.documentElement && document.documentElement.scrollTop) {
tt = document.documentElement.scrollTop;
ll = document.documentElement.scrollLeft;
ww = document.documentElement.scrollWidth;
hh = document.documentElement.scrollHeight;
} else if (document.body) {
tt = document.body.scrollTop;
ll = document.body.scrollLeft;
ww = document.body.scrollWidth;
hh = document.body.scrollHeight;
}
return { top: tt, left: ll, width: ww, height: hh };
}
var similar=document.querySelector(".similar");
var body=document.body;
// console.log(similar)
window.onscroll = function (){
	// alert(99)
	ScollPostion()
	// console.log(hh*70/100)
	if(tt>(hh*70/100)){
		var str='';
		for(var i in data){
			// console.log(data)
			str+='<div class="similar-left">';
			// str+='<div class="similar-left">';
			str+='<img src="'+data[i]['img']+'"></img>';
			str+='<strong>'+data[i]['title']+'</strong>';
			str+='<p>'+data[i]['price']+'</p>';
			str+='<span class="praise"><span>'+data[i]['pic']+'</span><span class="button">看相似</span></span>';
			str+='</div>';
			// str+="</div>"
		}
		// 拿到数据给尾部添加
 similar.innerHTML+=str;




		
	}

}

}