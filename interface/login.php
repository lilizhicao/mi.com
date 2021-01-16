<?php
    include('./library/conn.php');

    header('content-type:text/html;charset=utf-8');

    // $_GET[]  函数 接收前端发送的GET请求数据
    // $username = $_GET['username'];
    // $password  = $_GET['password'];

    // $_POST  函数  接收前端发送的POST请求数据
    // $username = $_POST['username'];  
    // $password  = $_POST['password'];


    // $_REQUEST[] 函数 接收前端发送的 GET/POST请求数据
    $username = $_REQUEST['username'];  
    $password  = $_REQUEST['password'];


    // GET请求和POST请求的区别
    // 1. GET请求的数据会出现在地址栏(search)部分 POST不显示
    // 2. GET请求的数据大小有限 传输速度快
    // 3. POST请求的数据大小 没有限制 传输速度慢
    // 4. GET请求的数据随请求头(header)发送 , POST请求的数据随请求体(body)发送
    // 安全性 没有区别



    // echo "前端发送的 用户名是：$username  密码是： $password";


    // 数据库查询操作 
    // 查询数据库中是否有这个用户 名且密码和用户名所匹配
    // 查询结果 用户名是 admin  密码是 123456

    if($username === 'admin'&&$password === 'a123456'){
        // echo '登陆成功';

        echo '<script>alert("登陆成功");location.href="index.html";</script>';
    }else{
        // echo '用户名或密码错误';
        echo '<script>alert("登陆失败");location.href="eg09.login.html";</script>';
    }
?>