document.addEventListener("DOMContentLoaded", function(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const dogDrop = document.getElementById("breed-dropdown")
    const dogContainer = document.getElementById('dog-breeds')
    const imageContainer = document.getElementById('dog-image-container')



fetchImg()
fetchBreed()
    
function fetchImg(){
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(data => renderImg(data))
}

function fetchBreed(){
  fetch(breedUrl)
  .then(resp => resp.json())
  .then (data => returnDogs(data))
  }

  function fetchBreedByLetter(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => alphabeticalDogs(data))

  }

function changeColor(){
  this.style.color = "blue"
}

function renderImg(imgs) {  
  imgs.message.forEach(img => {
    const pic = document.createElement('img');
    pic.src = img
    imageContainer.appendChild(pic)
  })
}

function returnDogs(dogs){
  for (let dog in dogs.message){
    const lineItem = document.createElement('li')
    lineItem.onclick = changeColor
    lineItem.innerText = dog
    dogContainer.appendChild(lineItem)
  }
}

function alphabeticalDogs(dogs){
  document.querySelector("ul").innerHTML = ""
  for (let dog in dogs.message){
    if (dog.charAt(0) == dogDrop.value){      
      const lineItem = document.createElement("li")
      lineItem.onclick = changeColor
      lineItem.innerText = dog
      document.getElementById("dog-breeds").appendChild(lineItem)

    }
}
}

dogDrop.addEventListener("change", function(){
  fetchBreedByLetter()
})



});
