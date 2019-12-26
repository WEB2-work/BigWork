var wrap = document.getElementById("wrap");
var main = document.getElementById("main");
var pages = main.getElementsByClassName("page");
var pageLen = pages.length;
var pageH = document.body.clientHeight;
 
for(var i=0;i<pages.length;i++){
	pages[i].style.height = pageH + "px";
}
 
//如果不加时间控制，滚动会过度灵敏，一次翻好几屏
var startTime = 0, //翻屏起始时间  
	endTime = 0,  
	now = 0;    
/**
 * 浏览器兼容      
 */
if ((navigator.userAgent.toLowerCase().indexOf("firefox")!=-1)){   
	document.addEventListener("DOMMouseScroll",scrollFun,false);        
}else if (document.addEventListener) {  
	document.addEventListener("mousewheel",scrollFun,false);  
}else if (document.attachEvent) {  
	document.attachEvent("onmousewheel",scrollFun);   
}else{  
	document.onmousewheel = scrollFun;  
}  
 
/**
 * 滚动事件处理函数
 * @param event
 */
function scrollFun(event){
	startTime = new Date().getTime(); 
	var delta = event.detail || (-event.wheelDelta);//统一，向上滚动为负，向下滚动为正
	//mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
	//DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
	
	if ((endTime - startTime) < -1000){
		if(delta>0 && parseInt(main.offsetTop) > -(pageH*(pageLen-1))){
			//向下滚动
			now = now - pageH;
			toPage(now,"down");
        } 
		if(delta<0 && parseInt(main.offsetTop) < 0){
			//向上滚动
			now = now + pageH;
			toPage(now,"up");
		}
		endTime = new Date().getTime();  
	}else{  
		event.preventDefault();    
	}    
}
var sliderTime = null;
/**
 * 原生js实现过度效果
 * @param now
 * @param direction
 */
function toPage(now,direction){    
	clearInterval(sliderTime);//执行当前动画同时清除之前的动画
	sliderTime = setInterval(function(){
		var speed = 0;
		if(direction == "down"){
			if(now<0 && now < main.offsetTop){
				speed = -10;
				main.style.top = main.offsetTop+speed + "px";
				if(main.style.top<=now){
					main.style.top = now + "px";
				}
			}else{
				main.style.top = now + "px";
				speed = 0;
				clearInterval(sliderTime);
			}
		}else{
			if(now<=0 && now >= main.offsetTop){
				speed = 10;
				main.style.top = main.offsetTop+speed + "px";
				if(main.style.top>=now){					
					main.style.top = now + "px";
				}
			}else{
				main.style.top = now + "px";
				speed = 0;
				clearInterval(sliderTime);
			}
		}		
	},10);
}   
function time(){
    var vWeek,vWeek_s,vDay;
    vWeek = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
    var date =  new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    vWeek_s = date.getDay();
    document.getElementById("time").innerHTML = year + "年" + month + "月" + day + "日" + "\t" + hours + ":" + minutes +":" + seconds + "\t" + vWeek[vWeek_s] ;
    
};
setInterval("time()",1000);
ppp1.onclick=function(){
	var p1=prompt("猜此文物的名字");
	if(p1==1){
		alert("猜对了，奖励一根棒棒糖！")
	}else{
		alert("猜错了，不要灰心哦！")
	}
}
ppp2.onclick=function(){
	var p1=prompt("猜此文物的名字");
	if(p1==2){
		alert("猜对了，奖励一根棒棒糖！")
	}else{
		alert("猜错了，不要灰心哦！")
	}
}
ppp3.onclick=function(){
	var p1=prompt("猜此文物的名字");
	if(p1==3){
		alert("猜对了，奖励一根棒棒糖！")
	}else{
		alert("猜错了，不要灰心哦！")
	}
}
ppp4.onclick=function(){
	var p1=prompt("猜此文物的名字");
	if(p1==4){
		alert("猜对了，奖励一根棒棒糖！")
	}else{
		alert("猜错了，不要灰心哦！")
	}
}
ppp5.onclick=function(){
	var p1=prompt("猜此文物的名字");
	if(p1==5){
		alert("猜对了，奖励一根棒棒糖！")
	}else{
		alert("猜错了，不要灰心哦！")
	}
}
ppp6.onclick=function(){
	var p1=prompt("猜此文物的名字");
	if(p1==6){
		alert("猜对了，奖励一根棒棒糖！")
	}else{
		alert("猜错了，不要灰心哦！")
	}
}
ppp7.onclick=function(){
	var p1=prompt("猜此文物的名字");
	if(p1==7){
		alert("猜对了，奖励一根棒棒糖！")
	}else{
		alert("猜错了，不要灰心哦！")
	}
}
ppp8.onclick=function(){
	var p1=prompt("猜此文物的名字");
	if(p1==8){
		alert("猜对了，奖励一根棒棒糖！")
	}else{
		alert("猜错了，不要灰心哦！")
	}
}
var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    var b3 = document.getElementById("b3");
    var b4 = document.getElementById("b4");
    var box = document.getElementById("box");
    var oNavlist = document.getElementById("nav").children;
    var slide = document.getElementsByClassName("slide");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var index = 0
        //鼠标划入
    for (var i = 1; i < 4; i++) {
        slide[i].style.opacity = 0;
    }
    var IntervaiId = setInterval(next, 2000);
    box.onmouseover = function() {
            animate(left, {
                opacity: 100
            });
            animate(right, {
                opacity: 200
            });
            clearInterval(IntervaiId);
        }
        //鼠标划出
    box.onmouseout = function() {
        animate(left, {
            opacity: 0
        });
        animate(right, {
            opacity: 0
        });
        IntervaiId = setInterval(next, 2000);
    }
    right.onclick = next;
    left.onclick = prev;

    function next() {
        var n;
        if (index >= slide.length - 1) {
            n = 0;
        } else {
            n = index + 1;
        }
        animate(slide[index], {
            opacity: 0
        });
        animate(slide[n], {
            opacity: 100
        });
        if (index >= slide.length - 1) {
            index = 0;
        } else {
            index++;
        }
        navchange();
    }

    function prev() {
        var n;
        if (index <= 0) {
            n = slide.length - 1;
        } else {
            n = index - 1;
        }
        console.log(index, n);
        animate(slide[index], {
            opacity: 0
        });
        animate(slide[n], {
            opacity: 100
        });
        if (index <= 0) {
            index = slide.length - 1;
        } else {
            index--;
        }
        navchange();
    }

    for (var i = 0; i < oNavlist.length; i++) {
        oNavlist[i].idx = i;
        oNavlist[i].onclick = function() {
            var n = this.idx;
            if (n == index) {
                return;
            }
            animate(slide[n], {
                opacity: 100
            });
            animate(slide[index], {
                opacity: 0
            });
            index = n;
            navchange();
        }
    }

    //按钮变换函数

    function navchange() {
        for (var i = 0; i < oNavlist.length; i++) {
            oNavlist[i].className = "";
        }
        oNavlist[index].className = "active";
    }
    var count = -480;
    var ex = document.getElementById("ex");
    setInterval(function(){
        ex.style.left = ++count + "px";
        if(count==1440){
            ex.style.left = -1240 + "px";
            count = -1240;
        }
    },2)
    