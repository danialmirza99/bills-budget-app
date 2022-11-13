const costMonthFormHandler = async (event) => {
    event.preventDefault();

    var month = document.getElementById("cost-months").value;
    document.location.replace(`/profile/month/${month}`)
};

const viewYear = async () => {
    let today = new Date();
    let year = today.getFullYear();
    document.location.replace(`/profile/year/${year}`)
};

const viewPrevYear = async () => {
    let today = new Date();
    let year = today.getFullYear();
    let prevYear = year-1
    document.location.replace(`/profile/year/${prevYear}`)
};

const addBudgetHandler = async (event) => {
    event.preventDefault();

    const budget_limit = document.querySelector('#addBudget').value.trim();

    if (budget_limit) {
        const response = await fetch('/api/budget', {
            method: 'POST',
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

document
    .querySelector('.profile-cost-month')
    .addEventListener('submit', costMonthFormHandler);

document
    .querySelector('#year-btn')
    .addEventListener('click', viewYear);

document
    .querySelector('#prev-year-btn')
    .addEventListener('click', viewPrevYear);

    
document
.querySelector('.add-budget')
.addEventListener('click', addBudgetHandler);