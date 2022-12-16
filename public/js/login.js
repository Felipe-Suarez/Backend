const loginForm = document.getElementById('loginForm')

const email = document.getElementById('email')
const password = document.getElementById('password')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        })
    }).then(res => res.json()).then(data => {
        if (data.error) {
            window.location.href = '/loginError'
        } else {
            localStorage.setItem('token', data.token)
            window.location.href = '/'
        }
    })
})