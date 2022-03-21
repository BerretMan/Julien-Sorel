

//grab data in json
async function grabData() {
    const response = await fetch("./article.json");
    return await response.json();
}
let captureData = await grabData();


//shuffle array with Fisher-Yates algorihtm's (function random)
// function shuffle(arr) {
//     var i = arr.length, j, temp;
//     while(--i > 0){
//       j = Math.floor(Math.random()*(i+1));
//       temp = arr[j];
//       arr[j] = arr[i];
//       arr[i] = temp;
//     }
// }



console.log("yo")
console.log(captureData[0].content)

function createArticle(number) {
    for (let i = 0; i < number; i++) {
        console.log(i)
        const article  = `
        <div class="vignette" id="vignette${i}">
        <img src="${captureData[i].photo}" class="article"/>
        </div>
        `
        document.querySelector('main').insertAdjacentHTML('beforeend', article)
    }
}




function texte(i) {
    let content = `
        <img src="${captureData[i].photo}" class="bigimage"/>
        <p>${captureData[i].desc}
    `
    return content
}
createArticle(9)
//exemple 
const img0 = document.getElementById("vignette0")
const img1 = document.getElementById("vignette1")
const img2 = document.getElementById("vignette2")
const img3 = document.getElementById("vignette3")

const modal = document.getElementById("modal").style
const lecontent = document.getElementById("lecontent")
const desc = document.getElementById("desc")



img0.addEventListener('click', () => {
    modal.zIndex=0
    modal.opacity=1

    lecontent.innerHTML = texte(0)
});
img1.addEventListener('click', () => {
    modal.zIndex=0
    modal.opacity=1
    lecontent.innerHTML = texte(1)
});
img2.addEventListener('click', () => {
    modal.zIndex=0
    modal.opacity=1
    lecontent.innerHTML = texte(2)
});
img3.addEventListener('click', () => {
    modal.zIndex=0
    modal.opacity=1
    lecontent.innerHTML = texte(3)
});



var exit = document.getElementById("close")
exit.addEventListener('click', () => {
    console.log("test")
    modal.zIndex=-1
    modal.opacity=0
});



