
//创建cookie
function setCookie(name, value, num) {
	var cookieText = encodeURIComponent(name)+"="+encodeURIComponent(value);
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+num);

	cookieText += "; expires=" + oDate;
	document.cookie = cookieText;
}

//获取cookie
function getCookie(name) {
	var cookies = decodeURIComponent(document.cookie);
	var arr = cookies.split("; ");
	for(var i=0; i<arr.length; i++) {
		var arr1 = arr[i].split("=");
		if(arr1[0] == name) {
			return arr1[1];
		}
	}
	return "";
}


//删除cookie
function removeCookie(name) {
	setCookie(name, "" , -1)
}