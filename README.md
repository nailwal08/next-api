# Filesystem Interaction with User Input

This project aims to demonstrate how to interact with the filesystem in a Node.js environment. The primary functionality includes taking user input through a form and using a POST request to write the captured data into a JSON file.

-- Added delete API (submit the name of the json file that you want to delete and hit the delete button.)

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/nailwal08/next-api.git

cd your-repository

npm run dev

Usage
Access the application in your web browser at http://localhost:3000/contact.
Fill out the form with your details (name, email, phone, and comments).
Click the "Submit" button to send the form data.
The data will be captured and written into the json file located in the contactdata/ directory.

project-root/
│
├── src/                   # Source code directory
│   ├── app.js             # Main application file
│   └── ...
│
├── public/                # Public assets directory
│   ├── index.html         # HTML template
│   └── ...
│
├── data/                  # Data directory
│   └── comments.json      # JSON file to store comments data
│
├── README.md              # Project documentation
└── ...

Contributing
Contributions are welcome! If you have any suggestions, improvements, or feature requests, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.
