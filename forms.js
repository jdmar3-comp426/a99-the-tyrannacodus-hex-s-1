window.addEventListener( "load", function () {
    function sendData() {
        const sendRequest = new XMLHttpRequest();                                     // create new HttpRequest
        const signupInfo = new URLSearchParams(new FormData( form));                  // create new form data object
        
        // error message 
        sendRequest.addEventListener( "error", function (event) {
            alert("An error has occurred.");
        });

        // success message
        sendRequest.addEventListener( "load", function (event) {
            alert("Form successfully submitted.");
        });
        
        sendRequest.open("POST", "http://localhost:5000/app/new/");         // set up connection - args of HTTP method and endpoint
        sendRequest.send( signupInfo );                                     // send the form data object
    };

    const form = document.getElementById("signup");         // grab the form from index.html

    form.addEventListener( "submit", function ( event ) {   // take over submit event from form
        event.preventDefault();                             // cancels event if necessary
        sendData();
    });

    function sendData2() {
        const sendRequest = new XMLHttpRequest();                                     // create new HttpRequest
        const signupInfo = new URLSearchParams(new FormData( form2));                  // create new form data object
        //waiting for the response to be successful and change the data on the page
        sendRequest.onreadystatechange = function() {
            //4 means done
            if (sendRequest.readyState === 4) {
              //updating the click number and saved log-in info for other functions
              var loadScore = parseInt(JSON.parse(sendRequest.response).score);
              var loggedUser = JSON.parse(sendRequest.response).user;
              var loggedId = parseInt(JSON.parse(sendRequest.response).id);
              //checking to make sure that the values are not undefined
              if (loadScore != undefined) {
                document.getElementById("clicks").innerHTML = loadScore;
                score = loadScore;
              }  
              if (loggedUser != undefined) {
                  document.getElementById("usersave").setAttribute("value", loggedUser);
                  document.getElementById("currentUser").innerHTML = loggedUser;
              }
              if (loggedId != undefined) {
                  document.getElementById("idsave").setAttribute("value", loggedId);
                  document.getElementById("idDelete").setAttribute("value", loggedId);
              }
            }
          }
        // error message 
        sendRequest.addEventListener( "error", function (event) {
            alert("An error has occurred.");
        });

        // success message
        sendRequest.addEventListener( "load", function (event) {
            alert("Form successfully submitted.");
        });
        
        sendRequest.open("POST", "http://localhost:5000/app/user/login/");         // set up connection - args of HTTP method and endpoint
        //sending the requrest to backend
        sendRequest.send( signupInfo );                                     // send the form data object
        
    };

    const form2 = document.getElementById("login");         // grab the form from index.html
    const loginButton = document.getElementById("logButton");

    loginButton.addEventListener( "click", function ( event ) {   // take over submit event from form
        event.preventDefault();                             // cancels event if necessary
        sendData2();
    });
    
    function deleteUser(){
        const sendRequest = new XMLHttpRequest();                                     // create new HttpRequest
        // append current ID to url to get appropriate endpoint
        var userID = document.getElementById("idDelete").value; 
        var url = "http://localhost:5000/app/delete/user/" + userID +"/";

        // error message 
        sendRequest.addEventListener( "error", function (event) {
            alert("An error has occurred.");
        });

        // success message
        sendRequest.addEventListener( "load", function (event) {
            alert("Form successfully submitted.");
        });

        

        sendRequest.open("DELETE", url);         // set up connection - args of HTTP method and endpoint
        //sending the request to backend
        sendRequest.send();                                     // send the form data object

    };

    const form3 = document.getElementById("delete")          //grab delete form

    form3.addEventListener( "submit", function ( event ) {   // take over submit event from form
        event.preventDefault();                             // cancels event if necessary
        deleteUser();
    });

    function updateScore() {
        const sendRequest = new XMLHttpRequest();                                     // create new HttpRequest
        const saveInfo = new URLSearchParams(new FormData(saveForm));                      //new data form object
        // append saved ID to url in order to updatee at the appropriate endpoint
        var url = "http://localhost:5000/app/update/user/" + document.getElementById("idsave").value +"/"
        alert(url);
        // create new form data object
    
        // error message 
        sendRequest.addEventListener( "error", function (event) {
            alert("An error has occurred.");
        });

        // success message
        sendRequest.addEventListener( "load", function (event) {
            alert("Form successfully submitted.");
        });
        
        sendRequest.open("PATCH", url);         // set up connection - args of HTTP method and endpoint
        //sending the requrest to backend
        sendRequest.send( saveInfo );     
    }

    const saveForm = document.getElementById("saveForm");
    const saveButton = document.getElementById("save");

    saveButton.addEventListener( "click", function (event) {
        event.preventDefault();
        updateScore();
    });
});