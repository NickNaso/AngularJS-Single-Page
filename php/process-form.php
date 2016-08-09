<?php
	//ini_set('display_errors',1);
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	//Put values into variables 
	$name = $request->name;
	$email = $request->email;
	$subject = $request->subject;
	$message = $request->message;

	
	//Define patern for preg_match validation
	$pattern = "/^[a-zA-Z0-9 ]*$/";
	$mess_pattern = "/^[a-zA-Z0-9 \?\.\(\)\-\_\!\$\%]*$/";

	//sanitize the values and validate
	$subject = filter_var($subject, FILTER_SANITIZE_STRING);
	$message = filter_var($message, FILTER_SANITIZE_STRING);
	$name = filter_var($name, FILTER_SANITIZE_STRING);
	$email = filter_var($email, FILTER_SANITIZE_EMAIL);

	//Define error messages to variables 
	$name_error = "";
	$mess_error = "";
	$sub_error = "";
	$email_error ="";

	if (!empty($name)) {
		if (preg_match("/^[a-zA-Z ]*$/", $name)){
			$name_error = "";
		} else {
			$name_error = 'Only letters are allowed in your name ';
		}
		
	} else {
		$name_error = 'Your name is too short or not entered. Please revise. ';
	}

	if (!empty($message)) {
		if (preg_match($mess_pattern, $message)){
			$mess_error = "";
		} else {
			$mess_error = 'No funky characters are allowed in your message. Please revise ';
		}
		
	} else {
		$mess_error = 'Your message is too short or empty.';
	}

	if (!empty($subject)) {
		if (preg_match($pattern, $subject)){
			$sub_error = "";
		} else {
			$sub_error = 'Only letters and numbers are allowed in your subject ';
		}
		
	} else {
		$sub_error = 'Your subject is too short or empty.';
	}
	

	if(!empty($email)) {
		if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$email_error = 'Please enter a valid email address ';
		} else {
			$email_error = "";
		} 
	} else {
		$email_error = 'Oops something looks wrong with your email. Please revise.';
	}

	$errors = array("name-error"=>$name_error , "message-error"=>$mess_error, "subject-error"=>$sub_error, "email-error"=>$email_error);

	$msg = "Hey ". $name. "! Thank you for your email. We will respond shorty.";
	

	if (!array_filter($errors)) {
    	$email_to = "your@email.com";
		$headers = "From: $email /r/n";
		$headers .= "Reply-To: $email_to /r/n";

		//mail($email_to, $subject, $message, $headers);
		echo $msg;
	} else {
		echo json_encode($errors);
	}


	//Helpful video about sending data from angular form to php 
	//https://www.youtube.com/watch?v=gVd6Mo-VEQg
?>

