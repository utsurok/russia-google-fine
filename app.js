import { calcFineByDays, calcDaysByUnixTime } from "./calculate-fine.js";

const elements = {
  todayFine: document.getElementById("todayFine"),
  totalFine: document.getElementById("totalFine"),
};

const currentUnixTime = Date.now() / 1000;

const days = calcDaysByUnixTime(currentUnixTime);

const { todayFine, totalFine } = calcFineByDays(days);

const numberFormat = n =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",\u200B");

elements.totalFine.textContent = numberFormat(totalFine);
elements.todayFine.textContent = numberFormat(todayFine);
