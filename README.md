
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

# React Database Application for Games

## Introduction

This project is a simple React application that serves as a database for games. It allows users to view game entries from the API https://softgenie.org/api/games. The application is built using Vite for fast development and optimized build processes. It uses Material UI for beautiful styled components following Material design patterns.

The project is deployed here https://react-games-database.vercel.app for the time being.

## Features

- View a list of games
- Material UI is used for UI components
- Responsive design for mobile and desktop

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **Vite**: A build tool that provides a fast development environment
- **Material UI**: For styling components
- **Axios**: For making HTTP requests to a backend API

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a basic understanding of JavaScript and React.

## Installation

To install the project, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/react_games_database.git
    cd react_games_database
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm run dev
    ```

## Usage

To use the application, follow these steps:

1. Open your browser and navigate to `http://localhost:3000`.
2. Browse the list of games.

## Screenshots

This is the games list page

![Screenshot](/screenshots/1.jpeg)

Screenshot of the image modal

![Screenshot](/screenshots/2.jpeg)

## Project Structure

After creating the project, your directory structure should look like this:

```
react_games_database/
├── node_modules/
│   ├── screenshots/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
|   ├── screens/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server.
- `npm run build`: Bundles the app into static files for production.
- `npm run preview`: Serves the production build locally.

## Contributing

Contributions are always welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Learn More

To learn more about Vite and React, check out the following resources:

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/)
