# Frontend 4 Week 2 Project || Dec 24

# Postal Code Lookup Application

## Project Overview
This project is a React-based application that allows users to search for post office details by entering a postal code (Pincode). The application fetches postal data from the [Postal Pincode API](https://api.postalpincode.in/) and displays the results with details about each post office, including branch type, delivery status, and district. Users can filter the post offices by name and navigate between different sections like the home page, results page, and about page.

## Features
- Enter a postal code to retrieve post office data.
- View post office details including branch type, delivery status, district, and division.
- Filter the results by post office name.
- Display loading and error messages during data fetching.
- User-friendly form with validation to ensure only valid 6-digit pincodes are entered.

## Tech Stack
- **React**: For building the UI.
- **Redux Toolkit**: For state management.
- **React Router**: For navigation between different pages.
- **React Hook Form**: For form handling and validation.