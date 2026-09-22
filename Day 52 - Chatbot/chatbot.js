let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let sendMsgBtn = document.getElementById("sendMsgBtn");
let userInput = document.getElementById("userInput");
let chatContainer = document.getElementById("chatContainer");

function chatbotMsgListfunction(chatbotMsgList) {
    let ul = document.createElement("ul");
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * (chatbotMsgList.length) - 1)];
    console.log(Math.random());
    ul.textContent = chatbotMsg;
    ul.classList.add("msg-from-chatbot-container", "msg-from-chatbot");
    chatContainer.appendChild(ul);
}

sendMsgBtn.onclick = function() {
    let ul = document.createElement("ul");
    ul.textContent = userInput.value;
    chatContainer.appendChild(ul);
    ul.classList.add("msg-to-chatbot-container", "msg-to-chatbot");
    userInput.value = "";

    chatbotMsgListfunction(chatbotMsgList);
};
