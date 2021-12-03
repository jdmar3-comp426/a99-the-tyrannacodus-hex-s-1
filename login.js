/*window.addEventListener( "load", function () {
    function signIn() {
        const request = new XMLHttpRequest();                               // create new HTTPRequest
        const loginInfo = new URLSearchParams(new FormData (login));        // create form data

        // error message
        request.addEventListener( "error", function (event) {
            alert("An error has occurred");
        });

        // success message
        request.addEventListener( "load", function (event) {
            alert("Form successfully submitted.");
        });
        console.log(login);
        console.log(new FormData (login));
        request.open("GET", "http://localhost:5000/app/user/login/")         // set up connection - args of HTTP method and endpoint
        request.send( loginInfo );                                          // send the form data object
    }

    const login = document.getElementById("login");                         // get login form

    login.addEventListener( "submit", function( event ) {                   // listen for submit button being clicked
        event.preventDefault();
        signIn();       
    });
});*/
