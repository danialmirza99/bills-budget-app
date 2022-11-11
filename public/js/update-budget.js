
const updateBudgetHandler = async (event) => {
    event.preventDefault();

    const newBudget = document.querySelector('#updateBudget').value.trim();

    if (newBudget) {
        const response = await fetch('/api/budget', {
            method: 'POST',
            body: JSON.stringify({ newBudget }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/api/budget');
        } else {
            alert(response.statusText);
        }
    }
};


document
.querySelector('.update-budget')
.addEventListener('submit', updateBudgetHandler);