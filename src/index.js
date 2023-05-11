const ramenURl = "http://localhost:3000/ramens"
const divMenu = document.querySelector("#ramen-menu")

const getRamenImg = () => {
    fetch(ramenURl)
        .then((res) => res.json())
        .then(ramens => {
            ramens.forEach(ramen => {
                renderRamenMenu(ramen)
            });
        })
}

const renderRamenMenu = (menuData) => {
    const img = document.createElement("img")
    img.src = menuData.image
    img.alt = menuData.name
    
    img.addEventListener("click", (e) => {
        console.log(e.target, menuData)
        document.querySelector(".detail-image").src = menuData.image
        document.querySelector(".name").textContent = menuData.name
        document.querySelector(".restaurant").textContent = menuData.restaurant
        document.querySelector("#rating-display").textContent = menuData.rating
        document.querySelector("#comment-display").textContent = menuData.comment
    })
    
    divMenu.append(img)
}

const handleCreate = (e) => {
    e.preventDefault()
    const inputName = e.target.name.value
    const inputRestaurant = e.target.restaurant.value
    const inputImage = e.target.image.value
    const inputRating = e.target.rating.value
    const inputComment = e.target["new-comment"].value

    const newRamen = {
        name: inputName,
        restaurant: inputRestaurant,
        image: inputImage,
        rating: inputRating,
        comment: inputComment,
    }
    console.log(newRamen)
    renderRamenMenu(newRamen)
}


getRamenImg()

document.querySelector("#new-ramen").addEventListener("submit", handleCreate)


