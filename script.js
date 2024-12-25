let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerEl = document.getElementById('chatContainer');
let userInputEl = document.getElementById('userInput');
let sendButtonEl = document.getElementById("sendMsgBtn");

function sendMsgToChatbot() {
    let msgEl = userInputEl.value;

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    let labelEl = document.createElement("label");
    labelEl.textContent = userInputEl.value;
    labelEl.classList.add("msg-to-chatbot");
    msgContainerEl.appendChild(labelEl);
    userInputEl.value = "";
    getReplyFromChatbot();
}

function getReplyFromChatbot() {

    let noOfChatbotMsgs = chatbotMsgList.length;


    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs) - 1];


    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);


    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatbotMsg;
    chatbotMsgEl.classList.add("msg-from-chatbot");
    msgContainerEl.appendChild(chatbotMsgEl);
}