"use strict"
myApp()
function myApp() {

    /**
     * DATA
    */
    // random numbers to generate
    const maxRndNumbers = 5;
    // min
    const min = 1;
    // max 
    const max = 100;
    // array where to push random generated numbers
    const generatedRndNumbers = []
    // array of numbers inserted in input by user
    const insertedNumbers = []
    // array of corrected selected number
    const gotRight = []
    // timer for numbers' disappearance
    const timeToDisappeare = 3 * 1000;
    // caputing in variable the div in which i print the generated numbers
    const rndNumPrint = document.getElementById("rnd-number");
    // capturing container which hosts input tag
    const containerData = document.getElementById("input-data");
    // taking button from HTML
    const btn = document.querySelector(".btn-success")
    // taking the div where i print results
    const result = document.getElementById("result")
    // declaring score 
    let score = 0;
    // initializing the message
    let msg = ""
    // initializing gameOver situation
    let gameOver = false;
    // taking restart btn
    const btnRestart = document.querySelector(".btn-info");
    /**
     * EXECUTION
    */

    // pushing 5 rnd numbers in array
    while (generatedRndNumbers.length < maxRndNumbers) {
        // singular rnd number
        let rndNumber = getRndInteger(min, max);
        if (!generatedRndNumbers.includes(rndNumber)) {
            generatedRndNumbers.push(rndNumber)
        }
    }

    // printing rnd numbers in HTML
    for (let i = 0; i < generatedRndNumbers.length; i++) {
        const element = generatedRndNumbers[i];
        rndNumPrint.innerHTML +=
            `
        <div class="col-4 text-center display-2 py-5">${element}</div>
        `
    }

    // start game phase
    setTimeout(startGame, timeToDisappeare)
    function startGame() {
        rndNumPrint.classList.add("d-none")
        containerData.classList.remove("d-none")
    }

    // on click pushing inserted numbers in array
    btn.addEventListener("click", pushUserNum, {once : true})
    function pushUserNum() {
        // capturing variables from imput
        let num1 = document.getElementById("num-1").value;
        let num2 = document.getElementById("num-2").value;
        let num3 = document.getElementById("num-3").value;
        let num4 = document.getElementById("num-4").value;
        let num5 = document.getElementById("num-5").value;
        insertedNumbers.push(num1, num2, num3, num4, num5)

        // checking if every num inserted by user is included in rnd number's array
        for (let i = 0; i < generatedRndNumbers.length; i++) {
            const element = insertedNumbers[i];
            if (generatedRndNumbers.includes(parseInt(element))) {
                score++
                gotRight.push(element)
            } else {
                gameOver = true;
            }
        }

        // msg printing
        msg = (gameOver === true) ? "Non ci sei riuscito del tutto" : "Ottima Memoria"

        // printing in console results
        console.log(msg);
        console.log("numeri da indovinare:",generatedRndNumbers);
        console.log("numeri indovinati:",score);
        console.log("quali numeri indovinati:",gotRight);

        // printing in HTML results
        result.innerHTML = 
        `
        <div class="row d-flex justify-content-center align-items-center text-center">
            <div class="col">
                <h3 class="display-3 fw-bold py-4">${msg}</h3>
                <div class="fs-2 fw-bold">Numeri da indovinare</div>
                ${generatedRndNumbers}
                <div class="fs-2 fw-bold mt-5">Score</div>
                ${score}
                <div class="fs-2 fw-bold mt-5 pb-4">Quali numeri hai indovinato</div>
                ${gotRight}
            </div>
        </div>
        `

        // // appearance restart button
        // setTimeout(restartTimer, 3000)
        // function restartTimer() {
        //     btnRestart.classList.remove("d-none")
        // }
        // // restart the app
        // btnRestart.addEventListener("click", ()=> {
        //     myApp

        // })
    }

}