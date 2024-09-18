
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const username = document.getElementById('Name').value;
    const password = document.getElementById('password').value;

    
    const correctUsername = "BEAULAH";
    const correctPassword = "24/09/2001";

    if (username === correctUsername && password === correctPassword) {
        
        window.location.href = "Click.html";
    } else {
      
        alert('Login credentials are incorrect. Please try again.');
        document.getElementById('Name').value = '';
        document.getElementById('password').value = '';
    }
});
