const name = "Александр";
console.log(name);

const managers = ["Иван", "Олег", "Мефистофель"];
const admins = ["Александр", "Фауст", "Мона Лиза"];

exports.admins = admins;
exports.managers = managers;

module.exports = {
    admins, managers
}
