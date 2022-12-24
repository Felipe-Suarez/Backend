const chatContainer = document.querySelector('.chat-container')

//SCROLL BOTTOM FEATURE

const chat = document.querySelector('.chat')
chat.scrollTop = chat.scrollHeight

// SOCKET IO

const socket = io.connect();

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

async function renderChat(data) {
    let chatHTML = `<div class='chat-info-msg'>
                      <span>El chat se encuentra vacio en este momento<span/>
                  <div/>`;
    if (data.length > 0) {
        const userInfo = await getUser()
        const userMsgs = data.filter(msg => msg.email === userInfo.email)
        chatHTML = userMsgs
            .map((elem, index) => {
                return `<div id='${index}' class='msg-container'>
                            <strong class='msg-author'>${elem.author.toUpperCase()}:</strong>
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