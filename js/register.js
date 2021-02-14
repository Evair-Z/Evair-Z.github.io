//检查两次密码输入是否一致
function pwdCheck(){
	var pwd1 = document.getElementById("pwd-setting").value;
	var pwd2 = document.getElementById("pwd-confirm").value;
	if(pwd2==pwd1){
		saveInfo();
		return true;
	}else{
		alert("两次输入的密码不一致，请重新输入");
		return false;
	}
}

//在localSrorage中存储用户账号密码
function saveInfo(){
	var vipID = document.getElementById("vipID").value;
	var vipPwd = document.getElementById("pwd-confirm").value;
	localStorage.setItem(vipID,vipPwd);
}