const token = localStorage.getItem('token')

fetch('/token', {
    method: 'post',
    headers: {
        "Content-Type": "application/json",
        "Authorization": token
    }
})