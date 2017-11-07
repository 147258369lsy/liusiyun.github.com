<?php
header("Content-Type: text/html; charset=UTF-8");

$sex = $_GET['sex'];
if($sex == 1){
echo '<p style = "color: pink;">男孩 软件工程学院 身高xxx</p>';
} else if($sex == 0){
echo '<p style = "color: red;">女孩 人文学院 身高xxx</p>';
}
?>