<?php

$user = 'root';
$pass = '12345';

$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];

$pdo = new PDO('mysql:host=localhost;dbname=hotels;charset=utf8', $user, $pass, $options);

// Прямой запрос
$sql = "DELETE FROM listhotels WHERE id = '30'";
$result = $pdo->exec($sql);
print_r($result); // Выведет 1 - true

// Прямой запрос с получением данных
$query = $pdo->query('SELECT * FROM listhotels');

print_r($query->fetchAll()); // Выведет массив всех совпадений
print_r($query->fetch()); // Выведет первое совпадение
print_r($query->fetchColumn()); // Выведет один стобец совпадений (имя столбца надо указать после SELECT)

// Подготовленный запрос
$title = 'MyTitleTest';
$price = 600;

$sql = 'INSERT INTO listhotels (title, price) VALUES (:title, :price)';
$stmt = $pdo->prepare($sql);
$result = $stmt->execute(['title' => $title, 'price' => $price]);
print_r($result); // Выведет 1 - true

// Подготовленный запрос с получением данных 
$sql = "SELECT * FROM listhotels WHERE price = :price";
$stmt = $pdo->prepare($sql);
$stmt->execute(['price' => $price]);

$result2 = $stmt->fetchAll();
print_r($result2); // Выведет массив из БД
