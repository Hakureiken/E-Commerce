let imageMiniature1 = document.getElementById('image1');
let imageMiniature2 = document.getElementById('image2');
let imageMiniature3 = document.getElementById('image3');
let imageMiniature4 = document.getElementById('image4');
let imagePresentation = document.getElementById('imagePresentation');
let closeModal = document.getElementById('close');
let containerModal = document.getElementById('modal');


// changement de l'image de présentation

imageMiniature1.addEventListener('click', function changeImageCarrousel() {
    imageMiniature1.classList.add('active');
    imageMiniature2.classList.remove('active');
    imageMiniature3.classList.remove('active');
    imageMiniature4.classList.remove('active');
    imagePresentation.src = "images/image-product-1.jpg"
})
imageMiniature2.addEventListener('click', function changeImageCarrousel() {
    imageMiniature1.classList.remove('active');
    imageMiniature2.classList.add('active');
    imageMiniature3.classList.remove('active');
    imageMiniature4.classList.remove('active');
    imagePresentation.src = "images/image-product-2.jpg"

})
imageMiniature3.addEventListener('click', function changeImageCarrousel() {
    imageMiniature1.classList.remove('active');
    imageMiniature2.classList.remove('active');
    imageMiniature3.classList.add('active');
    imageMiniature4.classList.remove('active');
    imagePresentation.src = "images/image-product-3.jpg"

})
imageMiniature4.addEventListener('click', function changeImageCarrousel() {
    imageMiniature1.classList.remove('active');
    imageMiniature2.classList.remove('active');
    imageMiniature3.classList.remove('active');
    imageMiniature4.classList.add('active');
    imagePresentation.src = "images/image-product-4.jpg"

})

// activation/désactivation de la modal

imagePresentation.addEventListener('click', function openModal() {
    containerModal.classList.remove('none');
})

closeModal.addEventListener('click', function closeModal() {
    containerModal.classList.add('none');
})

// Changement des images dans la modal
let imageMiniatureModal1 = document.getElementById('modalImage1');
let imageMiniatureModal2 = document.getElementById('modalImage2');
let imageMiniatureModal3 = document.getElementById('modalImage3');
let imageMiniatureModal4 = document.getElementById('modalImage4');
let imagePresentationModal = document.getElementById('imagePresentationModal');

imageMiniatureModal1.addEventListener('click', function changeImageModal() {
    imageMiniatureModal1.classList.add('active');
    imageMiniatureModal2.classList.remove('active');
    imageMiniatureModal3.classList.remove('active');
    imageMiniatureModal4.classList.remove('active');
    imagePresentationModal.src = "images/image-product-1.jpg"
})

imageMiniatureModal2.addEventListener('click', function changeImageModal() {
    imageMiniatureModal1.classList.remove('active');
    imageMiniatureModal2.classList.add('active');
    imageMiniatureModal3.classList.remove('active');
    imageMiniatureModal4.classList.remove('active');
    imagePresentationModal.src = "images/image-product-2.jpg";
})

imageMiniatureModal3.addEventListener('click', function changeImageModal() {
    imageMiniatureModal1.classList.remove('active');
    imageMiniatureModal2.classList.remove('active');
    imageMiniatureModal3.classList.add('active');
    imageMiniatureModal4.classList.remove('active');
    imagePresentationModal.src = "images/image-product-3.jpg"
})

imageMiniatureModal4.addEventListener('click', function changeImageModal() {
    imageMiniatureModal1.classList.remove('active');
    imageMiniatureModal2.classList.remove('active');
    imageMiniatureModal3.classList.remove('active');
    imageMiniatureModal4.classList.add('active');
    imagePresentationModal.src = "images/image-product-4.jpg"
})

// affichage du panier (svg caddie)
let cart = document.getElementById('cart');

cart.addEventListener('click', function affichageCart() {
    containerCart.classList.toggle('none');
})

// changement de la valeur du nombre d'article avec "+" et "-"
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let inputValue = document.getElementById('inputValue');

plus.addEventListener('click', function valuePlus() {
    inputValue.value = `${parseInt(inputValue.value, 10) + 1}`
    console.log(inputValue.value);
})

minus.addEventListener('click', function valueMinus() {
    inputValue.value = `${parseInt(inputValue.value, 10) - 1}`

    if (inputValue.value < 0) {
        inputValue.value = 0
    }
    console.log(inputValue.value);
})

// ajouter/retirer du contenu dans le cart

let modifyTextTop = document.querySelector('#description h2').textContent;
let modifyTextBot = document.querySelector('#description .price').textContent;
let addToCart = document.getElementById('addToCart');
let containerCart = document.getElementById('contenuCart');
let removeContent = document.querySelector('#removeContent');

addToCart.addEventListener('click', function addContenuToCart() {
    removeContent.innerHTML = `
        <div class="flex justify-between">
            <div class="w20">
                <img src="images/image-product-1.jpg" alt="image_product">
            </div>
            <div class="p03 insertHere">
            ${modifyTextTop}<br/> 
            $${modifyTextBot} x ${inputValue.value} <span class="total">$${modifyTextBot * inputValue.value}</span><br/>
            </div>
            <div>
                <svg id="trash" onclick="deleteContent()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </div>
        </div>
        <div>
            <button id="checkout">Checkout</button>
        </div>`;
})


function deleteContent() {
    removeContent.innerHTML = `<div id="empty">Your cart is empty.</div>`;
}

