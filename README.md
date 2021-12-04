[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6356164&assignment_repo_type=AssignmentRepo)
## Cookie Clicker App

A simple game where the user can click the cookie to gain points. Users can create an account where their current score will be saved, and updated when they log in. Users can delete their account after logging in.

## Server setup
- Npm init
- Npm install browser-sync better-sqlite3 express md5
- Npm install concurrently
- Npm install cors
- "scripts": {
    "client": "npx browser-sync start -sw",
    "server": "node server.js",
    "start": "concurrently --kill-others 'npm run client' 'npm run server'"
  },
    "proxy": "http://localhost:8080"


## Documentation
 - For team roles [click here](https://github.com/jdmar3-comp426/a99-the-tyrannacodus-hex-s-1/blob/main/docs/teamRoles.md)
 - For API endpoints used [click here](https://github.com/jdmar3-comp426/a99-the-tyrannacodus-hex-s-1/blob/main/docs/endpointsList.md)
 - For planning documentation archive [click here](https://github.com/jdmar3-comp426/a99-the-tyrannacodus-hex-s-1/blob/main/docs/planning-archive.md)

