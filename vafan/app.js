//killer array

const killers = [
    {killer: "candyman.jpg", name: "Candyman"}, {killer: "chucky.jpg", name: "Chucky"},
    {killer: "freddy.jpg", name: "Freddy"}, {killer: "hellraiser.jpg" , name: "Hellraiser"}, 
    {killer: "jason.jpg", name: "Jason"}, {killer: "leatherface.jpg", name: "Leatherface"},
    {killer: "michael_myers.jpg", name: "Michael Myers"}, {killer: "scream.jpg", name: "Scream"}
];

//open and close the modal by clicking the img


const closeKillerModal = () => {
    document.getElementById("killer-modal").style.display = "none";
    document.getElementsByClassName("killer-image").style.border = "0px"
}

//Checks which img you clicked on and checks the array for that timg and opens it
//Changes killer-modal to flex, and opens the img
//the next loop checks which img you clicked on and opens that
//and sets a border on that thumbnail and switches it when you select a new one
//creates a span with a onclick with and X to close the modal


const openKillerModal = () => {
    const killer = document.getElementsByClassName("killer-image");
    for(let i = 0; i < killer.length; i++){
        killer[i].addEventListener("click", () => {
            document.getElementById("killer-modal").style.display = "flex";
            for(let k = 0; k < killers.length; k++){
                if(i === k){
                document.getElementById("killer-modal").innerHTML = `<span onclick="closeKillerModal()"><i class="fa fa-times"></i></span>` 
                +  `<div id="main-killer"><img src="./img/${killers[k].killer}"></div>`
                + `<div id="killer-thumbnail-modal" ></div> `;
                killerThumbModal();
                killer[k].style.border = "2px solid black";
                } else {
                    killer[k].style.border = "0px";
                }
            }
        });
    }
  };


//Map all the img in the array to a div under the main img
const killerThumbModal = () => {
    document.getElementById("killer-thumbnail-modal").innerHTML = killers.map((murder) => `<img src="./img/${murder.killer}">`).join("")
    
};

