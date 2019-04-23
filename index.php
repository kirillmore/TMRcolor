<?
  $model=$_GET['model'];

  $width=410;
  $height=160;

  function dbconnect(){
    if($_SERVER['HTTP_HOST']=='localhost'){
      //localhost
      $host='localhost';
      $login='root';
      $pass='root';
      $dbname='temp';
      $port=3306;
    }
    $con=mysql_connect($host,$login,$pass) or die(mysql_error());
    mysql_query('SET character_set_database = utf8');
    mysql_query('SET NAMES utf8');
    mysql_select_db($dbname,$con);
  }
  dbconnect();

  $sql="
    SELECT * 
    FROM tmrcolor
    WHERE
      model='UX' OR
      model='NX' OR
      model='RX' OR
      model='GX' OR
      model='LX' OR
      model='ES' OR
      model='LS'
  ";
  $result=mysql_query($sql);
  while($row=mysql_fetch_array($result)){
    $url='https://images.lexus-europe.com/ru/vehicle/'.$row['config'].'width/'.$width.'/height/'.$height.'/day-exterior-5_'.$row['color_id'].'.png';
    echo ('<img src="'.$url.'"><br>');
    $path='render/'.$row['brand'].'_'.$row['model'].'_'.$row['color_id'].'_'.$row['color_hex'].'.png';
    file_put_contents($path, file_get_contents($url));
  }
?>