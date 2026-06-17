const chat = document.getElementById("chat");

function addMessage(text, className){

    const div = document.createElement("div");

    div.classList.add("message");
    div.classList.add(className);

    div.innerHTML = text;

    chat.appendChild(div);

    chat.scrollTop = chat.scrollHeight;
}

function sendMessage(){

    const input = document.getElementById("messageInput");

    const text = input.value.trim();

    if(!text) return;

    addMessage(text,"user");

    checkFrench(text);

    input.value = "";
}

function checkFrench(text){

    let response =
    "Très bien ! Continue la conversation.";

    let correction = "";

    if(text.includes("je suis bien")){
        correction =
        "❌ Je suis bien<br>✅ Je vais bien";
    }

    if(text.includes("je aime")){
        correction =
        "❌ Je aime<br>✅ J'aime";
    }

    addMessage(response,"bot");

    if(correction){
        addMessage(
            "<b>Correção:</b><br>"+correction,
            "correction"
        );
    }
}