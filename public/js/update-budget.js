const updateBudgethandler = async (event) => {
    event.preventDefault();

    const newBudget = documet.querySelector('#updateBudget').value.trim();

    if (newBudget) {
        const response = await fetch('/api/budget', {
            method: 'POST',
            body: JSON.stringify({ newBudget }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/budget');
        } else {
            alert(response.statusText);
        }
    }
};


document
.querySelector('.update-budget')
.addEventListener('submit', loginFormHandler);