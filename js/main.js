$(document).ready(function () {
  var timer2 = "20:00";
  var interval = setInterval(function () {
    var timer = timer2.split(":");
    var minutos = parseInt(timer[0], 10);
    var segundos = parseInt(timer[1], 10);
    --segundos;
    minutos = segundos < 0 ? --minutos : minutos;
    segundos = segundos < 0 ? 59 : segundos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    $(".min").html(minutos);
    $(".seg").html(segundos);
    $(".countdown").html(minutos + ":" + segundos);
    if (minutos < 0) clearInterval(interval);
    //check if both minutos and segundos are 0
    if (segundos <= 0 && minutos <= 0) clearInterval(interval);
    timer2 = minutos + ":" + segundos;
  }, 1000);
});
