<?php
require 'PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup server
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'arttay1090@gmail.com';                            // SMTP username
$mail->Password = 'younoseepassword';                           // SMTP password
$mail->SMTPSecure = 'ssl';                           // Enable encryption, 'ssl' also accepted

$mail->From = 'arttay1090@yahoo.com';
$mail->FromName = 'Mailer';
$mail->SMTPDebug = 1;
$mail->Port = 465;
$mail->addAddress('arttay1090@gmail.com', 'art taylor');  // Add a recipient


$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Here is the subject';
$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
   echo 'Message could not be sent.';
   echo 'Mailer Error: ' . $mail->ErrorInfo;
   exit;
}

echo 'Message has been sent';
