<?php
	//ini_set('display_errors',1);
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	//Put values into variables 
	$name = $request->name;
	$email = $request->email;
	$subject = $request->subject;
	$message = $request->message;

	

	$pattern = "/^[a-zA-Z0-9 ]*$/";
	$mess_pattern = "/^[a-zA-Z0-9 \?\.\(\)\-\_]*$/";
	//sanitize the values and validate

	$subject = filter_var($subject, FILTER_SANITIZE_STRING);
	$message = filter_var($message, FILTER_SANITIZE_STRING);
	$name = filter_var($name, FILTER_SANITIZE_STRING);
	$email = filter_var($email, FILTER_SANITIZE_EMAIL);

	if (!empty($name)) {
		if (preg_match("/^[a-zA-Z ]*$/", $name)){
			$errors .= "";
		} else {
			$errors .= 'Only letters are allowed in your name ';
		}
		
	} else {
		$errors .= 'You forgot to enter a subject ';
	}

	if (!empty($message)) {
		if (preg_match($mess_pattern, $message)){
			$errors .= "";
		} else {
			$errors .= 'No funky characters are allowed in your message, please revise ';
		}
		
	} else {
		$errors .= 'You forgot to enter a message ';
	}

	if (!empty($subject)) {
		if (preg_match($pattern, $subject)){
			$errors .= "";
		} else {
			$errors .= 'Only letters and numbers are allowed in your subject ';
		}
		
	} else {
		$errors .= 'You forgot to enter a subject ';
	}
	

	if(!empty($email)) {
		if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$errors .= 'Please enter a valid email address ';
		} else {
			$errors .= "";
		} 
	} else {
		$errors .= 'You forgot to enter an email ';
	}


	

	$error1 = "This is error1";
	$error2 = "This is error2";
	$error3 = "This is error3";

	$test = array($error1, $error2, $error3);
	
	$msg = "Hey ". $name. "! thank you for your email. We will respond shorty.";
	
	if (!$errors) {
		$email_to = "your@email.com";
		$headers = "From: $email /r/n";
		$headers .= "Reply-To: $email_to /r/n";

		mail($email_to, $subject, $message, $headers);
		echo json_encode($test);
	} else {
		echo $errors;
	}


	//Helpful video about sending data from angular form to php 
	//https://www.youtube.com/watch?v=gVd6Mo-VEQg
?>

