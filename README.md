# My Must-Visit Restaurant List
This project is another assignment given by AlphaCamp Semester 2-3 on the restaurant project. The goal is, via the practice of establishing an Express module and local server to create a short list of my favorite restaurants.

## What will I see on this restaurant list page? 
* A select list of restaurant of my choice (Yes! Now you can add new, edit existing and delete restaurants off the list!)
* An info page for each restaurant including name, category, phone, address, description of the restaurant and even a Google Map link!
* A search bar incorporated on top of the page where you can quickly search via keyword to the name of the restaurant

## Prerequisites
You will need to have the following downloaded in your locals to run this project successfully:
* Node.js: v10.15.0
* npm: 6.4.1
* Nodemon: 2.0.4
* express: 4.17.1
* express-handlebars: 5.1.0
* body-parser: 1.19.0
* mongoose": 5.10.8
* For setting up your local server: git-bash & Robo-3T are recommended (if you are a Windows user)

## Installing
* Download the zipped file or input the following in your terminal:
```
$ git clone https://github.com/daretoclap/my_restaurant_list_CRUD.git
```

* After the necessary installation is complete, set up a new connection under Robo-3T. Go to the directory where you've downloaded to. Key in the following to shoot some readily available restaurant data into your local server (if you do not want to build from scratch):  
```
node models/seeds/restaurantSeeder.js
```

* Key in the following to start the project and get the server listening.
```
nodemon app.js
```
* Remember to open your web browser and key in http://localhost:3000 to see the result!
