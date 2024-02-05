
function groupDataByYear(data) {
    const yearGroups = {};
    const uniqueYears = [];

    data.forEach(row => {
        const dateParts = row.date.split("-");
        const year = dateParts[0];

        if (!yearGroups[year]) {
            yearGroups[year] = [];
        }

        yearGroups[year].push(row);
    });

    let groupedData = Object.entries(yearGroups).map(([year, rows]) => {
        return { year, rows };
    });

    const singleYearRows = Object.entries(yearGroups).filter(([year, rows]) => rows.length === 1).map(([year, rows]) => rows[0]);
    if(singleYearRows.length === data.length) {
        return data;
    }
    if (singleYearRows.length > 0) {
        uniqueYears.push(...singleYearRows);
        groupedData = groupedData.filter(group => group.rows.length !== 1);
        groupedData.push({ year: 'Unique Years', rows: uniqueYears });
    }

    return groupedData;
}

module.exports = groupDataByYear;