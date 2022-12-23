const closeBtn = document.querySelector('.chat-title-icon');
const openBtn = document.querySelector('.chat-icon');

const chatContainer = document.querySelector('.chat-container')

const header = document.querySelector('header')
const main = document.querySelector('main')

openBtn.addEventListener('click', () => {
    openBtn.style = 'transform: translateY(150%)'
    setTimeout(() => {
        chatContainer.style = 'transform: translateY(0)'
    }, 200)
})

closeBtn.addEventListener('click', () => {
    chatContainer.style = 'transform: translateY(100%)'
    setTimeout(() => {
        openBtn.style = 'transform: translateY(0)'
    }, 200)
})

//SCROLL BOTTOM FEATURE

const chat = document.querySelector('.chat')
chat.scrollTop = chat.scrollHeight

// SOCKET IO

const socket = io.connect();

function renderChat(data) {
    let chatHTML = `<div class='chat-info-msg'>
                      <span>El chat se encuentra vacio en este momento<span/>
                  <div/>`;
    if (data.length > 0) {
        chatHTML = data
            .map((elem, index) => {
                return `<div id='${index}' class='msg-container'>
                            <strong class='msg-author'>${elem.author}:</strong>
                            <p class='msg-text'>${elem.text}</p> 
                            <span class="msg-date">[${elem.date}]<span>
                        </div>`;
            })
            .join(" ");
    }
    document.getElementById("messages").innerHTML = chatHTML;
    const chat = document.querySelector(".chat");
    chat.scrollTop = chat.scrollHeight;
}

//LISTENNIG MSG
socket.on("messages", function (data) {
    renderChat(data);
});

//NAME IN CHAT IF IS LOGGED
const getUser = async () => {
    let name;
    let email;
    await fetch("/userInfo/name")
        .then((res) => res.json())
        .then((data) => {
            name = data.username
            email = data.mail
        });
    return { name, email }
};

//INPUT
const chatForm = document.querySelector(".chat-input-box");
chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addMessage();
});

async function addMessage() {
    const isLogin = await getUser()

    if (!isLogin.name) {
        window.location.href = '/login'
    } else {

        const userInfo = await getUser()
        const newMsg = {
            email: userInfo.email,
            author: userInfo.name,
            date: `${new Date().toLocaleDateString()} - (${new Date().toLocaleTimeString()})`,
            text: document.getElementById("userMsg").value,
        };

        socket.emit("new-message", newMsg);

        document.getElementById("userMsg").value = ''

        return false;
    }
}