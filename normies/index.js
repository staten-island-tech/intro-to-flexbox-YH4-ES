const fiction =[
  {
    tle: "Toilet Seat.",
    apce: 5,
    pce: "5 bucks, Jamaican",
    img:"https://habitatrestore.ca/cdn/shop/files/BemisToiletSeat200TC-CottonWhite-Plumbing-HabitatforHumanityHabitatReStoreGTA-ThriftFurnitureStore-1_3.jpg?v=1753193281&width=1200",
    lnk: "https://www.bing.com/ck/a?!&&p=07be586372e6ca31dd392f37d3a2a62b955b7fa2c6f8a76205716ae57b049a61JmltdHM9MTc1ODA2NzIwMA&ptn=3&ver=2&hsh=4&fclid=2ccd128f-1513-69d6-2631-04ea14206861&u=a1L3ZpZGVvcy9yaXZlcnZpZXcvcmVsYXRlZHZpZGVvP3E9amFtYWNpYW4rYW50aGVtJm1pZD01RTU4RTk0RDIyREQxOUMwOUU4NDVFNThFOTREMjJERDE5QzA5RTg0Jm1jaWQ9NjNBQUVCM0JGODU0NERBMEEzQUM2QTI5NTNBNTY3NEUmRk9STT1WSVJF"
  },
  {
    tle: "Los Angelos",
    apce: 7,
    pce: "7 Bucks, Canadian. Nobody wants this.",
    img: "LOSANGOL.png",
    lnk: "https://www.youtube.com/watch?v=kRPGPAnPNa8"
  },
  {
    tle: "A white house.",
    apce: 1,
    pce: "SlightlyLargerThanAverageSizedLint, Indian.",
    img:"https://cdn.britannica.com/43/93843-050-A1F1B668/White-House-Washington-DC.jpg",
    lnk:"https://www.google.com/maps/place/The+White+House/@38.8976763,-77.0391047,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7b7bcdecbb1df:0x715969d86d0b76bf!8m2!3d38.8976763!4d-77.0365298!16zL20vMDgxc3E?entry=ttu&g_ep=EgoyMDI1MDkxNC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    tle: "Flexbox Page.",
    apce: 7,
    pce: "Pizza, I'm hungry.",
    img: "Screenshot.png",
    lnk: "https://flexboxupload.netlify.app/"
  }
 
]

const eternalEnemy =[
  {
    lnk: "https://www.youtube.com/watch?v=kRPGPAnPNa8",
    tle: "Los Angelos",
    apce: 7,
    pce: "7 Bucks, Canadian. Nobody wants this.",
    img: "LOSANGOL.png",
  },
  {
    lnk: "https://www.bing.com/ck/a?!&&p=08bb383aa21ddc438fa21cb304298bd0bf09e2dc97e958c6fd0adbf442691a24JmltdHM9MTc1ODA2NzIwMA&ptn=3&ver=2&hsh=4&fclid=2ccd128f-1513-69d6-2631-04ea14206861&psq=lint&u=a1aHR0cHM6Ly9kaWN0aW9uYXJ5LmNhbWJyaWRnZS5vcmcvZGljdGlvbmFyeS9lbmdsaXNoL2xpbnQ",
    tle: "Piece of lint: Kitchen",
    apce: 80,
    pce: "80$ auction price.",
    img: "https://i.pinimg.com/736x/34/3c/30/343c30da58a7a3935e8b51c996094134.jpg",
  },
  {
    lnk:"https://www.bing.com/videos/riverview/relatedvideo?q=baby+shark&&mid=07FEB0F7253CC37B37D707FEB0F7253CC37B37D7&mcid=BEE95343EA6A4B9E9E3431AB18E471D9&FORM=VCGVRP",
    tle: "John from accounting",
    img: "https://www.ikea.com/us/en/images/products/blahaj-soft-toy-shark__0710175_pe727378_s5.jpg?f=xl",
    pce: "Liver (557000)",
    apce: 557000,
  }
]
/*  {
    tle: "Piece of lint: Kitchen",
    apce: 80,
    pce: "80$ auction price.",
    img: "https://i.pinimg.com/736x/34/3c/30/343c30da58a7a3935e8b51c996094134.jpg",
    lnk: "https://www.bing.com/ck/a?!&&p=08bb383aa21ddc438fa21cb304298bd0bf09e2dc97e958c6fd0adbf442691a24JmltdHM9MTc1ODA2NzIwMA&ptn=3&ver=2&hsh=4&fclid=2ccd128f-1513-69d6-2631-04ea14206861&psq=lint&u=a1aHR0cHM6Ly9kaWN0aW9uYXJ5LmNhbWJyaWRnZS5vcmcvZGljdGlvbmFyeS9lbmdsaXNoL2xpbnQ"
  }
  {
    tle: "Slightly larger piece of lint.",
    apce: 18,
    pce: "18 Bitcoin, Haggleable.",
    img: "https://lhtcooling.com/wp-content/uploads/2019/11/Lint-from-dryer-vent-1.jpg",
    lnk: "https://www.bing.com/ck/a?!&&p=1bbe8a6a756a348f130b12dc7ce92e84adab890802e4a42cd6e47c7464b16994JmltdHM9MTc1ODA2NzIwMA&ptn=3&ver=2&hsh=4&fclid=2ccd128f-1513-69d6-2631-04ea14206861&psq=moss&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTW9zcw"
  } */

const DOMSelectors = {
  fictional: document.querySelectorAll(".fiction"),
  eternalEnemy: document.querySelectorAll(".eternal"),
  container: document.querySelector(".container"),
}; //losing my mind.

/* function injectFiction() {
  DOMSelectors.container.innerHTML = ""; //to clear

  DOMSelectors.fictional.forEach(item => { //to inject
    DOMSelectors.container.insertAdjacentHTML("afterbegin", item. outerHTML);
  fiction.forEach((element) => {
    DOMSelectors.container.insertAdjacentHTML("afterbegin", 
      <a class="linkcard fiction" href="${element.lnk}" target="_blank">
        <img src="${element.img}" alt="${element.tle}"></img>
        <h3>${element.tle}</h3>
        <p>${element.pce}</p>
      </a>
    );   
  });
  document.querySelector(".toShowAndToKnow").textContent = "Now Showing:";
  document.querySelector(".thecurrentShow").textContent = "Welcome to the Fiction.";
  document.getElementById("plentyOfExuberance").volume = 0.3;
  document.getElementById("plentyOfExuberance").play();
  document.querySelector(".playItOnAndNeverStop").src = "recordingme.png";
  document.getElementById("fictionbutton").style.color="pink";

} */

function injectFictionless() {
  DOMSelectors.container.innerHTML = ""; //to clear
  
  fiction.forEach(Element => { //to inject
    DOMSelectors.container.insertAdjacentHTML("beforeend", 
      `<a class="linkcard fiction" href="${Element.lnk}">
        <div class="card">
          <div class="cardsub">
            <h2 class="card-header">${Element.tle}</h2>
            <img
              class="card-img"
              src=${Element.img}
              alt=""
            />
          </div>
          <h3 class="price">${Element.pce}</h3>
        </div>
      </a>`

      );
  });
  document.querySelector(".toShowAndToKnow").textContent = "Now Showing:";
  document.querySelector(".thecurrentShow").textContent = "Welcome to the Fiction.";
  document.getElementById("plentyOfExuberance").volume = 0.3;
  document.getElementById("plentyOfExuberance").play();
  document.querySelector(".playItOnAndNeverStop").src = "recordingme.png";
  document.getElementById("fictionbutton").style.color="pink";
}

document.getElementById("fictionbutton").addEventListener("click", () => {injectFictionless(fiction)});

