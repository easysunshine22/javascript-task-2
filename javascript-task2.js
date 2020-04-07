const data = [
    {
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }
];

const interestCalculator = (arr) => {
    let interest = [];
    let interestRate = [];
    let rate;
    for (let r = 0; r < data.length; r++) {
        if (arr[r].principal >= 2500 && arr[r].time > 1 && arr[r].time < 3) {
            rate = 3;
            interest.push((arr[r].principal * rate * arr[r].time) / 100);
            interestRate.push({ principal: arr[r].principal, rate: rate, time: arr[r].time, interest: interest[r] });
        } else if (arr[r].principal >= 2500 && arr[r].time >= 3) {
            rate = 4;
            interest.push((arr[r].principal * rate * arr[r].time) / 100);
            interestRate.push({ principal: arr[r].principal, rate: rate, time: arr[r].time, interest: interest[r] });
        } else if (arr[r].principal < 2500 || arr[r].time <= 1) {
            rate = 2;
            interest.push((arr[r].principal * rate * arr[r].time) / 100);
            interestRate.push({ principal: arr[r].principal, rate: rate, time: arr[r].time, interest: interest[r] });
        } else {
            rate = 1;
            interest.push((arr[r].principal * rate * arr[r].time) / 100);
            interestRate.push({ principal: arr[r].principal, rate: rate, time: arr[r].time, interest: interest[r] });
        }
    };
    console.log(interestRate);
    return interestRate;
};

interestCalculator(data);