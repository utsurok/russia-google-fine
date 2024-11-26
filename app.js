import { calcFineByDays, calcDaysByUnixTime } from "./calculate-fine.js";

const elements = {
  todayFine: document.getElementById("todayFine"),
  totalFine: document.getElementById("totalFine"),
};

const currentUnixTime = Math.trunc(Date.now() / 1000);

const days = calcDaysByUnixTime(currentUnixTime);

const { todayFine, totalFine } = calcFineByDays(days);

const formatFine = n =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",\u200B");

elements.totalFine.textContent = formatFine(totalFine);
elements.todayFine.textContent = formatFine(todayFine);
