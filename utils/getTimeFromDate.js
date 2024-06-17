export function getTimeFromDate(dateInput) {
    const d = new Date(dateInput);
    const hrs = addLeadingZero(d.getHours());
    const mins = addLeadingZero(d.getMinutes());
    return `${hrs}:${mins}`;
}

function addLeadingZero(num) {
    return num < 10 ? '0' + num : num.toString();
}