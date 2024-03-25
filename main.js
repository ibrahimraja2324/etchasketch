const container = document.getElementById("container")

for (let i = 0; i < 16; i++) {
    const columns = document.createElement("div")
    columns.className = "column"
    container.appendChild(columns)
}

const allColumns = document.querySelectorAll("div.column")

for (let i = 0; i < allColumns.length; i++) {
    for (let i = 0; i < 16; i++) {
        const rows = document.createElement("div")
        rows.className = "rows"
        
        allColumns[i].appendChild(rows)
    }
}

const btn = document.getElementById("customiseGrid")

function acceptInput() {
    let userInput = prompt("enter a number from 1-100: ")
    if(userInput > 100 || userInput < 1) {
        acceptInput()
    } else {
        let removeElements = document.querySelectorAll(".rows")
        for (let i = 0; i < removeElements.length; i++) {
            removeElements[i].remove()
        }
        let removeElementsCol = document.querySelectorAll(".column")
        for (let i = 0; i < removeElementsCol.length; i++) {
            removeElementsCol[i].remove()
        }

        for (let i = 0; i < userInput; i++) {
            const columns = document.createElement("div")
            columns.className = "column"
            container.appendChild(columns)
        }
        
        const allColumns = document.querySelectorAll("div.column")
        
        for (let i = 0; i < allColumns.length; i++) {
            for (let i = 0; i < userInput; i++) {
                const rows = document.createElement("div")
                rows.className = "rows"
                allColumns[i].appendChild(rows)
            }
        }
    }
}

btn.addEventListener("click", acceptInput )
