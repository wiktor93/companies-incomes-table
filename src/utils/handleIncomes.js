const handleIncomes = (data) => {
  const incomes = data.incomes.sort((a, b) => {
    //descending sorting
    if (a.date > b.date) return -1;
    if (b.date > a.date) return 1;
    return 0;
  });

  const totalIncome = +incomes
    .reduce((prev, cur, i) =>
      i === 1 ? +prev.value + +cur.value : prev + +cur.value
    )
    .toFixed(2);

  const avgIncome = +(totalIncome / incomes.length).toFixed(2);

  const lastMonthIncomeArray = [];
  const lastIncomeMonth = incomes[0].date.slice(0, 7);

  //filter last month incomes
  for (const income of incomes) {
    if (income.date.slice(0, 7) < lastIncomeMonth) break;
    else lastMonthIncomeArray.push(income);
  }

  const lastMonthIncome = +lastMonthIncomeArray
    .map((income) => +income.value)
    .reduce((prev, cur) => prev + cur)
    .toFixed(2);

  return [totalIncome, avgIncome, lastMonthIncome];
};

export default handleIncomes;
