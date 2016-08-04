<?php
	//ini_set('display_errors',1);
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$name = $request->name;
	$email = $request->email;
	$subject = $request->subject;
	$message = $request->message;

	$msg = "Hey ". $name. "! your email is: ".$email." and your subject is ".$subject." and message: ". $message;
	echo $msg;

	//Helpful video about sending data from angular form to php 
	//https://www.youtube.com/watch?v=gVd6Mo-VEQg
?>

