const items = document.querySelectorAll(".list .item");
const recipes = document.querySelectorAll(".recipe")
const info = document.querySelectorAll('.infos')
const visibility = document.querySelectorAll('.hideOnOff')

// for (let item of items) {
//     item.addEventListener('click', function() {
//         const recipeID = item.getAttribute('id');

//         window.location.href = `/recipes/${recipeID}`;
//     });
// };

for(let recipe of recipes){
    recipe.addEventListener("click", function(){
        const recipeIndex = recipe.getAttribute("id")
        console.log(recipeIndex)
        window.location.href = `/recipes/${recipeIndex}`
    })
}

for(let i = 0; i < visibility.length; i++) {
    visibility[i].addEventListener("click", function(){
        if(info[i].classList.contains("hide")){
            info[i].classList.remove("hide")
            visibility[i].innerHTML = "ESCONDER"
        }
        else {
            info[i].classList.add("hide")
            visibility[i].innerHTML = "MOSTRAR"
        }
    })
}

