# Employee-Tracker

# Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contribution](#contribution)
  6. [Questions](#questions)

# Description
The Employee Tracker is a database that uses the node.js applictation that alows an employer to interact and create with such database

# Installation
Instructions for installing as followed:

  1. This appliccation uses mySQl for creasting the employee_tracker database and its respected tables. To download mySQL for windows please use the link(https://www.mysql.com/downloads/) and follow the steps carefully! Once your program is downloaded, you will be able to create, view, and edit your employee_tracker database as well as creating your own custom databases.
  2. Now navigate to the GitHub repository(https://evanteems.github.io/employee-tracker/) in your web browser and click the green drop down button to copy the SSH key. By clicking the clipboard you will have copied the SSH key. Next thing to do is open your terminal
  3. In your terminal your aregoing to navigate to your desktop and type "git clone" then paste the repository SSH key then press enter.
  4. Next in your terminal navigate to the new folder that you created and open it with vscode
  5. Once you open it you should download the application Node.js since this application is mandatory for the employee tracker. Once installed open up a new terminal in your vs code. Navigate to the db folder for your schema and seeds.sql files.
  6. Navigate to the index.js file and right click and select "Open in Intergrated Terminal. This will sepereate your db folder and index.js from different terminals
  7. Type the following command to install the proprt node_modulesL "npm install".
  8. check the newly downloaded "node_modules" folder to make sure the the correct files have been implemented. The dependencies that are not included you will have to install seperately. "inquirer", "mysql2", and "console.table" are the dependecy packages you will be installing. In the command line type "npm install inquirer mysql2 console.table" to install them
  9. Once this has been completed you are ready to use the Employee Tracker!

# Usage
To begin the employee tracker database, you must first go into your db folder. Next create a new terminal for your index.js as well. Next you must log into your mySQL CLI by entering the following command "mysql -u root -p" in the root of your directory. You will be prompted to enter a passcode. Enter your mySQL password (if you have one entered). Next run the command "source schema.sql" followed by "seeds.sql" to populate the employee_tracker database. Now that you have populated the database you don't need to use mySQL anymore, so type in the terminal "quit;" or "exit;". next go over to the terminal that was positioned for the index,js file. You will then type in that terminal "node index.js". You will be prompted with options to interact with: "View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee", "Update Employee Role", and "Exit Program". When the user selects a veiwing option they are presented with an ordered table with info to the request. If the user selects an option to edut the table by entering a new employee, role, department, or update an employee's role then they are asked for input regarding their addition. By selecting "Exit Program" it will terminate the connection to the database and return the user to the CLI. After an action is completed the user is asked if they would like to take more actions. If they choose "Yes" then they will be again prompted with all options for interactions. If the user selects no then the connection to the database is terminated and the user returns to the CLI.

To see this application in action please watch the demo here: (https://youtu.be/uzpCsrUO5Mc)

# License
MIT license Copyright

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software with restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS:, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE

# Contribution
If you see something you would like to alter or add to the repository, see instructions above for cloning the repo and installation. Additonal features that I thought about adding would be a delete function.

# Questions
If you have any questions regarding the repo, please contact the author via GitHub at: https://github.com/evanteems
