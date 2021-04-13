const months = ["январь", "февраль", "март"];

const now = new Date();

const currentMonth = months[now.getMonth()];

module.exports = currentMonth;