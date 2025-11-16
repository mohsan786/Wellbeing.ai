<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'mailer/src/Exception.php';
require 'mailer/src/PHPMailer.php';
require 'mailer/src/SMTP.php';

 $full_name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $organization_name = $_POST['organization'];
    $organization_size = $_POST['organization_size'];
    $sector = $_POST['sector'];
    $preferred_contact = $_POST['contact_method'];
    $note = $_POST['note'];
    $subscribe = isset($_POST['subscribe']) ? 'Yes' : 'No';
    $body = "
        Full Name: $full_name\n
        Email: $email\n
        Phone: $phone\n
        Organization Name: $organization_name\n
        Organization Size: $organization_size\n
        Sector: $sector\n
        Preferred Contact Method: $preferred_contact\n
        Note: $note\n
        Subscribe: $subscribe
    ";
$mail = new PHPMailer(true);

try {
    // SMTP Settings
    $mail->isSMTP();
    $mail->Host = 'smtp.zoho.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'hello@sehatti.app';         
    $mail->Password = 'Skillware@4u12345';           
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    // Email
    $mail->setFrom('hello@sehatti.app', 'Sehatti');
    $mail->addAddress('info@myelevateacademy.com');         
    $mail->Subject = "New Message from Sehatti Website";
    $mail->Body = $body;

    $mail->send();
     header("Location: request-a-demo.html");
    exit;
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
     header("Location: request-a-demo.html");
    exit;
}
?>
