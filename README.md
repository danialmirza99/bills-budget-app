# Bills Budget App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
* [Authors](#authors)
* [Description](#description)
* [License](#license)
* [Technologies](#technologies)
* [User Story](#user-story)
* [Features](#features)
* [Models](#models)
* [Routes](#routes)
* [Links](#links)
* [Screenshots](#screenshots)

## Authors

1) Nichole Guan [LinkedIn](https://www.linkedin.com/in/nichole-guan-18aa7913a/)/[GitHub](https://github.com/ncguan)
2) Mehmet Musabeyoğlu [LinkedIn](https://www.linkedin.com/in/mehmet-musabeyoglu)/[GitHub](https://github.com/MehmetMusabeyoglu)
3) Allen Klein [LinkedIn](https://www.linkedin.com/in/allen-klein-506031251/)/[GitHub](https://github.com/allen-ek)
4) Danial Mirza [LinkedIn](https://www.linkedin.com/in/danial-mirza-2860a0206/)/[GitHub](https://github.com/danialmirza99)

## Description

Bills… One of the biggest challenges of adulting! Every month we deal with an endless stream of bills and payments each due for various dates within the month. If we don’t keep track of these consistently, we risk running out of our budget before the next paycheck comes or we might forget to pay them on time resulting in overdue charges. But worry no more! Bill$ is here to make your life easier, so you can enjoy the fun parts of being an adult. With the user friendly calendar interface of Bill$, you can save your upcoming payments with due dates, see a list of all the payments you need to make through the month, see payments before their due date to avoid late fees, and overall have more visibility into your finances to keep better track of your budget.

## License

Please refer to the LICENSE in the repo.

## Technologies

### FrontEnd

- CSS
- Javascript / jQuery
- Fetch / AJAX
- Bootstrap
- Wireframe Tool (Google Slides)
- FullCalendar
- jQuery UI - Datepicker

### BackEnd

- Node
- NPM packages
- Express
- MySQL
- Sequelize ORM
- User Authentication - Bcrypt
- Handlebars
- Insomnia

## User Story

| As a         | I want to                            | So that   
| ------------ | ------------------------------------ | ------------    |
| `User` | see a cal, two buttons - add items,update budget - if logged in | ` I can see home page and be able to redirect to another page to add or update` |
| `User` | see an empty cal, home button and login button that redirects to login page if not logged in | `I can see the log in or sign up forms` |
| `User` | submit the signup form | `I can create an account` |
| `User` | submit the login form | `I can log in` |
| `User` |  track payments over a period of time | `I don't go over budget and have no monies` |
| `User` | see what upcoming payments must be made | `I can plan and budget accordingly to the amount` |   
| `User` |  see the date of when payments are due for each item | `I can pay on time avoiding late fees` |
| `User` | have my budget for the month | `I can add purchases accordingly to my budget` |   
| `User` |  add a new item that I have paid or have to pay | ` I can track all my payments` |
| `User` | see previous payments | ` I can see the amount spent for that year or month` |

## Features

1) Allow users to login and logout of the application
2) Allow users to set a monthly budget
3) Allow users to add previous, current, and future payments
4) Dsiplay payments on a Calendar
5) Include multiple pages, including: home, profile, budget, cost, and login/signup
6) Allow users to view payments from previous months/years
7) View total remaining budget after including spendings
8) Highlight current date on the calendar
9) Allow navigation to previous and upcoming months

## Models

!["Model Relationships"](./public/images/Models.jpg)

<p align="center">
  <img width="auto" height="auto" src="./public/images/ModelAssociations.jpg">
</p>


## Routes

<p align="center">
  <img width="auto" height="auto" src="./public/images/Routes1.jpg">
</p>

<p align="center">
  <img width="auto" height="auto" src="./public/images/Routes2.jpg">
</p>

## Links

[Heroku Deployed Application Link](https://bills-manager2022.herokuapp.com/)

[Github Repository Link](https://github.com/danialmirza99/bills-budget-app/)

[Full Calendar Link](https://fullcalendar.io/)


## Screenshots

### Login/Signup Page

<p align="center">
<img width="467" alt="Screen Shot 2022-11-14 at 10 27 09 PM" src="https://user-images.githubusercontent.com/61335608/201843230-1db5adb8-01d5-445d-91a7-2f24c1c5ee0c.png">
</p>

### Calendar Render

<p align="center">
<img width="413" alt="Screen Shot 2022-11-14 at 10 27 31 PM" src="https://user-images.githubusercontent.com/61335608/201843303-da25a51c-1421-4a2c-a595-8d52fb0706a0.png">
</p>

### Bootstrap

<p align="center">
<img width="926" alt="Screen Shot 2022-11-14 at 10 28 07 PM" src="https://user-images.githubusercontent.com/61335608/201843394-18d881f4-5da7-4d22-921e-1573551a20aa.png">
</p>

### Adding Purchases

<p align="center">
<img width="382" alt="Screen Shot 2022-11-14 at 10 28 40 PM" src="https://user-images.githubusercontent.com/61335608/201843486-55768b31-5fa3-4fb2-aff1-3e10834e0d81.png">
</p>

### Client Side Code

<p align="center">
<img width="386" alt="Screen Shot 2022-11-14 at 10 29 12 PM" src="https://user-images.githubusercontent.com/61335608/201843587-88fdfade-f981-4fee-a457-52785b7f5794.png">
</p>

### Backend Server Side Route

<p align="center">
<img width="452" alt="Screen Shot 2022-11-14 at 10 29 31 PM" src="https://user-images.githubusercontent.com/61335608/201843660-79449c79-7a10-43f1-88e4-291df12cb289.png">
</p>

### Homepage

<p align="center">
<img width="740" alt="Screen Shot 2022-11-14 at 10 32 24 PM" src="https://user-images.githubusercontent.com/61335608/201844287-aedc94ec-b672-48dd-b5b5-d372e5962849.png">
</p>

### Cost Page

<p align="center">
<img width="1435" alt="Screen Shot 2022-11-14 at 10 31 18 PM" src="https://user-images.githubusercontent.com/61335608/201844042-a5cb2df4-7a43-447f-93cb-793ca4f82dcb.png">
</p>

### Budget Page

<p align="center">
<img width="1259" alt="Screen Shot 2022-11-14 at 10 32 57 PM" src="https://user-images.githubusercontent.com/61335608/201844400-78e33cd4-616e-4761-baab-fcb6cde78c70.png">
</p>

### Profile Page

<p align="center">
<img width="1059" alt="Screen Shot 2022-11-14 at 10 33 45 PM" src="https://user-images.githubusercontent.com/61335608/201844573-e273c733-9b36-4353-9b21-d3028a48f1fc.png">
</p>

### Login/Signup Page

<p align="center">
<img width="1094" alt="Screen Shot 2022-11-14 at 10 34 32 PM" src="https://user-images.githubusercontent.com/61335608/201844751-b95f3b5a-9673-4bcc-9f2d-f191e67cf40e.png">
</p>

### Mobile Size

<p align="center">
<img width="auto" alt="mobile size" src="./public/images/MobileSize.jpg">
</p>

### Full Size

<p align="center">
<img width="auto" alt="full size" src="./public/images/FullSize.jpg">
</p>