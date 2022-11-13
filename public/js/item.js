document.addEventListener('DOMContentLoaded', function() {
    var itemEl = document.getElementById('addItem');

    itemEl.addEventListener('click', () => {
        this.location.replace('/cost')
    });
  });

