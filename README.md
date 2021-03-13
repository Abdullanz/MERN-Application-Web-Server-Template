# React Application Template

This project is a boilerplate template for a MERN (but instead of using MongoDB, I will be using DynamoDB) Web Application that can be run on EC2 instances on AWS. The goal in this project is create a template to be re-used multiple times in many different applications.

# Description

The application is going to be stright-forward, it will include RESTful Routing capabilities with CRUD operations that works for a certain product. Also, the application will be connected to the API Gateway service that has Lambdas connected to it for additional feature. It will then deployed on an EC2 as a web server, with an ALB, Autoscaling capabilities, and try to implement the best practices on it for training purposes in the future.

# Technical Architecture

Add image

API Gateway
Lambda
EC2
Elastic Load Balancer
AutoScaling

# How To Navigate

For the server parts


For the Client parts

To run the project on the server, you cd to the App directory, then type npm start.
The application then will run as expected. However, if you modified the frontend.

# Concepts Learned

SSR
CSR
Axios
Routing


# Version

0.1

## Author

Abdullah Najjar
