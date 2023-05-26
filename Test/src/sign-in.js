function login() {
    $("#login").click(function () {
      var email = $("#email").val();
      var password = $("#password").val();
      $.getJSON("http://127.0.0.1:5500/json/database.json", function (data) {
        $.each(data.Manager, function (key, value) {
          if (email == value.Email && password == value.Password) {
            window.open("../pages/dashboard.html?id=" + value.Id, "_self");
          }
          else {
            $("#isIncorrect").html("<div class='text-danger'>Email or Password is incorrect</div>");
          }
        });
      });
    });
  }