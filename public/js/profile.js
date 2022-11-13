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

document
    .querySelector('.profile-cost-month')
    .addEventListener('submit', costMonthFormHandler);

document
    .querySelector('#year-btn')
    .addEventListener('click', viewYear);

document
    .querySelector('#prev-year-btn')
    .addEventListener('click', viewPrevYear);