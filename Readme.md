# Project Name: Web Media pt

## Description
Web Media pt is a social media application that allows users to share photos and videos, connect with others, and receive notifications about interactions with their content.

## Features
- **Authentication**
    - Login
    - Logout
    - Register

- **Notification**
    - When someone likes your post
    - When someone comments on your post
    - When someone follows you
    - When someone unfollows you

- **Post**
    - User can post video or photo with text
    - User can comment
    - User can like posts
    - User can save posts
    - User can delete posts
    - User can update posts

- **Profile**
    - User can update profile picture or cover image
    - User can update username, bio, link, and email
    - User can delete profile

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/web-media-pt.git
    ```
2. Navigate to the project directory:
    ```bash
    cd web-media-pt
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables (create a `.env` file and add your variables):
    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_URL=your_cloudinary_url
    ```

5. Run the application:
    ```bash
    npm start
    ```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new account or log in with an existing one.
3. Start posting, liking, commenting, and updating your profile!

## Technology Stack
- **Frontend:** React, React query, deisy ui
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-time:** Socket.io
- **Storage:** Cloudinary
- **Authentication:** JWT

## Contributing
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes.
4. Commit your changes:
    ```bash
    git commit -m "Add some feature"
    ```
5. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
6. Open a pull request.

## Blog about my this project is created in steps

- STEP 1
    - initialise the project by the commond npm init -y
    - changing the pakeage json file type will module to use import export 
    - creating two folder backend and frontend and localFile
    - creating file like .env .gitignore 

- STEP 2
    - BACKEND
        -  INITIALISING THE BACKEND
            - installing dependency and and listening on the port 8000
            - setup the dotenv config file
        - DB CONNECTION
            - connecting the db 
        - Utils 
            - ASYNC HANDLER : asyncHandle function its a wrapper funtion that can take a function and wrappe into Promise if function get any problem promise will reject and send error message

            - API RESPONSE : That is a class that created for well sturctured response to the backend

            - API ERROR : That is also a class that created for well sturctured error with status code and with message

            - CLOUDINARY : cloudinary has two functions first function will take a localFile path and save the image into the cloudinary and second function will take a publicId that delete the image into the cloudinary

    - FRONTEND
        - INITIALISING THE FRONTEND
            - create a react app with vite and remove all default components
            - setup tailwind for styling 

