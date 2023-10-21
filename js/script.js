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
    let generatedRndNumbers = []
    // array of numbers inserted in input by user
    let insertedNumbers = []
    // array of corrected selected number
    let gotRight = []
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
    pushRndToArray()
    function pushRndToArray() {
        while (generatedRndNumbers.length < maxRndNumbers) {
            // singular rnd number
            let rndNumber = getRndInteger(min, max);
            if (!generatedRndNumbers.includes(rndNumber)) {
                generatedRndNumbers.push(rndNumber)
            }
        }
    }

    // printing rnd numbers in HTML
    printRndHtml()
    function printRndHtml() {
        for (let i = 0; i < generatedRndNumbers.length; i++) {
            const element = generatedRndNumbers[i];
            rndNumPrint.innerHTML +=
                `
            <div class="col-4 text-center display-2 py-5">${element}</div>
            `
        }
        // win/loss control
        console.log(generatedRndNumbers);
    }

    // start game phase
    setTimeout(startGame, timeToDisappeare)
    function startGame() {
        rndNumPrint.classList.add("d-none")
        containerData.classList.remove("d-none")
        containerData.classList.add("d-flex")
    }

    /**
     * MAIN ALGORITHM OF MYAPP
     */
    btn.addEventListener("click", pushUserNum, { once: true })
    function pushUserNum() {
        // capturing variables from imput
        let num1 = document.getElementById("num-1").value;
        let num2 = document.getElementById("num-2").value;
        let num3 = document.getElementById("num-3").value;
        let num4 = document.getElementById("num-4").value;
        let num5 = document.getElementById("num-5").value;
        insertedNumbers.push(num1, num2, num3, num4, num5)

        // checking if every num inserted by user is included in rnd number's array
        check()
        function check() {
            for (let i = 0; i < generatedRndNumbers.length; i++) {
                const element = insertedNumbers[i];
                if (generatedRndNumbers.includes(parseInt(element))) {
                    score++
                    gotRight.push(element)
                } else {
                    gameOver = true;
                }
            }
        }

        // msg printing
        msgPrinting()
        function msgPrinting() {
            msg = (gameOver === true) ? "Ma ci vedi?" : "Ottima Memoria"
        }

        // printing in console results
        consoleResultPrint()
        function consoleResultPrint() {
            console.log(msg);
            console.log("numeri da indovinare:", generatedRndNumbers);
            console.log("numeri indovinati:", score);
            console.log("quali numeri indovinati:", gotRight);
        }

        // printing in HTML results
        htmlResultPrint()
        function htmlResultPrint() {
            if (gotRight.length === 0) {
                gotRight.push("Non ci siamo proprio...")
            }
            result.innerHTML =
                `
            <div class="row d-flex justify-content-center align-items-center text-center py-5">
                <div class="col">
                    <h3 class="display-3 fw-bold pb-4">${msg}</h3>
                    <div class="fs-2 fw-bold">Numeri da indovinare</div>
                    ${generatedRndNumbers}
                    <div class="fs-2 fw-bold mt-5">Score</div>
                    ${score}
                    <div class="fs-2 fw-bold mt-5">Quali numeri hai indovinato</div>
                    ${gotRight}
                </div>
            </div>
            `
        }

        // appearance restart button
        setTimeout(restartTimer, 3000)
        function restartTimer() {
            btnRestart.classList.remove("d-none")
        }

        // restart the app
        btnRestart.addEventListener("click", restart)
        function restart() {
            location.reload()
        }
    }


}