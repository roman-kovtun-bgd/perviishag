let money = prompt("Ваш бюджет на месяц?", "20000");

let time = prompt("Введите дату в формате YYYY-MM-DD", "01-01-2019");

let q1_1 = prompt("Введите обязательную статью расходов в этом месяце", "");

let q1_2 = prompt("Во сколько обойдется?", "");

let q2_1 = prompt("Введите обязательную статью расходов в этом месяце", "");

let q2_2 = prompt("Во сколько обойдется?", "");

let appDate = {
	budget: money,
	timeData: time,
	expenses:{q1_1:q1_2,q2_1:q2_2},
	optionalExpenses:{},
	income: [],
	savings: false
};
alert("Бюджет на 1 день: " + money/30);

