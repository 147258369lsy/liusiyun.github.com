<?php
header("Content-Type: text/html; charset=UTF-8");
$username = $_POST['username'];
$password = $_POST['password'];

if($username == 'admin' && $password == '123'){
  echo '<h1>登录成功</h1>';
}
?>

<script type="text/javascript">
var showInfo = parent.document.getElementById('showInfo');
showInfo.innerHTML = "注册成功";

</script>