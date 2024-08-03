# FizzBuzz Game

## Technologies Used

- **HTML:** For structuring the web pages
- **CSS:** For styling the web pages
- **JavaScript:** For implementing the FizzBuzz logic and API interactions
- **Fetch API:** For making requests to the backend API

## Getting Started

### Prerequisites

- A web browser
- Connection to the on-campus Wi-Fi network (eduroam) to access the backend API

### Setup

1. Clone the repository to your local machine:
    ```sh
    git clone https://gitlab.com/your-username/fizzbuzz.git
    ```

2. Navigate to the project directory:
    ```sh
    cd fizzbuzz
    ```

3. Open `login.html` in your web browser to start the project.

## API Information

The project uses a backend API hosted at `http://basic-web.dev.avc.web.usf.edu` to store and retrieve user scores. Note: This API is accessible only when connected to the on-campus Wi-Fi network, eduroam.

### Endpoints

- **Get Score:** `GET /:id` - Retrieves the score for a given username.
- **Update Score:** `POST /:id` - Updates the score for a given username. If the user does not exist, a new user is created.

## File Descriptions

- **login.html:** The login page where users enter their username.
- **game.html:** The main game page where users play the FizzBuzz game.
- **css/styles.css:** The CSS file for styling the web pages.
- **js/script.js:** The JavaScript file containing the FizzBuzz logic and API interactions.
- **README.md:** This readme file.

## Usage

1. Open `login.html` in your web browser.
2. Ensure you are connected to the on-campus Wi-Fi network (eduroam).
3. Enter your username and click "Login".
4. On the main game page, click the "Increment" button to increment your score and see the FizzBuzz result.
5. Your score will be saved and retrieved the next time you log in with the same username, provided you are connected to eduroam.

## Troubleshooting

- **Increment button not working:** Ensure that you are connected to the on-campus Wi-Fi network (eduroam) and the backend API is accessible.
- **Score not updating:** Check the browser console for errors and ensure the API endpoint is correct.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## Contact

If you have any questions or feedback, please contact [chaudharyd@usf.edu].
