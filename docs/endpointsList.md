## API Endpoints
- /app/ - Root endpoint. READ (HTTP method GET) to confirm API is working
- /app/new/ - CREATE a new user (HTTP method POST). Takes arguments of user, pass, and score.
- /app/users/ - READ a list of all users (HTTP method GET). 
- /app/user/:id - READ a single user (HTTP method GET) identified by ID.
- /app/user/login - READ a single user (HTTP method GET) identified by the arguments of user and pass.
- /app/update/user/:id - UPDATE a single user (HTTP method PATCH) identified by ID.
- /app/delete/user/:id - DELETE a single user (HTTP method DELETE) identified by ID.
