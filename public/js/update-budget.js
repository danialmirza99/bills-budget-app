
const updateBudgetHandler = async (event) => {
    event.preventDefault();

    const budget_limit = document.querySelector('#updateBudget').value.trim();

    if (budget_limit) {
        const response = await fetch('/api/budget', {
            method: 'PUT',
            body: JSON.stringify({ budget_limit }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/budget');
        } else {
            alert(response.statusText);
        }
    }
};


// const addBudgetHandler = async (event) => {
//     event.preventDefault();

//     const newBudget = document.querySelector('#addBudget').value.trim();

//     if (newBudget) {
//         const response = await fetch('/api/budget', {
//             method: 'POST',
//             body: JSON.stringify({ newBudget }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             document.location.replace('/budget');
//         } else {
//             alert(response.statusText);
//         }
//     }
// };


document
.querySelector('.update-budget')
.addEventListener('click', updateBudgetHandler);

// document
// .querySelector('.add-budget')
// .addEventListener('click', addBudgetHandler);