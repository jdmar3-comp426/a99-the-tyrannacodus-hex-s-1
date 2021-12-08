## Final Project Planning
- Front end/design lead - Noah
- Back end lead - Alyssa
- Database lead - Anna
- Review manager - Noah
- Plan manager - John
- Documentation manager - Maanasa

## Cookie Clicker game:
Users can create an account (username, password, score) - email not necessary
Log in to account with username+password to load score from database
While logged in, able to save score to database
While logged in, able to delete account
Score is saved as a text variable in the database - must convert to Int to use with the variable

# Front-end specifications -
Give users the ability to register an account, update their information, see their information somewhere, and delete their account.
Interactions with the front end should be logged in a database.
# Back-end specifications -
API built on whatever framework you choose.
API root endpoint at http://HOST/app/.
Should create (if nonexistent) and interact with a database of users and interactions. These can be separate databases or separate tables in one database.
# Database - 
User database - registration details (username, password, email address, etc.)
Interaction database - details of user interactions (login history, gameplay history, save points, scores, etc.)
# Documentation -
License documentation - Choose a license and include it in the repository just like we have been.
README.md file with basic description, installation requirements/instructions, dependency list, run instructions
/docs/ directory containing full documentation of every available API endpoint that you create for your app. This directory should also house an archive of your planning documentation.
Code comments (preferably referring to the documentation)
User instructions in the interface

## Set up dependencies - similar to a05
- Npm init
- Npm install browser-sync better-sqlite3 express md5
- npm install concurrently
- Npm install cors
- "scripts": {
    "client": "npx browser-sync start -sw",
    "server": "node server.js",
    "start": "concurrently --kill-others 'npm run client' 'npm run server'"
  },
  "proxy": "http://localhost:8080",

## Other notes
- Front-end Design - Noah 
- Sign-up Form + backend/database setup - Alyssa
- Login - on login with username/password, update current score - John (maybe set a flag with the current username etc? - used hidden fields with forms)
- While logged in - update score in database with each click - Alyssa
- Delete an account - pull ID from username/password while logging in and then use the ID to delete it - Anna
- Documentation: 
- License - Maanasa
- README - Maanasa
- /docs/ of API endpoints and planning documentation - Maanasa/Alyssa
- Screen-recorded demo - Noah


## API Endpoints:
- /app/ - Root endpoint. READ (HTTP method GET) to confirm API is working - not used by forms
- /app/new/ - CREATE a new user (HTTP method POST). Takes arguments of user, pass, and score.
- /app/users/ - READ a list of all users (HTTP method GET). - not used by forms
- /app/user/:id - READ a single user (HTTP method GET) identified by ID. - not used by forms
- /app/user/login - READ a single user (HTTP method GET) identified by the arguments of user and pass.
- /app/update/user/:id - UPDATE a single user (HTTP method PATCH) identified by ID.
- /app/delete/user/:id - DELETE a single user (HTTP method DELETE) identified by ID.
