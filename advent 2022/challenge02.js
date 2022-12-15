function countHours(year, holidays) {

    const workDays = [1, 2, 3, 4, 5]
    let penalization = 0

    holidays.map(item => {
        const dayCount = new Date(item + '/' + year);
        const xtraTime = (element) => element === dayCount.getDay();
        workDays.some(xtraTime) && (penalization += 2)
    })

    return penalization
}

// Main Program
const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

countHours(year, holidays) // 2 días -> 4 horas extra en el año