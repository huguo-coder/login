async function controllacredenziali() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password )
        return alert("Scrivi un nome e una password");
   const res = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${username}&password=${password}`
    });


    const json = await res.json();


    if (json.messaggio == 1){
        document.getElementById("risultato").innerText = "Accesso effettuato";
    }
    else {
        document.getElementById("risultato").innerText = "Accesso negato";
    }
}


document.getElementById('bottone').addEventListener('click', controllacredenziali);




async function loggatipandas() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password)
        return alert("Scrivi un nome e una password");

    const res = await fetch("/loginpandas", {  
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${username}&password=${password}`
    });

    const json = await res.json();

    if (json.messaggio == 1){
        document.getElementById("risultato").innerText = "Accesso effettuato";
    } else {
        document.getElementById("risultato").innerText = "Accesso negato";
    }
}
document.getElementById('bottonepandas')
    .addEventListener('click', loggatipandas);
    async function calcolaIMC() {
    const peso = document.getElementById('peso').value;
    const altezza = document.getElementById('altezza').value;

    if (!peso || !altezza)
        return alert("Inserisci peso e altezza");

    const res = await fetch("/imc", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            peso: peso,
            altezza: altezza
        })
    });

    const json = await res.json();

    if (json.imc) {
        document.getElementById("risultatoumano").innerText =
            "Il tuo IMC è: " + json.imc;
    } else {
        document.getElementById("risultatoumano").innerText =
            json.errore;
    }
}

// collega bottone
document.getElementById('bottoneimc')
    .addEventListener('click', calcolaIMC);