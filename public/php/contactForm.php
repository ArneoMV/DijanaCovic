<?php
/*  contactForm.php */

	if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['message'])) {

		$name = $_POST['name']; // HINT: use preg_replace() to filter the data
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$message = nl2br($_POST['message']);
		$to = "arneo.marinvincetic@gmail.com";
		$from = $email;
		$subject = 'Contact Form Message';
		$message = ' <b>Name:</b> '.$name.' <br> <b>Email:</b> '.$email.' <br> <b>Phone number:</b> '.$phone.' <p>'.$message.'</p> ';
		
		$headers = "From: $from\n";
		$headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		if( mail($to, $subject, $message, $headers) ){
			echo "success";
		} else {
			echo "The server failed to send the message. Please try again later.";
			echo $errno;
			echo $errstr;
		}
	} else {
			echo "Failed to send email";
    }
?>