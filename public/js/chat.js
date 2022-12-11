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