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
    // timer for numbers' disappearance
    const timeToDisappeare = 3 * 1000;
    // caputing in variable the div in which i print the generated numbers
    const rndNumPrint = document.getElementById("rnd-number")
    // capturing variables from imput
    let num1 = document.getElementById("num-1").value;
    let num2 = document.getElementById("num-2").value;
    let num3 = document.getElementById("num-3").value;
    let num4 = document.getElementById("num-4").value;
    let num5 = document.getElementById("num-5").value;

    /**
     * EXECUTION
    */
    
    // pushing 5 rnd numbers in array
    while (generatedRndNumbers.length < maxRndNumbers ) {
        // singular rnd number
        let rndNumber = getRndInteger(1,100);
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
    
    // disappereance phase
    setTimeout(disappearance, timeToDisappeare)
    function disappearance() {
        rndNumPrint.classList.add("d-none")
    }
    console.log(rndNumPrint);
}