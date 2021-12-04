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
              //updating the click number
              var score = parseInt(JSON.parse(sendRequest.response).score);
              //checking to make sure that score is no undefined
              if (score != undefined) {
                document.getElementById("clicks").innerHTML = score;
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
    const form3 = document.getElementById("delete")          //grab delete form

    form3.addEventListener( "submit", function ( event ) {   // take over submit event from form
        event.preventDefault();                             // cancels event if necessary
        deleteUser();
    });
    function deleteUser(){
        const sendRequest = new XMLHttpRequest();                                     // create new HttpRequest
        const deleteInfo = new URLSearchParams(new FormData( form3));                   //new data form object

        // error message 
        sendRequest.addEventListener( "error", function (event) {
            alert("An error has occurred.");
        });

        // success message
        sendRequest.addEventListener( "load", function (event) {
            alert("Form successfully submitted.");
        });

        sendRequest.open("DELETE", "http://localhost:5000/app/delete/user/:id");         // set up connection - args of HTTP method and endpoint
        //sending the requrest to backend
        sendRequest.send( deleteInfo );                                     // send the form data object

    }

    function updateScore() {
        const sendRequest = new XMLHttpRequest();                                     // create new HttpRequest
        const saveInfo = new URLSearchParams(new FormData(form2));                      //new data form object

        
        
        alert("updating score");
        // create new form data object
    
        // error message 
        sendRequest.addEventListener( "error", function (event) {
            alert("An error has occurred.");
        });

        // success message
        sendRequest.addEventListener( "load", function (event) {
            alert("Form successfully submitted.");
        });
    
        sendRequest.open("PATCH", "/app/user/save/");         // set up connection - args of HTTP method and endpoint
        //sending the requrest to backend
        sendRequest.send( saveInfo );     
    }


    const form2 = document.getElementById("login");         // grab the form from index.html
    const loginButton = document.getElementById("logButton");
    const saveButton = document.getElementById("save");

    loginButton.addEventListener( "click", function ( event ) {   // take over submit event from form
        event.preventDefault();                             // cancels event if necessary
        sendData2();
    });

    saveButton.addEventListener( "click", function (event) {
        event.preventDefault();
        updateScore();
    });
});