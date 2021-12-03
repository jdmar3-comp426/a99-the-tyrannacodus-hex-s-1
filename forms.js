window.addEventListener( "load", function () {
    function sendData() {
        const sendRequest = new XMLHttpRequest();           // create new HttpRequest
        const signupInfo = new URLSearchParams(new FormData( form));                  // create new form data object
        
        // error message 
        sendRequest.addEventListener( "error", function (event) {
            alert("An error has occurred.");
        });

        // success message
        sendRequest.addEventListener( "load", function (event) {
            alert("Form successfully submitted.");
        });
        
        sendRequest.open("POST", "http://localhost:5000/app/new/");                                 // set up connection - args of HTTP method and endpoint
        sendRequest.send( signupInfo );                     // send the form data object
    };

    const form = document.getElementById("signup");         // grab the form from index.html

    form.addEventListener( "submit", function ( event ) {   // take over submit event from form
        event.preventDefault();                             // cancels event if necessary
        sendData();
    });
});