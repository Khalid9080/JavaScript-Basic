

function calculateTax(income, expenses) {
    if (0 > income || 0 > expenses || expenses > income) {
        return 'Invalid Input'
    }

    if (income >= expenses) {
        let incomeExpensesDiff = income - expenses
        let calculatedTax = incomeExpensesDiff * 0.20
        return calculatedTax
    }


}

function createNotification(email) {

    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }

    const portion = email.split('@');

    if (portion[0] === "" || portion[1] === "") {
        return "Invalid Email";
    }
    const username = portion[0];
    const domainName = portion[1];

    return username + " sent you an email from " + domainName;
}



function checkDigitsInName(name) {

    if (typeof name !== 'string') {
        return 'Invalid Input';
    }


    for (let i = 0; i < name.length; i++) {

        if (!isNaN(name[i])) {
            return true;
        }
    }


    return false;
}



function calculateFinalScore(obj) {

    if (typeof obj !== 'object') {
        return "Invalid Input";
    }

    let finalScore = obj.testScore + obj.schoolGrade;


    if (obj.isFFamily === true) {
        finalScore = finalScore + 20;
    }


    return finalScore >= 80;
}





function waitingTime(waitingTimes, serialNumber) {
   
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    let beforeIsrat = serialNumber - 1;
    let FininshedViva = waitingTimes.length;

    let time = 0; 
    for (let i = 0; i < waitingTimes.length; i++) {
        time = time + waitingTimes[i]; 
    }
    let avgtime = Math.round(time / FininshedViva);
    let remainViva = beforeIsrat - FininshedViva;

    let totalTime = remainViva * avgtime;

    return totalTime;
}