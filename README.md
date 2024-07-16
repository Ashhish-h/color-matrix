# Color Changing Matrix

This project is a simple React application that implements a 3x3 matrix of boxes. The application changes the color of each box when clicked. When the last (ninth) box is clicked, all boxes turn orange in the sequence of their original clicks.

Hosted link - https://color-changing-matrix.netlify.app/

## Features

- **Color Change on Click**: Clicking on any box changes its color to green.
- **Sequential Color Change**: When the ninth box is clicked, all boxes change to orange in the order they were originally clicked.
- **Centered Matrix**: The matrix is centered both horizontally and vertically on the screen.
- **Stylish Design**: The grid has a background color and shadow for a modern look.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/color-changing-matrix.git
   cd color-changing-matrix

2. Install dependencies 
   ```sh
   npm install

3. Start the development server:
   ```sh
   npm start

The application will start and you can view it in your browser at http://localhost:3000.
Usage

Click on any of the boxes in the matrix to change its color to green. Once you click all nine boxes, they will all change to orange in the order they were clicked.
File Structure

    src/App.js: Contains the main React component and the logic for the color-changing matrix.
    src/App.css: Contains the CSS for styling the application.

## Acknowledgements

    Created with Create React App.
    Hosted on netlify.