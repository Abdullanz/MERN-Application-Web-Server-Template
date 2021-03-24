# Web Server for a MERN Application Template

This is a boilerplate template for a Web-Server that contains the basic infrastructure of a MERN Web Application which can be deployed on an EC2 instance using the AWS platform and probably on servers from other cloud providers. The main objective behind this project is to create a template for a Web-Server that is easily scalable, and replicatable using the MERN technology stack. While having the capability to connect to clients' data centers for the hybrid cloud model or  to be modernized using containers, and serverless services provided by cloud providers like AWS. Finally, This project is a way for me to understand the best practices for deploying Web-Servers through AWS Well-Architected framework.

# Description

Cloud Adoption goes through several phases before reaching its full potential within an Enterprise environment. However, before reaching the full Cloud-Native Application enterprises want to take advantage of some of the features that this approach offer, so they can easily, and for this matter securely transition to the cloud.

Following this top-down approach, an application modernization strategy must be implemented to include features like supporting cost optimazation, and performance improvement... 

Mircoservices, Conway's law, Data Management

The application is going to be stright-forward, it will include RESTful Routing capabilities with CRUD operations that works for a certain product. Also, the application will be connected to the API Gateway service that has Lambdas connected to it for additional feature. It will then deployed on an EC2 as a web server, with an ALB, Autoscaling capabilities, and try to implement the best practices on it for training purposes in the future.

Finally,

# Technical Architecture

Add image

Google Analytics
API Gateway
Lambda
EC2
Elastic Load Balancer
AutoScaling

# How To Navigate

Navigating the Back-end 

Navigating the Front-end


Running the project on a Server

cd to the App directory, then type npm start. However, if you modified the frontend, please cd to the client directory.
After that type npm run build, which will update the frontend build file, and then you can cd.. back the NodeJS application directory and run it. 

# MERN Stack

MongoDB (v. )
Express (v. )
React (v. )
NodeJS (v. )

# Concepts Learned

Server-Side Rendering (SSR):

Client-Side Rendering (CSR):

# Testing

Testing is approached using the Jest Library,


# Version

0.1

## Author

Abdullah Najjar
