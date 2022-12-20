const token = localStorage.getItem('token')

fetch('/token', {
    method: 'get',
    headers: {
        "Content-Type": "application/json",
        "Authorization": token
    }
})