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

    displayTxt = ""

    allPapers.forEach((pEl) => {

        displayTxt += "\n" + <a href="google.com">hey</a>

    });

    document.getElementById("display-papers").innerText = "Papers To Read\n" + displayTxt

}

function updateResearcherDisplay() {

    displayTxt = ""

    allResearchers.forEach((rEl) => {

        displayTxt += "\n" + rEl

    });

    document.getElementById("display-researchers").innerText = "Researchers You Follow\n" + displayTxt

}

function deleteAll() {
    allLinks = []
    updateDisplay()
}