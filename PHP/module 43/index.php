<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table{
            width: 50%;
            border-collapse: collapse;
        }
        th,td{
            padding: 30px;
            text-align: left;
            border: 1px solid;
        }
        th{
            background-color: lightblue;
            font-weight: blue;
        }
    </style>
</head>
<body>
    <table border="1">
        <tr>
            <th>Brand</th>
            <th>Origin</th>
            <th>Year</th>
        </tr>
       

    </table>
</body>
</html> -->

<?php

$cars= array(
    array("BMW","Germany", 2020),
    array("Mercedes", "Germany", 2024),
    array("Audi",  "Germany", 2021),
);

echo $cars[0][0];

?>