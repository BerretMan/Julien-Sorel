

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
createArticle(9)
//exemple 
const button = document.getElementById("vignette0")
const modal = document.getElementById("modal").style
const exit = document.getElementById("close")
button.addEventListener('click', () => {
    modal.zIndex=0
    modal.opacity=1
});
exit.addEventListener('click', () => {
    modal.zIndex=-1
    modal.opacity=0
});


