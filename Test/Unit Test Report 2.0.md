# Testing Plan

Revision History:

| Date   | Author | Description |
| ------ | ------ | ----------- |
| 5-18   | Meow   | Creat this document |
| 5-19   | Meow   | Add White Box Test Plan |
| 5-20   | Meow   | Add Black Box Test Plan |
| 5-20   | Meow   | Add Flow Diagram |
| 5-23   | Meow   | Update whithe box Test |
| 5-25   | Meow   | Update Black Box Test |
| 5-25   | Meow   | Write the 1.0 Test Report|
| 5-27   | Meow   | Write the 2.0 Test Reprot|

## Introduction

### Intended Audience and Purpose

This document provides the testing strategy and expected results, corresponding to the requirement from the customer. It consists of a general approach of our testing, and specific test cases for unit testing.

### How to use the document

This article is divided into two parts, white box testing and black box testing. We give test cases and expected results. You can check it in the corresponding section.

## Testing Strategy

White box testing uses basic path testing. We will give test cases for Javascript functions on the web side, intending to cover each path. Black-box testing uses the equivalence division method, and we will divide it into several valid equivalence classes and invalid equivalence classes to test the program's error handling capability. Pay particular attention to boundary values.

# Unit Test Cases 

## White Box Testing : logic test 

### In this part,we use basic path testing. We will give test cases for Javascript functions on the web side, intending to cover each path.

#### Test case 1 : Page: sign-in.html | Function Name: Login | Function Type: OnClick() Button: SignIn

![login](./image/Login.png)

### cases

| Behavior | Expected output | Test Results |
| ------ | ------ | ----------- |
| Page get the Database.json | x | <font color=Green>Pass</font>
| If Email and Passworld is correct | lead user to MainPage | <font color=Green>Pass</font>
| If Email and Passworld is incorrect | show error message | <font color=Green>Pass</font>

#### Test case 2 : Pages: dashboard.html, profile.html, users.html | Function Name: Logout | Function Type: OnClick() Button: Logout

![Logout](./image/Logout.png)

### cases

| Behavior | Expected output | Test Results |
| ------ | ------ | ----------- |
| Click Logout Button | send user to the Login Page |<font color=Green>Pass</font>

#### Test case 3 : Page: addUser.html Function Name: add_User Funtion Type: OnClick() Button: Add User

![Add User](./image/Add%20User.png)

### cases

| Behavior | Expected output | Test Results |
| ------ | ------ | ----------- |
| Get values from User | x | <font color=Green>Pass</font>
| Get Original jason from server | x | <font color=Green>Pass</font>
| Add new User information to json | x | <font color=Green>Pass</font>
| Send new json to Server | x | <font color=Red>Failed</font>
| Send a Message to User | Show "Thanks" | <font color=Green>Pass</font>

![network Failed](./image/404.png)


#### Test case 4 : Page: editUser.html Function Name: edit_User Funtion Type: OnClick() Button: Edit User

![Edit User](./image/Edit%20User.png)

### cases

| Behavior | Expected output | Test Results |
| ------ | ------ | ----------- |
| have Admin permissions | Send message that the edit occurred successfully |<font color=Yellow>unimplemented</font>
| no Admin permissions | Send message to user that a error occurred |<font color=Yellow>unimplemented</font>

#### Test case 5 : Page: addManager.html Function Name: add_Manager Funtion Type: OnClick() Button: Add Manager

![Add Manager](./image/Add%20User.png)

### cases

| Behavior | Expected output | Test Results |
| ------ | ------ | ----------- |
| Get values from User | x | <font color=Green>Pass</font>
| Get Original jason from server | x | <font color=Green>Pass</font>
| Add new User information to json | x | <font color=Green>Pass</font>
| Send new json to Server | x | <font color=Red>Failed</font>
| Send a Message to User | Show "Thanks" | <font color=Green>Pass</font>

#### Test case 6 : Page: Every Page Function Name: write_Logs

![write_Logs](./image/write%20logs.png)

### cases
Expected
| Behavior | Expected output | Test Results |
| ------ | ------ | ----------- |
| database online | Write In the database the action performed in the web app |<font color=Yellow>unimplemented</font>
| database offline | Send message that an error occurred |<font color=Yellow>unimplemented</font>

#### Test case 7 : Page: Every Page Function Name: see_Logs Funtion Type: OnLoad() function

![see logs](./image/see%20logs.png)

### cases

| Behavior | Expected output | Test Results |
| ------ | ------ | ----------- |
| Get json of logs from server | x | <font color=Green>Pass</font>
| show the log | show the log on screen |<font color=Green>Pass</font>



#### Test case 8 : Page: : users.html, logs.html, manager.html Function Name Filter_By_Name Funtion Type: OnChange() function (Search bar)

![see logs](./image/Search%20Bar.png)

### cases

| Behavior | Expected output | Test Results |
| ------ | ------ | ----------- |
| Search bar changed | Filter the matching options and display | <font color=Green>Pass</font>


#### Test case 9 : Page:showlog.html Function Name:showlog

![showlog](./image/see%20logs.png)

| Behavior | Expected output | Test Results |
| ------ | ------ | ----------- |
| Get json of logs from server | x | <font color=Green>Pass</font>
| show the log | show the log on screen |<font color=Green>Pass</font>

---------------------
---------------------

## Black Box Test : equivalence division method
---------------------

#### Test case 1 : Page: sign-in.html | Function Name: Login | Function Type: OnClick() Button: SignIn

### cases 

| Input | valid equivalence class | invalid equivalence class |
| ------ | ------ | ----------- |
| Email | email format | invalid format,blank
| password | any | blank

### Test cases

### valid

| Input | Expected output | Test Results |
| ------ | ------ | ----------- |
| test3@test.com *** | login or failed |<font color=Green>Pass</font>

### invalid

| Input | Expected output | Test Results |
| ------ | ------ | ----------- |
| jk32g *** | invalid Email  |<font color=Green>Pass</font>
| (blank),*** | please input Email |<font color=Green>Pass</font>
| test3@test.com,(blank) | please input password |<font color=Green>Pass</font>

--------------------------------
### Test case 2 : Page:Page: addUser.html Function Name: add_User Funtion Type: OnClick() Button: Add User

### class

| Input | valid equivalence class | invalid equivalence class |
| ------ | ------ | ----------- |
| Name | any | blank
| Email | valid Email format | invalid Email format,have same Email,blank
| Password | any | blank
| Birthday | any | blank
| phone number | number | blank,has non-numeric characters

### Test Cases

### valid

| Input | Expected output | Test Results |
| ------ | ------ | ----------- |
| test1,test1.test.com,***,/03/08/2001,13344556678 | Success |<font color=Green>Pass</font>

### invalid

| Input | Expected output | Test Results |
| ------ | ------ | ----------- |
|(blank),test1.test.com,***,/03/08/2001,13344556678 | Name can not blank |<font color=Red>Failed</font>
|test1,123123,***,/03/08/2001,13344556678 | Email Invalid |<font color=Red>Failed</font>
|test1,(blank),***,/03/08/2001,13344556678 | Please input your Email |<font color=Red>Failed</font>
|test1,test1.test.com,***,/03/08/2001,13344556678 | have same Email |<font color=Red>Failed</font>
|test1,test1.test.com,(blank),/03/08/2001,13344556678 | please input the password |<font color=Red>Failed</font>
|test1,test1.test.com,***,(blank),13344556678 | please choose your birthday |<font color=Red>Failed</font>
|test1,test1.test.com,***,/03/08/2001,(blank) | please input your phone number |<font color=Red>Failed</font>
|test1,test1.test.com,***,/03/08/2001,133445ase | invalid phone number |<font color=Red>Failed</font>

![add user result](./image/add%20user%20result.png)

---------------------------------
### Test case 3 : Page: editUser.html Function Name: edit_User Funtion Type: OnClick() Button: Edit User

### class

| Input | valid equivalence class | invalid equivalence class |
| ------ | ------ | ----------- |
| Name | any | blank
| Email | valid Email format | invalid Email format,have same Email,blank
| Password | any | blank
| Birthday | any | blank
| phone number | number | blank,has non-numeric characters

### Test Cases

### valid

| Input | Expected output | Test Results |
| ------ | ------ | ----------- |
| test1,test1.test.com,***,/03/08/2001,13344556678 | Success |<font color=Yellow>unimplemented</font>

### invalid

| Input | Expected output | Test Results |
| ------ | ------ | ----------- |
|(blank),test1.test.com,***,/03/08/2001,13344556678 | Name can not blank |<font color=Yellow>unimplemented</font>
|test1,123123,***,/03/08/2001,13344556678 | Email Invalid |<font color=Yellow>unimplemented</font>
|test1,(blank),***,/03/08/2001,13344556678 | Please input your Email |<font color=Yellow>unimplemented</font>
|test1,test1.test.com,***,/03/08/2001,13344556678 | have same Email |<font color=Yellow>unimplemented</font>
|test1,test1.test.com,(blank),/03/08/2001,13344556678 | please input the password |<font color=Yellow>unimplemented</font>
|test1,test1.test.com,***,(blank),13344556678 | please choose your birthday |<font color=Yellow>unimplemented</font>
|test1,test1.test.com,***,/03/08/2001,(blank) | please input your phone number |<font color=Yellow>unimplemented</font>
|test1,test1.test.com,***,/03/08/2001,133445ase | invalid phone number |<font color=Yellow>unimplemented</font>

---------------
### Test case 4 : Page: addManager.html Function Name: add_Manager Funtion Type: OnClick() Button: Add User

### class

| Input | valid equivalence class | invalid equivalence class |
| ------ | ------ | ----------- |
| Name | any | blank
| Email | valid Email format | invalid Email format,have same Email,blank
| Password | any | blank
| Birthday | any | blank

### Test Cases

### valid

| Input | Expected output | Test Results |
| ------ | ------ | ----------- |
| test1,test1.test.com,***,/03/08/2001 | Success |<font color=Green>Pass</font>

### invalid

| Input | Expected output | Test Results |
| ------ | ------ | ----------- |
|(blank),test1.test.com,***,/03/08/2001,13344556678 | Name can not blank |<font color=Red>Failed</font>
|test1,123123,***,/03/08/2001,13344556678 | Email Invalid |<font color=Red>Failed</font>
|test1,(blank),***,/03/08/2001,13344556678 | Please input your Email |<font color=Red>Failed</font>
|test1,test1.test.com,***,/03/08/2001,13344556678 | have same Email |<font color=Red>Failed</font>
|test1,test1.test.com,(blank),/03/08/2001,13344556678 | please input the password |<font color=Red>Failed</font>
|test1,test1.test.com,***,(blank),13344556678 | please choose your birthday |<font color=Red>Failed</font>

![add manager result](./image/add%20manager%20result.png)

---------------
### Test case 5 : Page: : users.html, logs.html, manager.html Function Name Filter_By_Name Funtion Type: OnChange() function (Search bar)


### class

| Input | valid equivalence class | invalid equivalence class |
| ------ | ------ | ----------- |
|   -    | existent data | non-existent data

### Test Cases

### valid

| Input | Expected output | Test Results |
| ------ | ------ | ----------- |
| add    | all cards include "add" |<font color=Green>Pass</font>
| tomas  | all cards include "tomas" | <font color=Green>Pass</font>
| 2017   | all cards include "2017" | <font color=Green>Pass</font>

### invalid

| Input | Expected output | Test Results |
| ------ | ------ | ----------- |
| addd   | none | <font color=Green>Pass</font>
| tomsa  | none | <font color=Green>Pass</font>
| 2018 | none | <font color=Green>Pass</font>

![log search result](./image/log%20search%20result.png)