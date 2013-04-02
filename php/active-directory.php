<?php
$msg = "Enter Usename and Password";
if(isset($_POST["username"])||isset($_SESSION['username']))
{
  session_start(); #make sure this is at the top of your PHP file.
	//$adServer = "192.168.0.16"; #replace with your AD server ip/hostname
	$adServer = "pdc.scangroup.local"; #replace with your AD server ip/hostname
	if($ldapconn = ldap_connect($adServer))
	{
		//adjust username according to the server
		$username = $_POST["username"];
		$ldaprdn = $username . "@scangroup.local"; 
		$password = $_POST["password"];
		
		if($ldapbind = ldap_bind($ldapconn, $ldaprdn, $_POST["password"]))
		{
		$msg = "Successfully Authenticated";
		$_SESSION['username'] = $username;
		$_SESSION['password'] = $password;
		//return true;
		} else {
		$msg = "Invalid username / password";
		//return false;
		}
	}
	else
	{
		$msg = "Could not connect to LDAP server.";
	}
	
	$e = oci_error($msg);
	echo $e;
}

?>

<html>
<head>
<title>
</title>
</head>



<body>

<h1><?php echo $msg ; ?></h1>
<form method="POST" action="">
 Username
<input type="text" name="username"><br>
 Password
<input type="password" name="password">
<br>
<input type="submit">
<br>

</form>
</body>

