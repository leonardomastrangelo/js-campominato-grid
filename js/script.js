// creo e chiamo una funzione che racchiude tutta la mia applicazione
myApp()
function myApp() {
    // catturo button in variabile
    const btn = document.querySelector("button");
    // metto il bottone in ascolto di un evento
    btn.addEventListener("click", generation);
    // creo la funzione che fa partire la generazione
    function generation() {
        // variabile = n quadrati da generare
        const numSquares = 100
        // catturo play-ground in variabile
        const playGround = document.getElementById("play-ground");
        // svuoto il play-ground come reset 
        playGround.innerHTML = ""
        // creo il ciclo per stampare i quadrati
        for (let i = 0; i < numSquares; i++) {
            // genero un quadrato tramite funzione che si ripeterà in base al numero totale di quadrati
            let square = drawSquare(numSquares,i);
            // appendo il quadrato nel playground
            playGround.append(square);
        }

        // DRAWING FUNCTION
        function drawSquare(totalSquares,index) {
            // creo il quadrato
            const squareEl = document.createElement("div");
            // aggiungo al quadrato la classe .square
            squareEl.classList.add("square");
            // decido quanto sarà grande il quadrato in base al numero totale di quadrati
            let squareWidth = Math.sqrt(numSquares);
            squareEl.style.width = `calc(100% / ${squareWidth})`
            squareEl.style.height =  squareEl.style.width 
            // inserisco il numero nel quadrato
            squareEl.innerHTML = index + 1 
            // aggiungo l'evento al click che fa cambiare il colore di sfondo del quadrato
            squareEl.addEventListener("click", function() {
                squareEl.classList.add("active")
            })
            return squareEl
        }

    }

}
