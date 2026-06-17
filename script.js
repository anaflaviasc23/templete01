const chat = document.getElementById("chat");

function ajouterMessage(classe, texte){
    const div = document.createElement("div");
    div.className = classe;
    div.innerHTML = texte;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

function envoyerMessage(){

    const input = document.getElementById("message");
    const texte = input.value.trim();

    if(texte === "") return;

    ajouterMessage("user", "Vous: " + texte);

    analyserFrancais(texte);

    input.value = "";
}

function analyserFrancais(message){

    let reponse = "";
    let correction = "";

    if(message.toLowerCase() === "bonjour"){
        reponse = "Bonjour ! Comment ça va ?";
    }

    else if(message.toLowerCase() === "je suis bien"){
        correction = "On dit : 'Je vais bien'.";
        reponse = "Très bien !";
    }

    else if(message.includes("je aime")){
        correction = "Correction : 'J'aime'.";
        reponse = "Excellent ! Continue.";
    }

    else{
        reponse = "Merci pour votre message.";
    }

    ajouterMessage("bot", "Professeur: " + reponse);

    if(correction){
        ajouterMessage("correction", "Correction: " + correction);
    }
}