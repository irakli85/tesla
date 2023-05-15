document.getElementById('registrationForm').addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confpassword = document.getElementById('confirmation').value

    if(password !== confpassword){
        alert(`Passwords don't match`);
        return;
    }

    console.log({
        username: username,
        email: email,
        password: password
    })

    alert('Successfully Registered !');
})