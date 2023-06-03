<p align="center">Cowtact Logo</p>
<h3 align="center">Cowtact</h3>
<p align="center">Cowtact is a web application that allows users to create and share virtual business cards, making networking and contact exchange more efficient and convenient.</p>

## 💻 **Tech Stack**

### Backend Development:

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

### Frontend Development:

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Authentication:
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

### Email Verification:
Nodemailer

### Hosting:
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

## Features

- User Registration: Users can sign up for the application by providing their email, username, and password, or by connecting via their Google account.
- User Authentication: Registered users can log in to their accounts using their credentials or Google account.
- Business Card Creation: Users can create their virtual business cards by customizing various elements, such as name, email, photo, social media links, and QR code URL.
- Business Card Templates: Users can choose from a selection of pre-designed templates or create their own custom layouts using CSS.
- Drag-and-Drop Editor: The application provides an intuitive drag-and-drop editor for arranging and positioning elements on the business card.
- Social Media Integration: Users can add links to their social media profiles, including popular platforms like LinkedIn, GitHub, Twitter, and more.
- Responsive Design: The virtual business cards are designed to be responsive and display properly on various devices, including desktops, tablets, and mobile devices.
- Live Preview: Users can preview their business cards in real-time as they make changes and customization.
- Share and Networking: Users can share their virtual business cards with others via a unique URL or QR code, facilitating easy networking and contact exchange.
- Export and Printing: Users can export their business cards as image files or print them directly from the application.

## Installation

1. Clone the repository:
```sh
git clone https://github.com/keenlyhere/cowtact
```
2. `cd` into the backend folder and `npm install` to install the dependencies
3. Run the migration and seeders
```
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all
```
4. Run `npm start` to start the backend server
5. `cd` into the frontend folder and `npm install` to install the dependencies.
6. Run `npm start` to start the frontend server
7. Visit `http://localhost:3000` in your web browser to access the application.
