# Overlook Hotel

## Table of Contents
- [About the Project](#about-the-project)
- [Contributors](#contributors)
- [Technologies Used](#technologies-used)
- [Organizational Resources](#organizational-resources)
- [Set Up](#set-up)
- [Operating Instructions](#operating-instructions)
- [Application in Action](#application-in-action)
- [Future Goals](#future-goals)
- [Testing](#testing)

## About the Project
 
 This application showcases data organization and manipulation of a mock hotel booking application. This application was created with the goal of furthering my API fetch and posting knowledge. The project fetches data on a local server and then displays it properly on the page. Please navigate through the project and explore. 

## Contributors 

### [Daniel Neer](https://github.com/DanielN88)

### Project Manager - Heather Faerber

## Technologies Used

1. JavaScript
2. HTML
3. CSS
4. Mocha and Chai
5. Webpack
6. NPM

## Organizational Resources

This project utilized a simple wireframe for the initial set up. The wireframe was done in excalidraw.
![Screen Shot 2022-04-26 at 12 15 04 PM](https://user-images.githubusercontent.com/92230099/165375335-868ac4a3-0945-4281-822d-93dd08f77488.png)

## Set Up
To set up this project please follow the instructions below. 

1. Please start by forking this repo if you would like a copy. Then clone down the repo into your local machine. If you would like to change the name of the repo just add the argument after the repo url when cloning.
2. Once cloned please cd into the directory and run npm install. This will install all the dependencies you need for your project. 
3. You then need to install the local server that can be found [here](https://github.com/turingschool-examples/overlook-api). Please clone this server down to your local machine. Cd into that directory and run npm install.
4. To open the webpage run npm start within the directory of this project and run npm start in the overlook-api directory in a seperate terminal. The server and client should now be running. After it has started you can see the webpage address thats running by looking at the section titled "Project is running at http://localhost:8080/" Please copy that web adress into your broswer and it will bring up the functional webpage
5. Once the webpage is open feel free to browse the application.

## Operating Instructions 

1. Once the application is open you will see a login page. You may sign in with any username that follows the naming convention of customer and then a number. For example customer20, or customer43. You can do this all the way up to customer50. The password is then overlook2021.
2. Once signed in you will see the customers dashboard that you signed in as. It will display the total expenditures from past/current bookings and the list of bookings on the main information section.
3. On the left hand side you will see a series of filters that allow you to search for a new bookings based off those parameters. You can select the date you want to search by for new rooms. You can also filter by the room type that you are interested in. 
4. Once the desired filters have been applied please select book now. It will display all available bookings in the main section. Please click the book now button on any of the booking cards and it will book the room and update the customers data. You will then be taken back to that users booking dashboard and the past/current bookings will be updated wiht the new booking. 
5. There is also a return to bookings button that will return the user to their past/current bookings at any time. 

## Application in Action

This displays the login page in action.
![login-page](https://user-images.githubusercontent.com/92230099/165386941-b6a7dc8f-f631-4ed5-800c-b025c1111fa5.gif)

This display searching through the current/past bookings and navigating the filters.
![filtering](https://user-images.githubusercontent.com/92230099/165387011-b27f657e-5d6d-46ce-9b65-ad9bc3eefb49.gif)

This display the user booking a new room and updated the correct new booking in the current/past dashboard.
![booking](https://user-images.githubusercontent.com/92230099/165387090-1eef9a90-2356-4f0a-9f56-e9a4430ad67e.gif)

## Future Goals

1. Add in unique photos for each room available to book.
2. Set up a manager class that can manage all bookings. 
3. Flush out booking card with more information.
4. Enable bundle bookings so you can book sequential dates for an entire trip.

## Testing

Mocah and Chai were used to test this repository. You may run npm test to verify all test suites are passing.

