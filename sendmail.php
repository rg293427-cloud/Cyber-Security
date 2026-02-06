<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "rg293427@gmail.com";   // 👈 yaha apna email daalo
    $subject = "New Contact Message from Website";

    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully');window.history.back();</script>";
    } else {
        echo "<script>alert('Message sending failed');</script>";
    }
}
?>
