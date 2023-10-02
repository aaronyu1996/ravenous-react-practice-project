Ravenous Project
================

Welcome to my Ravenous project! This is a web application built with React that allows users to search for businesses and display a list of results based on their search criteria. This project utilizes the Yelp API to fetch business data.

Table of Contents
-----------------

-   [Technologies Used]
-   [Installation]
-   [Features]
-   [Usage]
-   [Contributing]
-   [License]

Technologies Used
-----------------

This project utilizes the following technologies:

-   React
-   CSS Modules
-   Yelp API

Installation
------------

To run this project locally, follow these steps:

1.  Clone this repository to your local machine using `git clone`.

2.  Install the required dependencies by running:

    bashCopy code

    `npm install`

3.  Set up a Yelp API Key:

    -   Sign up for a Yelp Developer account and create an application to obtain an API key.
    -   Create a `.env` file in the project directory and add your Yelp API key as follows:

        envCopy code

        `REACT_APP_YELP_API_KEY=your-api-key-here`

4.  Start the development server:

    bashCopy code

    `npm start`

    This will run the app in development mode. You can access it at [http://localhost:3000](http://localhost:3000/) in your web browser.

Features
--------

-   Search for Businesses: Enter a search term, location, and sort option to find businesses that match your criteria.
-   Display Business Results: View a list of businesses based on your search.
-   Interactive User Interface: The app provides an easy-to-use interface for searching and viewing business information.

Usage
-----

1.  Visit the web application's URL after starting the development server.

2.  Enter a search term (e.g., "restaurants"), location (e.g., "New York"), and select a sorting option.

3.  Click the "Let's Go" button to initiate the search.

4.  Explore the list of businesses that match your search criteria.
