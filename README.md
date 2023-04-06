## NODEJS BOOK STORE

### About this project

The aim of this project was to practice my skills in working with RESTful APIs and ORMs. It is based on another repository of mine (https://github.com/minhtri06/express-rest-api-security-practice) and implements the following features:

-   Login, Logout using JSON web token (JWT)
-   Refreshing tokens
-   Blacklist suspicious tokens
-   Authorization with role rights
-   Request validation
-   Simple book store functionalities
-   Upload images

### Technologies

-   NodeJS: Environment (I used NodeJS v18.12.1 when building this project)
-   expressJS: The core of the server (v4.18.2)
-   Sequelize: Interact with SQL Server (v6.28.0)
-   Joi: Validation
-   passport: Verify authentication and authorization
-   helmet: Set security HTTP headers
-   multer: For image uploading
