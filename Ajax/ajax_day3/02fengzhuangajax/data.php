<?php
$name = $_POST['name'];
echo $name;
echo '{
  "total":"4",
  "data":[
    {
      "name":"金瓶梅",
      "category":"文学",
      "desc":"不好描述"
    },{
      "name":"聊斋志异",
      "category":"文学",
      "desc":"女鬼与书生一夜情的故事"
    },{
      "name":"西游记",
      "category":"文学",
      "desc":"孙悟空被虐的故事"
    },{
      "name":"红楼梦",
      "category":"文学",
      "desc":"表哥和表妹的故事"
    }
  ]
 }';
?>