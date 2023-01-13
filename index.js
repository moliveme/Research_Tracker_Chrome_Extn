let allPapers = []
let allResearchers = []
let tempAr = []

let currentPaper = ""
let currentResearcher = ""

let displayTxt = ""

const savePaper = document.getElementById("save-paper-btn")

savePaper.addEventListener("click", function() {

    currentPaper = document.getElementById("input-el").value

    if (currentPaper !== "") {
        allPapers.push(currentPaper)
    }

    updatePaperDisplay()

}) 

const saveResearcher = document.getElementById("save-researcher-btn")

saveResearcher.addEventListener("click", function() {

    currentResearcher = document.getElementById("input-el").value

    if (currentResearcher !== "") {
        allResearchers.push(currentResearcher)
    }

    updateResearcherDisplay()

})

const removePaper = document.getElementById("remove-paper-btn")

removePaper.addEventListener("click", function() {

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

})

const removeResearcher = document.getElementById("remove-researcher-btn")

removeResearcher.addEventListener("click", function() {

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

})

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

const removeAll = document.getElementById("remove-all-btn")

removeAll.addEventListener("click", function() {

    allPapers = []
    allResearchers = []
    updatePaperDisplay()
    updateResearcherDisplay()
    
})

// can use event listeners instead of onclick and 
// function call
// const can also be used to define vars instead of let
// but const vars' value cannot be reassigned: so
// ...it tells the user/programmer that a variable doesn't
// chang in the program