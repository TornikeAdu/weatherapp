# Weather Forecast Application

This is a Weather Forecast Application built with React and Vite. The application allows users to check the current weather and forecast for a specified location. It supports multiple languages (Georgian and English) and includes a dark mode feature.

## Features

- Fetch current weather data and forecast using OpenWeatherMap API
- Dark mode toggle
- Language switcher (Georgian and English)
- Responsive design with a hamburger menu for mobile devices

## Tools and Libraries Used

- React: JavaScript library for building user interfaces
- Vite: Next-generation frontend tooling
- React Router: Declarative routing for React applications
- Framer Motion: Motion library for React
- react-i18next: Internationalization for React
- Yup: JavaScript schema builder for value parsing and validation
- React Hook Form: Performant, flexible, and extensible forms with easy-to-use validation
- Axios: Promise-based HTTP client for the browser and Node.js
- OpenWeatherMap API: Weather data provider

# Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or later)
- npm (comes with Node.js)
- API key is integrated. No additional instructions are required

## Screenshots

#### EN

- Home Page
  ![HomePageEng](https://i.imgur.com/SgOLSOh.png)
- Home Page With Weather Data
  ![Imgur](https://imgur.com/6ROuukR.png)
- About Us Page
  ![Imgur](https://imgur.com/nCfdAWh.png)
- Contact Us
  ![Imgur](https://imgur.com/2yYu3r1.png)

#### GE

- Home Page With Weather Data And Dark Theme
  ![Imgur](https://imgur.com/IPUkJ9A.png)
- About Us Page
  ![Imgur](https://imgur.com/7675exW.png)
- Contact Us
  ![Imgur](https://imgur.com/YOPhaYv.png)

## Installation

Install my-project with npm

```bash
  git clone https://github.com/Tornikebtu/weatherapp.git
  cd weather-forecast
```

Install the dependencies:

```bash
  npm install
```

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## File Structure

```bash
+--weather-forecast
¦
    +---public
    ¦       vite.svg
    ¦
    +---src
        ¦   App.jsx
        ¦   main.jsx
        ¦   routes.jsx
        ¦
        +---api
        ¦       weatherApi.js
        ¦
        +---assets
        ¦       darkicon.svg
        ¦
        +---components
        ¦   +---About
        ¦   ¦       AboutPage.jsx
        ¦   ¦
        ¦   +---Common
        ¦   ¦       Darkmode.jsx
        ¦   ¦       Footer.jsx
        ¦   ¦       Header.jsx
        ¦   ¦       LangSwitcher.jsx
        ¦   ¦       NavBar.jsx
        ¦   ¦
        ¦   +---Contact
        ¦   ¦       ContactForm.jsx
        ¦   ¦       ContactPage.jsx
        ¦   ¦
        ¦   +---Home
        ¦           HomePage.jsx
        ¦           WeatherSummary.jsx
        ¦
        +---hooks
        ¦       useFetchWeather.js
        ¦       useLocalStorage.js
        ¦
        +---i18n
        ¦       en.json
        ¦       ge.json
        ¦       i18n.js
        ¦
        +---pages
        ¦       About.jsx
        ¦       Contact.jsx
        ¦       Home.jsx
        ¦
        +---styles
            ¦   global.css
            ¦
            +---components
                    contactpage.css
                    footer.css
                    header.css
                    homepage.css
                    navbar.css

¦   .eslintrc.cjs
¦   index.html
¦   package-lock.json
¦   package.json
¦   README.md
¦   vite.config.js
```
