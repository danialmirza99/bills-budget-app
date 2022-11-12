const costMonthFormHandler = async (event) => {
    event.preventDefault();

    var month = document.getElementById("cost-months").value;
    document.location.replace(`/profile/month/${month}`)
};

document
    .querySelector('.profile-cost-month')
    .addEventListener('submit', costMonthFormHandler);