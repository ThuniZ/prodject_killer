let menuOpen = false;
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile-menu");
const links = document.getElementsByClassName("mobile-link");
const documentBody = document.body;

function sendFormInfo() {
  alert("Your message has been sent!");
}

function toggleMenu() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    menu.style.right = "0%";
    documentBody.style.overflow = "hidden";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    menu.style.right = "-100%";
    documentBody.style.overflow = "auto";
  }
}

window.addEventListener("load", function () {
  menuBtn.addEventListener("click", function () {
    toggleMenu();
  });
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      toggleMenu();
    });
  }
});

//service-modal code start

//Array with content
const services = [
  {
    name: "Jason Voorhees",
    content: "Mommy's boy.",
    picture: "jason2.jpg",
  },
  {
    name: "Pinhead",
    content: "You opened it. We came. Now you must come with us, taste our pleasures.",
    picture: "pinhead2.jpg",
  },
  {
    name: "Leatherface",
    content: "I like wearing peoples skin as my mask.",
    picture: "leatherface2.jpg",
  },
  {
    name: "Ghostface",
    content: "WHAZZAAAAP??",
    picture: "ghostface2.jpg",
  },
  {
    name: "Candyman",
    content: "Want sum candy?",
    picture: "candyman2.jpg",
  },
  {
    name: "Freddy Krueger",
    content: "Kinky scissor boy.",
    picture: "freddy2.jpg",
  },
  {
    name: "Chucky",
    content: "Anger issues.",
    picture: "chucky2.jpg",
  },
  {
    name: "Michael Myers",
    content: "Stalk meter 100%",
    picture: "micheal2.jpg",
  },
];

//Arrow function to gather style property
const closeServiceModal = () => {
  document.getElementById("service-modal-wrapper").style.display = "none";
};

//Click event on every element, function to open & loop module to check the content
const openServiceModal = () => {
  const cards = document.getElementsByClassName("service-card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      document.getElementById("service-modal-wrapper").style.display = "flex";
      for (let j = 0; j < services.length; j++) {
        if (i === j) {
          document.getElementById(
            "service-modal-content"
          ).innerHTML = `<h2>${services[j].name}</h2><p>${services[j].content}</p><img src="./media/${services[j].picture}">`;
        }
      }
    });
  }
};

window.addEventListener("load", openServiceModal);

//Service modal end

//Gallerie start

const fullImgBox = document.getElementById("fullImgBox")
const fullImg = document.getElementById("fullImg")

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
    
    
}
//switches "fullImgBox" div to display "none" to close the gallery
function closeFullImg(){
    fullImgBox.style.display = "none";
}

