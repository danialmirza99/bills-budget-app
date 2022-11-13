const fs = require("fs");

function pickdate() {
    $("#bill-due-date").datepicker({
        dateFormat: "yy/mm/dd"
    });
};

pickdate();

const addCostHandler = async (event) => {
    event.preventDefault();

    const newBill = document.querySelector('#bill-name').value.trim();
    const newAmount = document.querySelector('#bill-amount').value.trim();
    const newDueDate = document.querySelector('#bill-due-date').value.trim();

    if (newBill && newAmount && newDueDate) {
        const response = await fetch('/api/cost', {
            method: 'POST',
            body: JSON.stringify({ newBill, newAmount, newDueDate }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/cost');
        } else {
            alert(response.statusText);
        }
    }

    const item = {
        title: newBill,
        start: newDueDate
    }
    console.log(item);
    const data = JSON.stringify(item);
    fs.writeFile('../json/bills.json', data, err => {
        if (err) {
          throw err
        }
        console.log('JSON data is saved.')
      })
};


document
    .querySelector('.add-cost')
    .addEventListener('submit', addCostHandler);