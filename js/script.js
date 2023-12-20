let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart');
let Cartclose = document.querySelector('#close')

cartIcon.onclick = () =>{
    cart.classList.add('acao')
}

Cartclose.onclick = () =>{
    cart.classList.remove('acao')
}

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
};

function ready(){
    let removeCart = document.getElementsByClassName('cart-remove')
    console.log(removeCart)
    for(let i =0; i < removeCart.length; i++){
        let button = removeCart[i]
        button.addEventListener('click', removeCartItem)
    }
}

function removeCartItem(e){
    let buttonClick = e.target
    buttonClick.parentElement.remove()
    uptatetotal()
}

function uptatetotal (){
    let cartContent = document.getElementsByClassName('cart-content')[0]
    let cartBoxes = document.getElementsByClassName('cart-box')
    let total = 0;
    for(let i = 0; i < cartBoxes.length; i++){
        let cartBox = cartBoxes[i]
        let priceElement = cartBox.getElementsByClassName('cart-prece')[0]
        let qualityElement = cartBox.getElementsByClassName('cart-quantidade')[0]
        let price = parseFloat(priceElement.innerText.replace("$", ""))
        let quanty = qualityElement.value
        total = total + ( price + quanty);

        document.getElementsByClassName('total-price')[0].innerText = '$' + total;  
        
    }
}