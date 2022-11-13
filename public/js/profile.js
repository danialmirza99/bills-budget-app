const costMonthFormHandler = async (event) => {
    event.preventDefault();

    var month = document.getElementById("cost-months").value;
    document.location.replace(`/profile/month/${month}`)
};

const viewYear = async (event) => {
    document.location.replace(`/profile/year`)
};

const viewPrevYear = async (event) => {
    document.location.replace(`/profile/year/prev`)
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