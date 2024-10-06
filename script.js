function closeIntro() {
  document.getElementById("intro").style.height = "0";
  document.getElementById("TTMlogo").style.width = "175px";
  document.getElementById("TTMlogo").style.height = "auto";
  document.getElementById("TTMlogo").style.top = "20px";
  document.getElementById("TTMlogo").style.left = "50px";
  document.getElementById("TTMlogo").style.borderRadius = "25px";
  document.getElementById("TTMlogo").style.transform = "translate(0, 0)";
  document.getElementById("TTMlogo").style.boxShadow = "none";
  document.getElementById("menu").style.height = "90vh";
  document.getElementById("content").style.height = "auto";
  document.getElementById("switch").style.transform = "translate(0, -10px)";
}

function openOl() {
  document.getElementById("blurbg1").style.width = "100vw";
  document.getElementById("order-list").style.width = "400px";
  document.getElementById("body").style.overflow = "hidden";
}

function closeOl() {
  document.getElementById("blurbg1").style.width  = "0";
  document.getElementById("order-list").style.width = "0";
  document.getElementById("body").style.overflow = "auto";
  document.getElementById("submit-form").style.width = "0";
}

function openSibmit() {
  document.getElementById("submit-form").style.width = "450px";
}

let socialVisible = false;

function toggleSocial() {
  socialVisible = !socialVisible;
  if (socialVisible) {
    document.getElementById("social").style.transform = "translateY(-70px)";
    document.getElementById("social").style.opacity = "1";
  } 
  else {
    document.getElementById("social").style.transform = "translateY(0)";
    document.getElementById("social").style.opacity = "0";
  }
}
function increase(icon) {
  var input = icon.parentNode.parentNode.querySelector('.product-quantity');
  var currentValue = parseInt(input.value);
  if (currentValue < 10) {
    input.value = currentValue + 1;
  }
  updateTotal();
}

function decrease(icon) {
  var input = icon.parentNode.parentNode.querySelector('.product-quantity');
  var currentValue = parseInt(input.value);
  if (currentValue > 1) {
    input.value = currentValue - 1;
  }
  updateTotal();
}

//From Reference

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
  loadContent();
}

function loadContent(){
  //Remove Food Items  From Cart
  let btnRemove=document.querySelectorAll('.cart-remove');
  btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
  });

  //Product Item Change Event
  let qtyElements=document.querySelectorAll('.product-quantity');
  qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);
  });

  //Product Cart
  let cartBtns=document.querySelectorAll('.add-to-cart');
  cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
  });

  updateTotal();
}

//Remove Item
function removeItem(){
  if(confirm('Are you sure to remove that?')){
    let title=this.parentElement.parentElement.querySelector('.cart-food-title').innerHTML;
    itemList=itemList.filter(el=>el.title!=title);
    this.parentElement.parentElement.remove();
    loadContent();
  }
}

//Change Quantity
function changeQty(){
  if(isNaN(this.value) || this.value<1){
    this.value=1;
  }
  loadContent();
}

let itemList=[];

//Add Cart
function addCart(){
 let food=this.parentElement;
 let title=food.querySelector('.food-title').innerHTML;
 let price=food.querySelector('.cost').innerHTML;
 let imgSrc=food.querySelector('.food-img').src;
 //console.log(title,price,imgSrc);
 
 let newProduct={title,price,imgSrc}

 //Check Product already Exist in Cart
 if(itemList.find((el)=>el.title == newProduct.title)){
  alert("Product is already added into your cart.");
  return;
 }else{
  itemList.push(newProduct);
 }

let newProductElement= createCartProduct(title,price,imgSrc);
let element=document.createElement('div');
element.innerHTML=newProductElement;
let cartBasket=document.querySelector('.list');
cartBasket.append(element);
loadContent();
}

function createCartProduct(title,price,imgSrc){

  return `
  <div class="cart-box">
    <img src="${imgSrc}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-food-title">${title}</div>
        <div class="price-box">
            <div class="cart-price">${price}</div>
            <div class="cart-amt">${price}</div>
        </div>
        <div class="order-quantity">
            <p>Order Quantity :</p>
            <div class="quantity">
                <span class="down">
                    <i class="fa fa-chevron-circle-down" aria-hidden="true" onclick="decrease(this)"></i>
                </span>
                <input type="number" name="number" min="1" max="10" value="1" class="product-quantity" pattern="[0-9]">
                <span class="up">
                    <i class="fa fa-chevron-circle-up" aria-hidden="true" onclick="increase(this)"></i>
                </span>
            </div>
        </div>
        <i class="fa fa-trash cart-remove" aria-hidden="true"></i>
    </div>
  </div>
  `;
}

function updateTotal()
{
  const cartItems=document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector('.total-price');

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("ks",""));
    let qty=product.querySelector('.product-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText=(price*qty)+" ks";

  });

  totalValue.innerHTML=total+' ks';


  // Add Product Count in Cart Icon

  const cartCount=document.querySelector('.cart-count');
  let count=itemList.length;
  cartCount.innerHTML=count;

  if(count==0){
    cartCount.style.display='none';
  }else{
    cartCount.style.display='block';
  }


}

function thanks() {
  if (itemList.length === 0) {
    alert('Your cart is empty. Please add some items before checking out.');
    return;
  }

  alert ('Thank you for your purchase');
  document.getElementById("blurbg1").style.width = "0";
  document.getElementById("submit-form").style.width = "0";
  
  // Remove all items from the cart
  itemList = [];
  
  // Remove all cart items from the DOM
  let cartBasket = document.querySelector('.list');
  while (cartBasket.firstChild) {
    cartBasket.removeChild(cartBasket.firstChild);
  }
  
  // Restart loadContent() and updateTotal()
  loadContent();
  updateTotal();
}