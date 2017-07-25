/*
取出对象的样式中的某个属性值
参数：
	obj 指某个对象
	attr 指该对象中的某个属性名
返回值：
	取出对象的样式中的某个属性值
*/
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj, null)[attr];
	}
}


function startMove(obj,json,fn){
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){	//开启定时器
		var flag=true;
		for(var attr in json){
			var end = json[attr];
			
			var start=getStyle(obj, attr);	//取出起始值
			if (attr =="opacity") {
				start=Math.round(parseFloat(start)*100);
			}else{
				start=parseInt(start);
			}
			//取出速度，（即起始点到目标点过度时的步长）每次执行该函数时，都重新拿新起始点与目标点的间距的六分之一作为步长
			var speed=(end-start)/6;	
			//从小到大过度时，因为是正数，所以小数应向上取整数，最后的步长值为+1；
			//从大到小过度时，因为是负数，所以小数应向下取整数，最后的步长值为-1；
			speed=(speed>0)?Math.ceil(speed):Math.floor(speed);
			
			//更新对象的属性
			//
			//console.log(speed+start);
			
			if (attr=="opacity") {
				obj.style[attr]=(start+speed)/100;
				obj.style.filter='alpha(opacity:'+(start+speed)+')';
			} else{
				obj.style[attr]=start+speed+"px";
			}
			
			if(start==end){//如果已经过度到目标值，则清除定时器
				//clearInterval(obj.timer);
			}else{
				flag=false;
			}
		}
		
		if (flag) {
			clearInterval(obj.timer);
			if (fn) {
				fn();
			}
		}
	}, 60)	//每隔60毫秒执行一次函数
}
