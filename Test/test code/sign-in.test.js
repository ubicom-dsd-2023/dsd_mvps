

const { JSDOM } = require('jsdom');

// 创建一个模拟的window对象和document对象
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;

// 在全局对象中添加jQuery和$变量
global.jQuery = require('jquery');
global.$ = global.jQuery;


// 创建一个模拟的jQuery元素对象
const $loginButton = $('<button id="login"></button>');
const $emailInput = $('<input id="email">');
const $passwordInput = $('<input id="password">');
const $isIncorrectDiv = $('<div id="isIncorrect"></div>');

// 定义模拟的数据库JSON数据
const mockData = {
  Manager: {
    key1: { Email: 'example1@example.com', Password: 'password1', Id: 'id1' },
    key2: { Email: 'example2@example.com', Password: 'password2', Id: 'id2' },
  },
};

// 创建一个模拟的window对象
const mockWindow = {
  open: jest.fn(),
};

// 定义测试用例
describe('login', () => {
  // 在每个测试用例之前设置初始条件
  beforeEach(() => {
    document.body.innerHTML = ''; // 清空文档内容
    document.body.appendChild($loginButton[0]); // 添加登录按钮元素到文档
    document.body.appendChild($emailInput[0]); // 添加邮箱输入框元素到文档
    document.body.appendChild($passwordInput[0]); // 添加密码输入框元素到文档
    document.body.appendChild($isIncorrectDiv[0]); // 添加错误提示元素到文档
    $.getJSON = jest.fn((url, callback) => {
      // 模拟异步请求返回数据
      callback(mockData);
    });
    mockWindow.open.mockClear(); // 清除之前的函数调用记录
  });

  // 测试正确的邮箱和密码
  test('should open dashboard.html with correct email and password', () => {
    const email = 'example1@example.com';
    const password = 'password1';
    $emailInput.val(email);
    $passwordInput.val(password);

    login();

    // 模拟点击登录按钮
    $loginButton.trigger('click');
    

    // 验证是否调用了正确的函数并传递了正确的参数
    expect(mockWindow.open).toHaveBeenCalledWith('../../pages/dashboard.html?id=id1', '_self');
  });

  // 测试错误的邮箱和密码
  test('should display error message with incorrect email or password', () => {
    const email = 'wrong@example.com';
    const password = 'wrongpassword';
    $emailInput.val(email);
    $passwordInput.val(password);

    login();

    // 模拟点击登录按钮
    $loginButton.trigger('click');

    // 验证错误消息是否正确显示
    expect($isIncorrectDiv.html()).toBe("<div class=\"text-danger\">Email or Password is incorrect</div>");

    // 验证是否未调用打开新窗口的函数
    expect(mockWindow.open).not.toHaveBeenCalled();
  });
});


// 导入所需的模块和函数
function login() {
  $("#login").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();
    $.getJSON("http://127.0.0.1:5500/json/database.json", function (data) {
      $.each(data.Manager, function (key, value) {
        if (email == value.Email && password == value.Password) {
          window.open("../../pages/dashboard.html?id=" + value.Id, "_self");
        }
        else {
          $("#isIncorrect").html("<div class='text-danger'>Email or Password is incorrect</div>");
        }
      });
    });
  });
}