<?php
	ini_set('display_errors',1);
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$name = $request->name;
	$email = $request->email;
	$subject = $request->subject;
	$message = $request->message;

	$msg = "Hey ". $name. "! your email is: ".$email." and your subject is ".$subject." and message: ". $message;
	echo $msg;
?>