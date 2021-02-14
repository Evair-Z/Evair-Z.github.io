//记录并获取当前的网页，显示标记在导航栏
window.onload = function(){
	//获取当前的网页的名称
	var pathName = location.pathname;
	var webName = pathName.substring(pathName.lastIndexOf("/")+1);
	//把当前网页名称记录在本次存储中
	localStorage.setItem("currentWebName",webName);
	//获取本次存储中记录的当前网页名称，并把导航栏中的对应标签突出显示
	var currentWebName = localStorage.getItem("currentWebName");
	if(currentWebName==webName){
		var navObject = window.top.document.getElementById("navObject").contentWindow;
		var currentWebButton = navObject.document.getElementById(webName);
		currentWebButton.style.background = "#C00000";
	}
}
