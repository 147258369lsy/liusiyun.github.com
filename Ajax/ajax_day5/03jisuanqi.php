<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
if(!empty($_POST)){

   $fuhao = $_POST['fuhao'];
   $data1 = $_POST['data1'];
   $data2 = $_POST['data2'];

   if($fuhao == '+'){
      $result = $data1 + $data2;
   }
   else if($fuhao == '-'){
      $result = $data1 - $data2;
   }
   else if($fuhao == '*'){
         $result = $data1 * $data2;
    }
    else if($fuhao == '/'){
             $result = $data1 / $data2;
    }
}else{
    $fuhao = '+';
    $data1 = '';
    $data2 = '';
    $result = '';
}

?>

<form action="" method="post">
     <input type="text" name="data1" value="<?php echo $data1;?>"/>
     <select name="fuhao" id="">
     	<option value="+" <?php if($fuhao == '+'){echo 'selected="selected"';}?>>+</option>
     	<option value="-" <?php if($fuhao == '-'){echo 'selected="selected"';}?>>-</option>
     	<option value="*" <?php if($fuhao == '*'){echo 'selected="selected"';}?>>*</option>
     	<option value="/" <?php if($fuhao == '/'){echo 'selected="selected"';}?>>/</option>
     </select>
     <input type="text" name="data2" value="<?php echo $data2?>"/>
     <input type="submit" value="="/>
     <input type="text" value="<?php echo $result?>"/>
 </form>

</body>
</html>