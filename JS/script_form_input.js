//script input type booton
function msg() {
  alert("Halo Imam Arifin");
}

//script input type password
function fungsiPass() {
  var Tampass = document.getElementById("passSaya").value;
  document.getElementById("Tampilpass").innerHTML = Tampass;
}

//script input type range
function fungsiRange() {
  var Tamrange = document.getElementById("rangeSaya").value;
  document.getElementById("Tampilrange").innerHTML = Tamrange;
}

//script input type radio
function fungsiRadio() {
  var fungra = document.getElementById("Pria");
  fungra.checked = true;
}

function fungsiRadio2() {
  var fungra2 = document.getElementById("Wanita");
  fungra2.checked = true;
}

//script input type reset
function myFunction() {
  var x = document.getElementById("myReset").value;
  document.getElementById("demo").innerHTML = x;
}

//script input type reset
function fungsiPass1() {
  var Tampass1 = document.getElementById("passSaya1").value;
  document.getElementById("Tampilpass1").innerHTML = Tampass1;
}

function resetPassword() {
  document.getElementById("passSaya1").value = "";
}

//script input type search
function fungsiSearch() {
  var Fungser = document.getElementById("search").placeholder;
  document.getElementById("demoser").innerHTML = Fungser;
}

//script input type submi
function fungsiSubmit() {
  var Tampsubmit = document.getElementById("submitSaya").value;
  var Tampsubmit1 = document.getElementById("submitSaya1").value;
  const outputStr = "Username: " + Tampsubmit1 + "<br>Password: " + Tampsubmit;
  document.getElementById("Tampilsubmit").innerHTML = outputStr;
}

//script input type text
function fungsiText() {
  var Text = document.getElementById("myText").value;
  document.getElementById("demotext").innerHTML = Text;
}

//script input type time
function waktuSekolah() {
  var sekolah = document.getElementById("waktusekolah").value;
  document.getElementById("Lihatjam").innerText = "Jam : " + sekolah;
}

//script input type url
function fungsiUrlweb() {
  var url = document.getElementById("urlweb").value;

  if (isValidURL(url)) {
    window.location.href = url;
  } else {
    alert("URL tidak valid!");
  }
}

function isValidURL(url) {
  // Gunakan ekspresi reguler untuk memeriksa apakah URL memiliki format yang valid
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // Protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // Domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // Port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // Query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // Fragment locator
  return !!pattern.test(url);
}

//script input type week
function fungsiWeek() {
  var week = document.getElementById("weeksaya").value;
  document.getElementById("demoweek").innerHTML = week;
}

//script attribut name
function formSubmit() {
  document.forms["myForm"].submit();
}
//script attribut propovertarget
document.addEventListener("DOMContentLoaded", function () {
  var popoverTargets = document.querySelectorAll("[popover-target]");

  popoverTargets.forEach(function (target) {
    var popoverId = target.getAttribute("popover-target");
    var popover = document.getElementById(popoverId);

    target.addEventListener("click", function () {
      if (popover.style.display === "none") {
        popover.style.display = "block";
      } else {
        popover.style.display = "none";
      }
    });
  });
});
