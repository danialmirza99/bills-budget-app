module.exports = {
    sum: (arr) => {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += parseFloat(arr[i]);
        }
        return total;
    },

    findAmounts: (index, arr) => {
        const amounts = [];
        for (let i = 0; i < index.length; i++) {
            amounts.push(arr[index[i]])
        }
        return amounts
    },

    getIndex: (arr, yr, m) => {
        const indexes = [];
        for (let i = 0; i < arr.length; i++) {
            const itemYear = arr[i][0];
            const itemMonth = arr[i][1];
            if (itemYear == yr && itemMonth == m) {
                indexes.push(i)
            }
        }
        return indexes;
    }
}