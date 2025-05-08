📖 Quote App

A simple web app that fetches and displays random motivational quotes from an API. The app is built using Node.js and Express for the backend and serves a static HTML frontend.

🚀 Features

Displays a random quote fetched from an API.

Fetches quotes from the Quotable API.

Simple UI with a button to refresh the quote.

🛠️ Tech Stack

Backend: Node.js, Express

Frontend: HTML, CSS

API: Quotable API

Other Dependencies:

node-fetch for API requests.

morgan for request logging (optional).

express-rate-limit for basic rate limiting (optional).

🔧 Installation
1. Clone the repository:
git clone https://github.com/b-himadri/Random_quotes_generator.git
2. Navigate to the project directory:
cd quote-app
3. Install dependencies:
npm install
⚡ Running the App

Start the server:

node server.js

Open your browser and go to http://localhost:3000 to view the app.

🔒 Production Considerations

The app currently bypasses SSL verification (rejectUnauthorized: false) for API requests. This is done for development purposes only. In production, you should ensure that SSL certificates are properly configured to avoid security risks.

Consider using environment variables for sensitive information such as API keys or server configurations.

📄 Usage

Click the "Get Quote" button to display a random quote. The app fetches a quote from the Quotable API and displays it. You can refresh the quote by clicking the button again.

💡 Future Improvements

Add more styling to the UI (e.g., background image, animation).

Implement user authentication to save favorite quotes.

Allow users to request quotes from specific categories or authors.

📜 License

This project is licensed under the MIT License - see the LICENSE file for details.
