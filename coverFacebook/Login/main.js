function openLoginAccount(event) {
  if (event) {
    document.querySelector(".bg-modal").style.display = "block";
  } else {
    document.querySelector(".bg-modal").style.display = "none";
  }
}

openTooltip = (event) => {
  document.querySelector(".tooltip").style.display = "block";
};
closeTooltip = (event) => {
  document.querySelector(".tooltip").style.display = "none";
};
