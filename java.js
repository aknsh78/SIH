<a href="javascript:void(0);" onclick="showAbout()">🏠 About</a>
function showAbout() {
  document.getElementById("aboutContent").style.display = "block";
  closeNav(); // close sidebar when showing about
}
function hideAbout() {
  document.getElementById("aboutContent").style.display = "none";
}

