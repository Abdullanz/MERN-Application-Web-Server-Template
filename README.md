# MERN Application Web Server Template

This is a boilerplate template for a Web-Server that contains the basic infrastructure of a MERN Web Application which can be deployed on an EC2 instance using the AWS platform and probably on servers from other cloud providers. The main objective behind this project is to create a template for a Web-Server that is easily scalable, and replicatable using the MERN technology stack. While having the capability to connect to clients' data centers for the hybrid cloud model or  to be modernized using containers, and serverless services provided by cloud providers like AWS. Finally, This project is a way for me to understand the best practices for deploying Web-Servers using the AWS Well-Architected framework.

# Description

Cloud Adoption goes through several phases before reaching its full potential within an Enterprise environment. However, before reaching the full Cloud-Native Application enterprises want to take advantage of some of the features that this approach has to offer, so they can have enough reasons to switch to the cloud environment, and for this matter securely transition to the cloud.

Following this top-down approach, an application modernization strategy must be implemented under the guidelines of the AWS Cloud Transformation Maturity Model (CTMM). This project is a proof-of-concept on how to move forward when modernizing your applications.


Finally, the application is going to be stright-forward, it will include RESTful Routing capabilities with CRUD operations that works for a certain imaginary product. Also, the application will be connected to the API Gateway service that has Lambdas connected to it for additional feature. It will also be deployed on an EC2 as a web server, with an Application Load Balancer (ALB), Autoscaling capabilities, and more in the futu



# Technical Architecture

Add image

Nginx
Google Analytics

# How To Navigate


Running the project on a Server

cd to the App directory, then type npm start. However, if you modified the frontend, please cd to the client directory.
After that type npm run build, which will update the frontend build file, and then you can cd.. back the NodeJS application directory and run it. 

# MERN Stack

MongoDB
Express 
React 
NodeJS

# To Do

connect the db and deploy with ELB and nginx, and the rest are AWS Services to be configured.

# Testing

Testing is approached using the Jest Library. But, I did not implemented here because I still have not learned how to create useful testing functions.

## Author

Abdullah Najjar
