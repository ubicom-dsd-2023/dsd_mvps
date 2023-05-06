## Documentation
  - In this file we will document the methods for the Web Application, this methods are in our Class Diagram in Journal/Week4.
  - The gets , sets and constructor of classes need to be implemented too.
    
**Page: sign-in.html**
* Authentication  Function Name: Login(email: str, password: str) -> bool -  
This method will be used to Log in the manager in the Web application. 
Sends to the database via APIRest. If the parameters are correct, the function returns True and change the value of the user IsLoged variable, otherwise, it returns False.
  
  OnClick() function
  
  public bool Login(string email, string password){ 
    if(correct parameters) //user will be logged, change IsLoged to true, and send the user to the Main Page
    
    if(wrong parametes or state 0) //Send message to user 
  }
    
**Pages: dashboard.html, profile.html, tables.html**
 * Authentication - Logout:(userId)
Description: This method will be used to Log the User out. Sends the id via APIRest to indicate that the user has logged out.  We will change the IsLoged variable to False 
and the user will be redirect to the Main Page without being Logged.
  
  OnClick() function 
  
  public void Logout(int int ){ //User Id 
  //Change IsLoged variable to False and redirect the User to the Main Page
  //Update the database
  
  //If something is wrong send message that a error occured
  
  }  
  
  
  * Manager Class : Parameters
  class Manager {
  /**
   * Constructor for the Manager class, initializes the manager object with the given attributes.
   * @param {int} Id - The manager's unique identifier.
   * @param {string} Name - The manager's full name.
   * @param {string} Email - The manager's email address.
   * @param {string} Password - The manager's password.
   * @param {boolean} isLoged - Indicates if the manager is logged in or not.
   * @param {Date} BirthDate - The manager's birth date.
   * @param {boolean} State - The manager's state (active, inactive).
   **/
  
  
  **Page: edit.html**
  *Manager - Edit User  Function Name: EditUser(userId: int, name: str, email: str, password: str, birthdate: date) -> bool

Description: The Edit_User function takes five parameters, userId, name, email, password, and birthdate, and sends them to the database via APIRest to update the user's account.
The function then receives a response from the APIRest, which indicates whether the update was successful or not.

bool: A boolean value representing whether the update was successful or not.

OnClick() funtion

public bool Edit_User(userId: str, name: str, email: str, password: str, birthdate: date ){ 
  //Send message edit occured sucessefuly
  //Update the database
  
  if(something´s wrong) //Send message to User saying that a error occured
  
  }  
  
  
  **Page: edit.html**
  
  Description: The Delete_User function changes the state of a Manager to 0
  
  OnClick() function
  
  public bool Delete_User(userId: int){ 
  //Send message edit occured sucessefuly
  //Update the database change State variable to 0
  
  if(something´s wrong) //Send message to User saying that a error occured
  
  }  
  
  **Page:addUser.html**
  
   Description: The Add_User function creates a user in the database 
  
  OnClick() function
  
  public bool Add_User(userId: int, name: str, email: str, password: str, birthdate: date){ 
  //Send message edit occured sucessefuly
  //Update the database and create a user
  
  if(something´s wrong) //Send message to User saying that a error occured
  
  }  
  
  * Logs Class : Parameters
  class Logs {
  /**
   * Constructor for the Logs class, initializes the manager object with the given attributes.
   * @param {int} Id - The manager's unique identifier.
   * @param {string} log - An action performed on the App.
   **/
   
   
   Description: The Write_Logs function creates the log in the database
   
   It will be called in every event, for example if we create a new user this method will be called after that.
   
   public void Write_Logs(string log){ 
  //Update the database and create the log
  
  if(something´s wrong) //Send message to User saying that a error occured
  
  }
  
  
  **Page: seeLogs.html**
  
   Description: The See_Logs function lists the logs from the most recent to the oldest
   
   OnLoad() function
   
  public void See_Logs(string log){ 
  //List the logs
  
  if(something´s wrong) //Send message to User saying that a error occured
  
  }
   
   
  * Charts Class: Parameters
  /**
  Constructor for the Charts class, initializes the chart object with the given attributes.
   * @param {boolean} isFavorite - Indicates if the chart is marked as a favorite.
   * @param {string} Name - The chart's name.
   * @param {string} Type - The chart's type (e.g., bar, line, pie, etc.).
   * @param {string} Description - A brief description of the chart.
   * @param {string} Motiom - The chart's motion settings (e.g., animation, transition, etc.).
  **/
  
  **Page: table.html**
  
  Description: The Filter_By_Name function shows the Manager the chart with the name he wrote
  
  OnChange() function
  public void Filter_By_Name(string name){ 
  //Show chart by name
  
  if(none found) //Show message that any chart was found with that name
  
  }
  
  **Page: table.html**
  
   Description: The Filter_By_Name function shows the Manager the chart with the name he wrote
   
   OnChange() function
  public void Filter_By_Name(string type){ 
  //Show chart by type
  
  if(none found) //Show message that any chart was found with that type
  
  }
   
  
  Data Visualization Class: No attributes
  
  
  **Page: tables.html**
  
   Description: The Get_Data function sends data via Api
   
 OnLoad() function
 
 public void Get_Data(){ 
  //Get Data of Motion Class from the API
  
  if(none found) //Show error message 
  
   Description: The Post_Data function sends data via Api
    
    
   **Page: tables.html**
 public void Post_Data(){ 
  //Send Data to the database via Api
   OnClick() sends the request when the user clicks to go to the tables.html page
  if(none found) //Show error message 
  
  MotionFrame : Only attributes
  /**
  * @param {float} x - real number.
  * @param {float} y - real number.
  * @param {float} z - real number.
  * @param {float} accX - real number.
  * @param {float} accY - real number.
  * @param {float} accZ - real number.
  * @param {float} asX - real number.
  * @param {float} asY - real number.
  * @param {float} asZ - real number.
  * @param {TimeStamp} time - Time when they get the data.
  
  **/
  
  MotionRecords : Only attributes
  /**
  * @param {int} MotionTag - An integer, not less than zero and not greater than six.
  * @param {Long} timeStamp - An integer, milliseconds from 1970-01-01 00:00
  * @param {TimeStamp} InitailTimeStamp - A TimeStamp, to mark the begining time of a motion record.
  * @param {MotionFrame} motionFrame - {X+Y+Z+asX+asY+asZ+accX+accY+accZ}9+Timestamp
  **/
  
  Motion Class : Only attributes
/**
   * @param {int} id - Indicates if the chart is marked as a favorite.
   * @param {MotionRecords[]}  - an array of MotionRecords objects that represents the motion records associated with the sensors
  **/
