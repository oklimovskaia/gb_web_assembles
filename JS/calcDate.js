import {
    renderOutput
} from "./output.js";

import getDatesDiff from "./getDateDiff.js";


const form = document.getElementById("dateCalc");

form.onsubmit = (event) => {

    event.preventDefault();

    let {
        firstDate,
        secondDate
    } = event.target.elements;

    const firstDateValue = firstDate.value;
    const secondDateValue = secondDate.value;

    if (!firstDateValue || !secondDateValue) {
        renderOutput("Необходимо ввести 2 даты");
        return;
    }

    const datesDiff = getDatesDiff(firstDateValue, secondDateValue)

    renderOutput(`
    Лет: ${datesDiff.years}
    Месяцев: ${datesDiff.months}
    Дней: ${datesDiff.days}
    `)

};