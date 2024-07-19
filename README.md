# MyHodler

## MyHodler is a web application for tracking current currency exchange rates and obtaining detailed.

 <p>Information about selected currencies with charts showing rate changes over various time intervals.<br>
 The application is built using React, MobX, Tailwind CSS and Highcharts.</p>

## Key Features:

- Display a list of currencies with current exchange rates.
- Search for currencies by name.
- Sort currencies by rate, 24-hour change, and name.
- Display detailed information about selected currencies.
- Chart showing exchange rate changes for selected currencies over the last 24 hours, 7 days, 30 days, 90 days, and 1 year.

## Technology Stack:

- **React** : For building the interface.
- **MobX** : For state management.
- **Tailwind CSS**: For styling.
- **Highcharts** : For charting.
- **Vite** : For project bundling.
- **Features Sliced Design**: For project architecture. For more information, refer to the [Features Sliced Design documentation](https://feature-sliced.design/).

## Installation:

To get started with the application, follow these steps:

    - Clone the repository:
      1. git clone https://github.com/Gmenya/myhodler
      2. cd myhodler

    - Install dependencies:
        npm install

    - Start the application in development mode:
        npm run dev

## The application will run on http://localhost:5173 by default.

## Project Structure:

<ul>
  <li>src/</li>
    <ul>
    <li>app/</li>
      <ul>
        <li>App.tsx: Main application component.</li>
        <li>router/: Application routing.</li>
      </ul>
    <li>pages/</li>
      <ul>
      <li>CurrencyDetail/: Page for displaying currency details and chart.</li>
      <li>MainPage/: Page for displaying the list of currencies.</li>
      </ul>
    <li>widgets/</li>
      <ul>
      <li>ChartWidget/: Currency chart widget for page CurrencyDetail.</li>
      <li>CurrencyDetailInfoWidget/: Currency detail information widget for CurrencyDetailPage.</li>
      <li>CurrencyListWidget/: Currency list widget for MainPage.</li>
      </ul>
    <li>features/</li>
      <ul>
      <li>sortAndFilterCurrency/: Logic for sorting and filtering currencies.</li>
      </ul>
    <li>entities/</li>
      <ul>
      <li>Currency/: Currency entity, store, and API requests.</li>
      </ul>
    <li>shared/</li>
      <ul>
      <li>assets/: Images and icons.</li>
      <li>consts/: Application constants.</li>
      <li>lib/: Utility functions.</li>
      <li>ui/: Shared UI components.</li>
      </ul>
    </ul>
</ul>

## Commands:

    - npm run dev: Start the application in development mode.
    - npm run build: Build the application.
    - npm run lint: Run the linter to check the code.
    - npm run lint:fix: Fix linter errors.
