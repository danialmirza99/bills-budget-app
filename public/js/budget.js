document.addEventListener('DOMContentLoaded', function() {
    var budgetEl = document.getElementById('updateBudget');

    budgetEl.addEventListener('click', () => {
        this.location.replace('/profile')
    });
  });

