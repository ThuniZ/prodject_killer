//killer array

const killers = [
    {killer: "candyman.jpg", name: "Candyman"}, {killer: "chucky.jpg", name: "Chucky"},
    {killer: "freddy.jpg", name: "Freddy"}, {killer: "hellraiser.jpg" , name: "Hellraiser"}, 
    {killer: "jason.jpg", name: "Jason"}, {killer: "leatherface.jpg", name: "Leatherface"},
    {killer: "michael_myers.jpg", name: "Michael Myers"}, {killer: "scream.jpg", name: "Scream"}
];

//open the modal by clicking the img
/*
document.getElementById("mini-killers").innerHTML = killers
.map((killers) => `<img src="./img/${killers.killer}">`).join("");
*/

const closeKillerModal = () => {
    document.getElementById("killer-modal").style.display = "none";
}


const openKillerModal = () => {
    //document.getElementById("killer-modal").style.display = "flex";
    const killer = document.getElementsByClassName("killer-image");
    for(let i = 0; i < killer.length; i++){
        killer[i].addEventListener("click", () => {
            document.getElementById("killer-modal").style.display = "flex";
            for(let k = 0; k < killers.length; k++){
                if(i === k){
                document.getElementById("killer-modal").innerHTML = `<img src="./img/${killers[k].killer}">`+ `<span onclick="closeKillerModal()"><i class="fa fa-times"></i></span>`;
                
                }
            }
        });
    }
  };

