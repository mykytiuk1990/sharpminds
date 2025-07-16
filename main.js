const photoContainer = document.getElementById("photo");
const photo = document.createElement("img");
photo.style.maxWidth = "150px";
photo.style.height = "auto";


const imgs = [
'1.png',
'Complete Your Purchase.png',
'Order Confirmation.png',
'Order Refunded.png',
'Shipping Confirmation.png'
];

for(let i = 0; i < imgs.length; i++) {
    const img = document.createElement('img');
    img.src = `./img/${imgs[i]}`;
    photoContainer.appendChild(img);
}