window.addEventListener( "load", function () {
    function signIn() {
        const request = new XMLHttpRequest();
        const loginInfo = new URLSearchParams(new FormData (login));

        // error message
        request.addEventListener( "error", function (event) {
            alert("An error has occurred");
        });

        // success message
        request.addEventListener( "load", function (event) {
            alert("Form successfully submitted.");
        });

        request.open("GET", "http://localhost:5000/app/user/login")
        request.send( loginInfo );
    }

    const login = document.getElementById("login");

    login.addEventListener( "submit", function( event ) {
        event.preventDefault();
        signIn();
    });
});