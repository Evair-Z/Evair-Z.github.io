//检查账户和密码是否正确
function checkAccount(){
	var vipID = document.getElementById("vipID").value;
	var vipPwd = document.getElementById("vipPwd").value;
	if(localStorage.getItem(vipID)==null){
		alert("不存在ID为" + vipID + "的账户");
		return false;
	}else{
		if(localStorage.getItem(vipID)==vipPwd){
			loginStatusTrue();
			saveCurrentVipID();
			return true;
		}else{
			alert("密码错误");
			return false;
		}
	}
}

//将loginStatus改为true
function loginStatusTrue(){
	localStorage.setItem("loginStatus","true");
}
function saveCurrentVipID(){
	var vipID = document.getElementById("vipID").value;
	localStorage.setItem("currentVipID",vipID);
}