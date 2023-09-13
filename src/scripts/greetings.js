const today = new Date();
const minute = today.getMinutes();
const second = today.getSeconds();
const day = today.getDay();
const greetingsSpan = document.querySelector(".greetings");
const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(`WELCOME ON ${today}`);

let hour = today.getHours();
let prepand;
let emoji = document.querySelector(".timeEmoji");

console.log(greetingsSpan);

if (hour <= 11) {
  greetingsSpan.innerHTML = `${dayList[day]} Morning `;
  emoji.innerHTML = "&#9749";
} else if (hour >= 12 && hour <= 17) {
  greetingsSpan.innerHTML = `${dayList[day]} Afternoon `;
  emoji.innerHTML = "&#127780";
} else {
  greetingsSpan.innerHTML = `${dayList[day]} Evening `;
  emoji.innerHTML = "&#127771";
}
