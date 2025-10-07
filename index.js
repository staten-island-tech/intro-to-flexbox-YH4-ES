const DOMSelectors = {
  fictional: document.querySelectorAll(".fiction"),
  container: document.querySelector(".container"),
}; //losing my mind.

function inject() { //Trying to get this button to inject. Reminder to delete old stuff.
  DOMSelectors.container.innerHTML = ""; //to clear

  DOMSelectors.fictional.forEach(item => { //to inject
    DOMSelectors.container.insertAdjacentHTML("afterbegin", item. outerHTML);
  });
}
document.getElementById("piratebutton").addEventListener("click", inject);
console.log(DOMSelectors.fictional);