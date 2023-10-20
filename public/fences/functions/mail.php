<?php
require '../vendor/PHPMailer/src/Exception.php';
require '../vendor/PHPMailer/src/PHPMailer.php';
require '../vendor/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$result = [
    'status' => '',
    'message' => ''
];

if(empty($_POST['feedback']) || empty($_POST['feedback']['NAME']) || empty($_POST['feedback']['PHONE']))
{
    $result = [
        'status' => 'error',
        'message' => 'Отсутствуют post-параметры'
    ];
    echo json_encode($result);
    exit();
}
$name = $_POST['feedback']['NAME'];
$phone = $_POST['feedback']['PHONE'];

$pattern = '/^[0-9\-\(\)\/\+\s]*$/';

$validatePhone = preg_match($pattern, $phone);
$nameLength = strlen($name);
if(!$validatePhone) {
    $result = [
        'status' => 'error',
        'message' => 'Неправильно введен номер телефона'
    ];
    echo json_encode($result);
    exit();
}
if($nameLength < 3) {
    $result = [
        'status' => 'error',
        'message' => 'В имени должно быть больше 3 символов'
    ];
    echo json_encode($result);
    exit();
}

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
//    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'profitpanda@yandex.ru';                 // SMTP username
    $mail->Password = 'profitpanda123';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('profitpanda@yandex.ru', 'Мир заборов');
    $mail->addAddress('vit-vokhminov@yandex.ru');               // Name is optional

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Заявка на звонок';
    $mail->Body    = "Имя: " . $name . " <br> Телефон: " . $phone;

    $mail->send();
    $result = [
        'status' => 'success',
        'message' => 'Успешно'
    ];
} catch (Exception $e) {
    $result = [
        'status' => 'error',
        'Ошибка отправки сообщения: ' . $mail->ErrorInfo
    ];
}

echo json_encode($result);