let tempAr = []

let currentPaper = ""
let currentResearcher = ""

let displayTxt = ""

let pEl, rEl

function start() {

    if (localStorage.getItem("allPapers") === null) {
        localStorage.allPapers = JSON.stringify(["init"])
    }

    if (localStorage.getItem("allResearchers") === null) {
        localStorage.allResearchers = JSON.stringify(["init"])
    }
}

start()

let allPapers = JSON.parse(localStorage.allPapers)
let allResearchers = JSON.parse(localStorage.allResearchers)
updatePaperDisplay()
updateResearcherDisplay()

const savePaper = document.getElementById("save-paper-btn")

savePaper.addEventListener("click", function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        let paperName = document.getElementById("paperName-input")

        currentPaper = tabs[0].url
        console.log(currentPaper)

        console.log(allPapers)
        allPapers.push([currentPaper, paperName.value])
        console.log(allPapers)
    
        updatePaperDisplay()

        paperName.value = ""

    })

}) 

const saveResearcher = document.getElementById("save-researcher-btn")

saveResearcher.addEventListener("click", function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        let resName = document.getElementById("resName-input")
        console.log(resName.value)

        currentResearcher = tabs[0].url
        console.log(currentResearcher)

        console.log(allResearchers)
        allResearchers.push([currentResearcher, resName.value])
        console.log(allResearchers)
    
        updateResearcherDisplay()

        paperName.value = ""

    })

})

const removePaper = document.getElementById("remove-paper-btn")

removePaper.addEventListener("click", function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        currentPaper = tabs[0].url

        for (let i = 0; i < allPapers.length; i++) {
            if (currentPaper === allPapers[i][0]) {

                console.log(allPapers[i][0])
    
                continue
    
            } else {
                tempAr.push(allPapers[i])
            }
        }
    
        allPapers = tempAr
        tempAr = []
    
        updatePaperDisplay()

    })

})

const removeResearcher = document.getElementById("remove-researcher-btn")

removeResearcher.addEventListener("click", function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        currentResearcher = tabs[0].url

        for (let i = 0; i < allResearchers.length; i++) {
            if (currentResearcher === allResearchers[i][0]) {
    
                continue
    
            } else {
                tempAr.push(allResearchers[i])
            }
        }
    
        allResearchers = tempAr
        tempAr = []
    
        updateResearcherDisplay()

    })

})

function updatePaperDisplay() {

    for (let i = 0; i < allPapers.length; i++) {

        pEl = allPapers[i]

        if (pEl[1] === "") { // if no name entered, set name to url
            allPapers[i][1] = pEl[0]
        }

        pEl = allPapers[i] // update pEl

        displayTxt += `
            <li>
                <a target='_blank' href='${pEl[0]}'>
                    ${pEl[1]}
                </a>
            </li>`

    }

    document.getElementById("display-papers").innerHTML = "Papers To Read\n" + displayTxt

    // update local storage
    localStorage.allPapers = JSON.stringify(allPapers)

    displayTxt = ""

}

function updateResearcherDisplay() {

    for (let i = 0; i < allResearchers.length; i++) {

        rEl = allResearchers[i]

        if (rEl[1] === "") { // if no name entered, set name to url
            allResearchers[i][1] = rEl[0]
        }

        rEl = allResearchers[i] // update rEl

        displayTxt += `
            <li>
                <a target='_blank' href='${rEl[0]}'>
                    ${rEl[1]}
                </a>
            </li>`
    }

    document.getElementById("display-researchers").innerHTML = "Researchers You Follow\n" + displayTxt

    // update local storage
    localStorage.allResearchers = JSON.stringify(allResearchers)

    displayTxt = ""

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

// TODOs
// save current tab rather than having to input URL!