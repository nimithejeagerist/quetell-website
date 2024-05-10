<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $contact_time = isset($_POST["contact_time"]) ? $_POST["contact_time"] : [];
    $message = trim($_POST["message"]);

    // Validate data
    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        // Data not valid, redirect or handle errors here
        header('Location: error.html');
        exit;
    }

    // Email parameters
    $to = 'nakinroye@gmail.com';  // <<< Replace this with your email address
    $subject = 'New contact from ' . $name;
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Preferred contact time: " . implode(", ", $contact_time) . "\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: $name <$email>";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        // Redirect to a thank-you page
        header('Location: thank-you.html');
    } else {
        // Mail failed
        header('Location: error.html');
    }
    exit;
}
?>