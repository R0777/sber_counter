function startTimer() {
  timer = setInterval(function () {
    $("#milisec").text(milisec);
    milisec++;
    if (milisec == 100) {
      milisec = 0;
      sec++;
      $("#sec").text(sec);
    }
    if (sec == 60) {
      sec = 0;
      min++;
      $("#min").text(min);
    }
  }, 100);
}

$("#stop").click(function () {
  clearInterval(timer);
})
$("#cliear").click(function () {
  $("#milisec, #sec, #min ").text("0");
  milisec = 0;
  sec = 0;
  min = 0;
})