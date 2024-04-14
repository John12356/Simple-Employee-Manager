# Simple Employee Manager

A simple Employee CRUD (Create, Read, Update, Delete) application using React, Django, and PostgreSQL. This setup provides a clean separation of concerns between frontend and backend, making the application easier to develop, test, and maintain. It also allows for scalability, as you can extend or modify each component independently based on the requirements of your Employee CRUD application.

## Demo
![Screenshot (12)](https://github.com/John12356/Simple-Employee-Manager/assets/91779049/c424f205-5eba-4525-bd1e-005faa3efe0a)


## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
React handles the frontend, allowing for dynamic and interactive user interfaces. Django manages the backend logic, including data manipulation and authentication. PostgreSQL serves as the database for storing and retrieving employee information.
The integration of these technologies provides scalability, flexibility, performance, and security. This application enables businesses to efficiently manage employee data, including adding new employees, updating existing records, and deleting outdated entries.
## Features

- **Create Employee Profiles:** Allow users to create new employee profiles by entering relevant information such as name, email, department, position, etc. Validate input data to ensure accuracy and completeness.
- **Read Employee Information:** Display a list of existing employee profiles with options for sorting and filtering based on various criteria. Provide a search functionality for quick retrieval of specific employee records.
- **Update Employee Details:** Enable users to update employee information, including modifying existing fields or adding new ones. Implement form validation to ensure data integrity and consistency.
- **Delete Employee Records:** Allow users with appropriate permissions to delete employee profiles as needed. Implement confirmation dialogs to prevent accidental deletion.
- **Data Pagination:** Implement pagination for displaying a large number of employee records. This feature enhances performance by fetching and displaying data in smaller, manageable chunks.
- **Error Handling and Validation:** Provide meaningful error messages and validation feedback to users when they encounter input errors or other issues. Ensure that all user interactions are handled gracefully.
- **Responsive Design:** Create a responsive user interface that adapts to various screen sizes and devices. This feature enhances usability and accessibility, allowing users to access the application from desktops, tablets, and smartphones.

## Technologies Used
- **React.js**: A JavaScript library for building user interfaces.
- **HTML5 & CSS3**: Markup and styling languages for building web pages.
- **Django:** Django is a high-level Python web framework that facilitates rapid development of secure, scalable, and maintainable web applications.
- **Git**: A version control system for tracking changes and collaborating on projects.
- **PostgreSQL**: PostgreSQL is an open-source relational database management system known for its reliability, robustness, and advanced features.

## Installation
To run this portfolio locally, follow these steps:
Clone the repository: `git clone https://github.com/John12356/Simple-Employee-Manager-.git`

### Frontend
1. Navigate to the project directory: `cd frontend`
2. Install the dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and visit: `http://localhost:5173`
   
### Backend
1. Navigate to the project directory: `cd backend`
2. Install the dependencies: `pip install -r requirements.txt`
3. Database Setup:
    1. Install PostgreSQL
    2. Create a database name "Employees"
    3. Type the password as **marakatha@123** or choose you own but make sure to change it at **settings.py** file
5. Setup Database: `python manage.py migrate`
6. Run the development server: `python manage.py runserver`


## Usage
The Employee CRUD app facilitates HR tasks like managing employee records, recruitment, and performance tracking. It streamlines processes such as attendance monitoring, compliance reporting, and communication. It offers customization options and serves as a centralized directory for employee information, enhancing organizational efficiency and collaboration.
## Contributing
Contributions are welcome! If you'd like to contribute to My Netflix clone, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-feature`
5. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
## Contact
For any queries `jhonmoorthi85131@gmail.com`

