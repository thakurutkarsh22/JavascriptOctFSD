let count = 0;
function calcTotal() {

    console.log("count", count)

    const table = document.querySelector("tbody");
    console.dir(table)

    // deletion of the grand totoal
    if(count > 0) {
        const childrenOfTable = table.children;
        const lastChild = childrenOfTable[childrenOfTable.length - 1]

        table.removeChild(lastChild)
        // console.log(childrenOfTable)
    }


    const pricesList = document.querySelectorAll('[data-ns-test=price]')

    
    let sum = 0;

    for (let  i=0; i<pricesList.length ;i++) {
        const td = pricesList[i];
        sum += parseInt(td.textContent)
    }


    // now we add 

    const tableRow = document.createElement("tr");
    const tableDataGrandTotal = document.createElement("td");
    const tableDataPrice = document.createElement("td");

    tableDataGrandTotal.textContent = "Grand Total";
    
    tableDataPrice.setAttribute('data-ns-test', 'grandTotal')
    tableDataPrice.textContent = sum;

    tableRow.appendChild(tableDataGrandTotal);
    tableRow.appendChild(tableDataPrice);


    // add table row inside the table

    table.appendChild(tableRow);


    count++;


}