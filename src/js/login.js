$(function () {
    $('#login-button').on('click', function () {
        let username = $("#username").val();
        let pwd = $("#pwd").val();
        $.ajax({
            type: "post",
            url: "../../interface/login.php",
            dataType: "json",
            data: {
                username: username,
                password: pwd,
            },
            success: function (res) {
                console.log(res);
            }
        });
    });
});
