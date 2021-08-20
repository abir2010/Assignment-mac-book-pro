// getting all the elements here //
const basePrice = document.getElementById('base-price');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalCost = document.getElementsByClassName('total-cost');
// update the ui of receipt //
function upgrade(info){
  if(info == '8gb'){
    memoryCost.innerText = 0;
  } else if(info == '16gb'){
    memoryCost.innerText = 180;
  } else if(info == '256gb'){
    storageCost.innerText = 0;
  } else if(info == '512gb'){
    storageCost.innerText = 100;
  } else if(info == '1tb'){
    storageCost.innerText = 180;
  } else if(info == 'free'){
    deliveryCost.innerText = 0;
  } else if(info == 'cost'){
    deliveryCost.innerText = 20;
  }
  calculateTotal();
}
// calculate total price //
function calculateTotal(){
  for(let i=0; i<totalCost.length; i++){
    totalCost[i].innerText = parseInt(basePrice.innerText)+parseInt(memoryCost.innerText)+parseInt(storageCost.innerText)+parseInt(deliveryCost.innerText);
  }
}
// apply promo code //
document.getElementById('promo-btn').addEventListener('click',function(){
  const promoInput = document.getElementById('promo-input');
  let cost = parseInt(totalCost[totalCost.length-1].innerText);
  if(promoInput.value == 'stevekaku'){
    totalCost[totalCost.length-1].innerText = cost - (cost/5);
  }
  promoInput.value = '';
});