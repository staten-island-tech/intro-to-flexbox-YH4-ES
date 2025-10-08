const DOMSelectors = {
  fictional: document.querySelectorAll(".fiction"),
  container: document.querySelector(".container"),
}; //losing my mind.

function inject() { //Trying to get this button to inject. Reminder to delete old stuff.
  DOMSelectors.container.innerHTML = ""; //to clear

  DOMSelectors.fictional.forEach(item => { //to inject
    DOMSelectors.container.insertAdjacentHTML("afterbegin", item. outerHTML);
  });
  document.querySelector(".toShowAndToKnow").textContent = "Now Showing:";
  document.querySelector(".thecurrentShow").textContent = "Welcome to the Fiction.";
  document.getElementById("plentyOfExuberance").volume = 0.3;
  document.getElementById("plentyOfExuberance").play();
  document.querySelector(".playItOnAndNeverStop").src = "recordingme.png";
  document.getElementById("fictionbutton").style.color="pink";

}
document.getElementById("fictionbutton").addEventListener("click", inject);
console.log(DOMSelectors.fictional);