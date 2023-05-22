## NODEJS BOOK STORE

### About this project

The aim of this project was to practice my skills in working with RESTful APIs and ORMs. It is based on another repository of mine [link github](https://github.com/minhtri06/express-rest-api-security-practice)

#### General functionalities

-   Authentication and authorization with 3 roles (admin, sale manager, user) using JWT
-   Refreshing tokens
-   Blacklisting suspicious tokens
-   Request validation
-   Update profile
-   Change avatar

#### Role specific functionalities

Admin:

-   Manage users
-   Manage books
-   Manage invoices

Sale manager:

-   Manages invoices

User:

-   Buys books

For testing the apis, you can access my published collection [here](https://documenter.getpostman.com/view/24479002/2s93m34Psu)

### Technologies

-   NodeJS: Environment (I used NodeJS v18.12.1 when building this project)
-   ExpressJS: The core of the server (v4.18.2)
-   Sequelize: Interact with SQL Server (v6.28.0)
-   Joi: Validation
-   Passport: Verify authentication and authorization
-   Helmet: Set security HTTP headers
-   Multer: For image uploading
