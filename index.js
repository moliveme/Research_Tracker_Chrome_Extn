let allPapers = []
let allResearchers = []
let tempAr = []

let currentPaper = ""
let currentResearcher = ""

let displayTxt = ""

function savePaper() {

    currentPaper = document.getElementById("input-el").value

    if (currentPaper !== "") {
        allPapers.push(currentPaper)
    }

    updatePaperDisplay()

}

function removePaper() {

    currentPaper = document.getElementById("input-el").value

    for (let i = 0; i < allPapers.length; i++) {
        if (currentPaper === allPapers[i]) {

            continue

        } else {
            tempAr.push(allPapers[i])
        }
    }

    allPapers = tempAr
    tempAr = []

    updatePaperDisplay()

}

function saveResearcher() {

    currentResearcher = document.getElementById("input-el").value

    if (currentResearcher !== "") {
        allResearchers.push(currentResearcher)
    }

    updateResearcherDisplay()

}

function removeResearcher() {

    currentResearcher = document.getElementById("input-el").value

    for (let i = 0; i < allResearchers.length; i++) {
        if (currentResearcher === allResearchers[i]) {

            continue

        } else {
            tempAr.push(allResearchers[i])
        }
    }

    allResearchers = tempAr
    tempAr = []

    updateResearcherDisplay()

}

function updatePaperDisplay() {

    allPapers.forEach((pEl) => {

        displayTxt += `
        <li>
            <a target='_blank' href='${pEl}'>
                ${pEl}
            </a>
        </li>`

    });

    document.getElementById("display-papers").innerHTML = "Papers To Read\n" + displayTxt

    displayTxt = ""

    //clear out input field
    document.getElementById("input-el").value = ""

}

function updateResearcherDisplay() {

    allResearchers.forEach((rEl) => {

        displayTxt += `
        <li>
            <a target='_blank' href='${rEl}'>
                ${rEl}
            </a>
        </li>`

    });

    document.getElementById("display-researchers").innerHTML = "Researchers You Follow\n" + displayTxt

    displayTxt = ""

    //clear out input field
    document.getElementById("input-el").value = ""

}

function deleteAll() {
    allLinks = []
    updateDisplay()
}

// can use event listeners instead of onclick and 
// function call
// const can also be used to define vars instead of let
// but const vars' value cannot be reassigned: so
// ...it tells the user/programmer that a variable doesn't
// chang in the program