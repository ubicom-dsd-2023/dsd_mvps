// 导入所需的函数和模块
const $ = require('jquery');
const { describe, test, expect } = require('@jest/globals');
const { JSDOM } = require('jsdom');

// 创建一个模拟的window对象和document对象
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;

// 在全局对象中添加jQuery和$变量
global.jQuery = require('jquery');
global.$ = global.jQuery;

// 模拟页面上的HTML元素和jQuery库
document.body.innerHTML = `
  <input type="text" aria-label="Name" value="John Doe">
  <input type="text" aria-label="Email" value="john.doe@example.com">
  <input type="date" value="2000-01-01">
  <input type="text" aria-label="Phone Number" value="1234567890">
  <input type="text" aria-label="Password" value="password">
  <button id="addUser">Add User</button>
`;

// 模拟jQuery的getJSON和ajax方法
global.$ = $;
$.getJSON = jest.fn((url, callback) => {
  const data = {
    Users: [] // 模拟空的用户数组
  };
  callback(data);
});
$.ajax = jest.fn((options) => {
  const { success, failure } = options;
  if (success) {
    success(); // 调用成功回调
  } else if (failure) {
    failure(); // 调用失败回调
  }
});


describe('addUser function', () => {
  test('should add a new user to the database', () => {
    // 调用函数
    addUser();

    // 检查是否正确调用了$.getJSON和$.ajax方法
    expect($.getJSON).toHaveBeenCalledWith(
      'http://127.0.0.1:5500/json/databaseUsers.json',
      expect.any(Function)
    );
    expect($.ajax).toHaveBeenCalledWith({
      type: 'POST',
      dataType: 'json',
      async: false,
      url: 'http://127.0.0.1:5500/json/databaseUsers.json',
      data: {
        data: expect.any(String)
      },
      success: expect.any(Function),
      failure: expect.any(Function)
    });
  });

  test('should display a success message on successful request', () => {
    // 调用函数
    addUser();

    // 检查是否显示了成功弹窗
    expect(window.alert).toHaveBeenCalledWith('Thanks!');
  });

  test('should display an error message on failed request', () => {
    // 模拟ajax请求失败
    $.ajax.mockImplementationOnce((options) => {
      const { failure } = options;
      if (failure) {
        failure(); // 调用失败回调
      }
    });

    // 调用函数
    addUser();

    // 检查是否显示了错误弹窗
    expect(window.alert).toHaveBeenCalledWith('Error!');
  });
});


function addUser(){
    let name = $('input[aria-label="Name"]').val();
      let email = $('input[aria-label="Email"]').val();
      let date = $('input[type="date"]').val();
      let phone = $('input[aria-label="Phone Number"]').val();
      let password = $('input[aria-label="Password"]').val();

      // Create a new manager object
      let newManager = {
        Id: 95,
        Name: name,
        Email: email,
        PhoneNumber: phone,
        BirthDate: date,
        Password: password,
      };

      $.getJSON("http://127.0.0.1:5500/json/databaseUsers.json", function (data) {
        // Get the array of users


        let users = data.Users;


        users.push(newManager);
        let updatedJsonData = JSON.stringify(users);
        $.ajax({
          type: "POST",
          dataType: 'json',
          async: false,
          url: 'http://127.0.0.1:5500/json/databaseUsers.json',
          data: {
            data: updatedJsonData
          },
          success: function () {
            alert("Thanks!");
          },
          failure: function () {
            alert("Error!");
          }
        });
      });

}