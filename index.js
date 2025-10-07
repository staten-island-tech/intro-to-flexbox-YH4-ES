const DOMSelectors = {
  fictional: document.getElementById("fiction"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  display: document.getElementById("display"),
};

DOMSelectors.fictional.addEventListener("click", function () {
  DOMSelectors.display.style.backgroundImage =
    "url('https://media.istockphoto.com/id/1147544807/photo/white-wooden-chair-on-white-background.jpg?s=612x612&w=0&k=20&c=ZkLh1jv2YHk3r8bX6v5nUu0KXrE1m8g9H3pX4KJt2g=')";
});