document.addEventListener("DOMContentLoaded", function() {
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const smallUnit = document.querySelectorAll(".small-unit");
const closeButton = document.querySelector(".lightbox-close");
const bigUnit = document.querySelector(".big-unit");
let currentImageIndex = 0;
const previousIcon = document.querySelector(".previous-icon");
const nextIcon = document.querySelector(".next-icon");
const add = document.querySelector(".add-btn");
const subtract = document.querySelector(".subtract-btn");
const counts = document.querySelector(".counter");
const cartIcon = document.querySelector(".fa-cart-shopping");
const cartContent = document.querySelector(".empty");
const cartBtn = document.querySelector(".cart-button");
const cartProduct = document.querySelector(".cart-product");
const trash = document.querySelector(".fa-trash-can");
itemNum = document.querySelector(".item-num");
console.log(cartBtn)
let images = [];
let numCounter;

// || SELECTING EACH OF THE SMALLER DIVS
smallUnit.forEach((e, index)=>{
    const smallImage = e.querySelector('img');
    images.push(smallImage.src)

    e.addEventListener("click", ()=>{
        const smallImageSrc = smallImage.src;
        bigUnit.innerHTML = "";

        const newImage = document.createElement("img");
        newImage.src = smallImageSrc;
        newImage.style.maxWidth = "300px";
        newImage.style.maxHeight = "300px";
        newImage.style.objectFit = "contain";
        bigUnit.appendChild(newImage);
        currentImageIndex = index;
        
    })
})

// || LIGHTBOX FUNCTIONALITY
    bigUnit.addEventListener("click", ()=>{
        const currentImage = bigUnit.querySelector("img");
    if (currentImage) {
        lightboxImage.src = images[currentImageIndex];
        lightbox.style.display = "flex";
    }
    })

    // || CLICKING ON THE PREVIOUS AND NEXT ICON
    previousIcon.addEventListener('click', ()=>{
        showPreviousImage();
    })

    nextIcon.addEventListener("click", ()=>{
        showNextImage();
    })

    //|| FUNCTIONALITY OF THE KEYBOARD NAVIGATION BUTTON TO SLIDE THROUGH IMAGES
    document.addEventListener('keydown', (e)=>{
        if(e.key === "ArrowLeft"){
            showPreviousImage();
        }
        else if (e.key === "ArrowRight"){
            showNextImage();
        }
    })

    // || FUNCTION PROPER FOR PREVIOUS AND NEXT ICON
        function showPreviousImage(){
        currentImageIndex--;
        if (currentImageIndex < 0){
            currentImageIndex = images.length -1;
        }
        lightboxImage.src = images[currentImageIndex];
    }

    function showNextImage(){
        currentImageIndex++;
        if (currentImageIndex >= images.length){
            currentImageIndex = 0;
        }
        lightboxImage.src = images[currentImageIndex];
    }

    closeButton.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

// || ADDITION AND SUBTRACTION OF PRODUCT ITEM IN CART
    add.addEventListener("click", ()=>{
        numCounter = Number(counts.textContent);
        numCounter++;
        counts.innerText =numCounter;
    })

    subtract.addEventListener("click", ()=>{
        numCounter = Number(counts.textContent);
        if(numCounter <= 0){
            return;
        }else{
            numCounter--;
            counts.innerText = numCounter;
        }
    })

// || FUNCTIONALITY OF CLICKING ON THE CART ICON
    cartIcon.addEventListener('click', ()=>{
        numCounter = counts.textContent;
        if(numCounter === "0"){
            cartContent.classList.toggle('show')
        }else{
            cartProduct.classList.toggle('show')
        }
        // cartContent.classList.toggle('show');
    })

// || PUSHING THE SELECTED ITEM TO THE CART ICON
    cartBtn.addEventListener("click", ()=>{
        numCounter = counts.textContent;
        if(numCounter === "0"){
            itemNum.style.display = "none";
        }else{
        itemNum.textContent = numCounter ;
        itemNum.style.display = "block";
        cartContent.classList.remove('show');
        cartProduct.classList.remove('show')
        }

    })

// || TRASH ICON TO DELETE AND CLEAR THE CART
    trash.addEventListener('click', ()=>{
        cartProduct.style.display = 'none';
        cartContent.classList.toggle('show');
        itemNum.style.display = "none";
        counts.textContent = "0"
    })

})



 // if (numCounter === "0"){
        //     cartContent.classList.toggle('show');
        //     cartProduct.classList.remove('show');
        // }else{
        //     cartProduct.classList.add('show')
        //     cartContent.style.display = 'none';
        //     itemNum.textContent = numCounter ;
        //     itemNum.style.display = "block";
        // }