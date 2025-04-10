// Apple vs Android

document.getElementById("android").addEventListener("click", showAndroid);

function showAndroid() {
  console.log("test");
  document.getElementById("logo").src = "images/Android-Logo.jpg";
  document.getElementById("explore").innerHTML = "Android Home";
  document.getElementById("explore").style.background = "#b6bcca";
  document.getElementById("link").href = "https://www.android.com&quot";
  document.getElementById("page").style.background = "#a4c93b";
  // ...style.fontFamily = "Roboto, sans-serif"
  document.getElementById("android").classList.add("active");
  document.getElementById("apple").classList.remove("active");
}

document.getElementById("apple").addEventListener("click", showApple);

function showApple() {
  console.log("test");
  document.getElementById("logo").src = "images/a";
  document.getElementById("explore").innerHTML = "Apple Home";
  document.getElementById("explore").style.background = "#b6bcca";
  document.getElementById("link").href = "https://www.apple.com/&#39";
  document.getElementById("page").style.background = "b6bcca";
  // ...style.fontFamily = "Brygada 1918, serif"
  document.getElementById("apple").classList.add("redborder");
  document.getElementById("android").classList.remove("redborder");
}