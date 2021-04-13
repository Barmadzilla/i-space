<?php

/**
 * Отправлем содержание формы в Телеграм
 * User: barm
 * Date: 2021-01-12
 * Time: 18:37
 */
$chat = false;
//Общий чат
$main_chat = '-1001428416215';
//Выбираем канал
if ( $_POST['type'] == '/i-legal' ) {
	$subj = '💼 Для i-Legal';
	$chat = '-1001428670760';
} elseif ( $_POST['type'] == '/offices' ) {
	$subj = '💼 Для Office';
	$chat = '-1001419864915';
} elseif ( $_POST['type'] == '/it-support' ) {
	$subj = '💼 Для IT Support';
	$chat = '-1001271696358';
} elseif ( $_POST['type'] == '/finances' ) {
	$subj = '💼 Для Finances';
	$chat = '-1001193390521';
} elseif ( $_POST['type'] == '/' ) {
	$subj = 'Данные c Главной страницы';
} elseif ( $_POST['type'] == 'subscribe' ) {
	$subj = 'Подписка';
}

$message = $_POST['msg'];


//Готовим сообщение
$info = "*$subj* 
			$message";

$apiToken = "1789818774:AAGPhVo6goKOTxq3aqOSod1mZK2862kXSvg";

$data = array(
	'chat_id'    => $main_chat,
//	'chat_id'      => '@barmtestchannel',
	'parse_mode' => 'markdown',
	'text'       => $info,
//	'reply_markup' => array(
//		'inline_keyboard' => array(
//			array(
//				'text' => '22',
//				'url'  => 'http://ya.ru',
//			)
//		)
//	),
);
//Отправляем в профильный чат
file_get_contents( "https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query( $data ) );
//Меняем чат айди на айди общего канала
if ( $chat ) {
	$data['chat_id'] = $chat;
	$data['text']    = $message;
//Отправляем
	file_get_contents( "https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query( $data ) );
}