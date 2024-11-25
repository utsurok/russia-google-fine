export const calcFineByDays = days => {
  const days_bi = BigInt(days);

  const weeks = (days_bi - 1n) / 7n;
  const dayOfWeek = ((days_bi - 1n) % 7n) + 1n; // 1-7

  const unit = 100000n;

  const twoPowWeeks = 2n ** weeks;

  const todayFine = twoPowWeeks * unit;
  const totalFine = unit * ((twoPowWeeks - 1n) * 7n + twoPowWeeks * dayOfWeek);

  return {
    todayFine,
    totalFine,
  };
};

export const calcDaysByUnixTime = unixTime => {
  const startDate = 1668891600; // 20 Nov 2022 00:00:00 +0300 (MSK)
  const days = Math.trunc((unixTime - startDate) / 86400) + 1;
  return days;
};
