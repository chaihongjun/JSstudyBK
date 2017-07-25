

function ajax(url,fnSucc){
	
		var xhr;
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("Msxml2.XMLHTTP");
		}
		
		xhr.open("get",url,true);
		
		xhr.send();
		
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && xhr.status == 200) {
					var str = xhr.responseText;
					fnSucc( str );
				}
	}
	
}
