# 📓 Zotion

## Features

- **Slash Commands** (Type `/` to turn the block into different content types)
- **HTML Support** (Use regular HTML tags like `<a>` in text blocks)
- **Image Support** (Upload images by using the `/image` command)
- **Drag And Drop** (Reorder blocks easily by drag and drop)
- **Guest Editing** (Anyone can create public pages and share them via link)
- **User Management** (Create an account to create private pages)
- **Scheduled Jobs** (Delete inactive pages and accounts automatically)

## Tech Stack

The frontend is built with Next.js and fully server-side rendered. On the backend, a REST API handles saving user content and user management.

#### Frontend

Next.js · React.js · SCSS/SASS

#### Backend

Express.js · MongoDB with Mongoose · Nodemailer · JWT (Cookie-based)

## Installation

1. **Clone the project**

   ```sh
    git clone https://github.com/Volteee/Zotion.git
    cd Zotion
   ```
   
2. **Add environment variables**

   Backend: Create an `.env` file in the `backend` directory:

   ```
   FRONTEND_URL="http://localhost:3000"
   DOMAIN="localhost"
   JWT_KEY="yourSecretForTokenGeneration"
   PORT=8080
   MONGO_URI="mongodb+srv://username:password@cluster.gqqwp.gcp.mongodb.net/database?retryWrites=true&w=majority"
   MAIL_HOST="smtp.sendgrid.net"
   MAIL_PORT=465
   MAIL_USER="apiKey"
   MAIL_SENDER="Your Name <your@mail.com>"
   MAIL_PASSWORD="yourSendGridApiKey"
   ```

   Frontend: Create an `.env.local` file in the `frontend` directory:

   ```
   NEXT_PUBLIC_API="http://localhost:8080" // references your Backend API endpoint
   ```

3. **Install and run backend (http://localhost:8080)**

    ```sh
    cd backend
    npm install
    npm start
    ```

4. **Install and run frontend (http://localhost:3000)**

    ```sh
    cd frontend
    npm install
    npm run dev
    ```