const { DataTypes } = require("sequelize");

module.exports = {
    sum: (arr) => {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += parseFloat(arr[i]);
        }
        return total;
    },

    useIndex: (index, arr) => {
        const amounts = [];
        for (let i = 0; i < index.length; i++) {
            amounts.push(arr[index[i]])
        }
        return amounts
    },

    indexMatchYearMonth: (arr, yr, m) => {
        const indexes = [];
        for (let i = 0; i < arr.length; i++) {
            const itemYear = arr[i][0];
            const itemMonth = arr[i][1];
            if (itemYear == yr && itemMonth == m) {
                indexes.push(i)
            }
        }
        return indexes;
    },

    indexMatchYear: (arr, yr) => {
        const indexes = [];
        for (let i = 0; i < arr.length; i++) {
            const itemYear = arr[i][0];
            if (itemYear == yr ) {
                indexes.push(i)
            }
        }
        return indexes;
    },

    arrDates: (arr) => {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i].split('/'));
        }
        return newArr;
    },

    formatDates: (arr) => {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i].replaceAll("/", "-"));
        }
        return newArr;
    },

    getMonthName: (month) => {
        const date = new Date();
        date.setMonth(month - 1);

        return date.toLocaleString('en-US', {
            month: 'long',
        });
    }
}