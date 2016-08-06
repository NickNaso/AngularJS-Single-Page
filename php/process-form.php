<?php
	//ini_set('display_errors',1);
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	//Put values into variables 
	$name = $request->name;
	$email = $request->email;
	$subject = $request->subject;
	$message = $request->message;

	$errors = "";

	//sanitize the values and validate

	$subject = filter_var($subject, FILTER_SANITIZE_STRING);
	$message = filter_var($message, FILTER_SANITIZE_STRING);
	$name = filter_var($name, FILTER_SANITIZE_STRING);
	$email = filter_var($email, FILTER_SANITIZE_EMAIL);

	if (!ctype_alnum($name)) {
		$errors .= 'Only letters and numbers are allowed in your name';
	}

	if (!ctype_alnum($message)) {
		$errors .= 'Only letters and numbers are allowed in your message';
	}

	if (!ctype_alnum($subject)) {
		$errors .= 'Only letters and numbers are allowed in your subject';
	}
	

	if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		$errors .= "Please enter a valid email address";
	}


	function clean ($data) {
	  $data = trim($data);
	  $data = stripslashes($data);
	  $data = htmlspecialchars($data);
	  return $data;
	}

	$msg = "Hey ". $name. "! your email is: ".$email." and your subject is ".$subject." and message: ". $message;
	
	if (!$errors) {
		$email_to = "your@email.com";
		$headers = "From: $email /r/n";
		$headers .= "Reply-To: $email_to /r/n";

		mail($email_to, $subject, $message, $headers);
		echo $msg;
	} else {
		echo $errors;
	}



	

	
	



	//Helpful video about sending data from angular form to php 
	//https://www.youtube.com/watch?v=gVd6Mo-VEQg
?>

