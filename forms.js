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
              var score = JSON.parse(sendRequest.response).score;
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


    const form2 = document.getElementById("login");         // grab the form from index.html

    form2.addEventListener( "submit", function ( event ) {   // take over submit event from form
        event.preventDefault();                             // cancels event if necessary
        sendData2();
    });
});