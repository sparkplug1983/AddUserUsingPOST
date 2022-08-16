const peticion = async () => {
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const answer = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }),
    });
    
if (answer){
    const conversion = await answer.json();
    console.log(conversion);
}
    
}