let dailyButton = document.getElementById("dailyOption");
let weeklyButton = document.getElementById("weeklyOption");
let monthlyButton = document.getElementById("monthlyOption");

let dailyInfo = document.getElementsByClassName("daily");
let weeklyInfo = document.getElementsByClassName("weekly");
let monthlyInfo = document.getElementsByClassName("monthly");

let length = dailyInfo.length;

for (let i = 0; i < length; i++) {
  weeklyInfo[i].classList.add("hide");
  monthlyInfo[i].classList.add("hide");
}

dailyButton.style.color = "white";

weeklyButton.onclick = () => {
  weeklyButton.style.color = "white";
  dailyButton.style.color = "";
  monthlyButton.style.color = "";

  for (let i = 0; i < length; i++) {
    weeklyInfo[i].classList.add("show");
    dailyInfo[i].classList.add("hide");
    monthlyInfo[i].classList.add("hide");

    weeklyInfo[i].classList.remove("hide");
    dailyInfo[i].classList.remove("show");
    monthlyInfo[i].classList.remove("show");
  }
};

dailyButton.onclick = () => {
  dailyButton.style.color = "white";
  weeklyButton.style.color = "";
  monthlyButton.style.color = "";
  for (let i = 0; i < length; i++) {
    dailyInfo[i].classList.add("show");
    weeklyInfo[i].classList.add("hide");
    monthlyInfo[i].classList.add("hide");

    dailyInfo[i].classList.remove("hide");
    weeklyInfo[i].classList.remove("show");
    monthlyInfo[i].classList.remove("show");
  }
};

monthlyButton.onclick = () => {
  monthlyButton.style.color = "white";
  weeklyButton.style.color = "";
  dailyButton.style.color = "";
  for (let i = 0; i < length; i++) {
    monthlyInfo[i].classList.add("show");
    dailyInfo[i].classList.add("hide");
    weeklyInfo[i].classList.add("hide");

    monthlyInfo[i].classList.remove("hide");
    dailyInfo[i].classList.remove("show");
    weeklyInfo[i].classList.remove("show");
  }
};
