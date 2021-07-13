const decreaseNum = (itemNo)=>{
    let prodAmt = parseInt(document.getElementById("prod_amount").innerHTML);
    let totalAmt = parseInt(document.getElementById("total_amount").innerHTML);
    let itemIndiPriceId = itemNo + "_price";
    let itemid = document.getElementById(itemNo);
    let itemIndiPrice = parseInt(document.getElementById(itemIndiPriceId).innerHTML);
    let itemQuantity = parseInt(itemid.value);
    if(!itemQuantity){return;}
    if(itemQuantity==1){
        itemid.value = itemQuantity-1;
        document.getElementById("prod_amount").innerHTML = prodAmt - itemIndiPrice;
        document.getElementById("total_amount").innerHTML = totalAmt-itemIndiPrice;
        itemid.setAttribute("style","background-color:#D3D3D3; color:white")}
        else{
            itemid.value = itemQuantity-1;
            document.getElementById("prod_amount").innerHTML = prodAmt - itemIndiPrice;
            document.getElementById("total_amount").innerHTML = totalAmt-itemIndiPrice;
            itemid.setAttribute("style","background-color:white; color:blue") 
        }
}
 
const increaseNum = (itemNo)=>{
    let prodAmt = parseInt(document.getElementById("prod_amount").innerHTML);
    let totalAmt = parseInt(document.getElementById("total_amount").innerHTML);
    let itemIndiPriceId = itemNo + "_price";
    let itemid = document.getElementById(itemNo);
    let itemIndiPrice = parseInt(document.getElementById(itemIndiPriceId).innerHTML)
    let itemQuantity = parseInt(itemid.value);
    if(itemQuantity==5){return;}
    if(itemQuantity==4){
        itemid.value = itemQuantity+1;
        document.getElementById("prod_amount").innerHTML = prodAmt + itemIndiPrice;
        document.getElementById("total_amount").innerHTML = totalAmt+itemIndiPrice;
        itemid.setAttribute("style","background-color:#FF7F7F; color:white")
    }
    else{
        itemid.value = itemQuantity+1;
        document.getElementById("prod_amount").innerHTML = prodAmt + itemIndiPrice;
        document.getElementById("total_amount").innerHTML = totalAmt+itemIndiPrice;
        itemid.setAttribute("style","background-color:white; color:blue") 
    }
}
 
const removeItem = (itemId)=>{
    item = document.getElementById(itemId);
    item.parentNode.removeChild(item);
}
 
const wish = (wishid)=>{
    let wishItem = document.getElementById(wishid);
    let stylecheck = wishItem.getAttribute("style");
    if(stylecheck==null){
        wishItem.setAttribute("style","color:red")
    }else{
        wishItem.removeAttribute("style")
    }   
}
 
const checkout = ()=>{
    prodAmt = parseInt(document.getElementById("prod_amount").innerHTML);
    totalAmt = document.getElementById("total_amount").innerHTML;
    if(prodAmt){
        document.getElementById("CheckoutTitle").innerHTML=`Thank You for shopping`;
        document.getElementById("CheckoutBody").innerHTML=`Total Bill Paid : \$${totalAmt}`;
 
    }else{
        document.getElementById("CheckoutTitle").innerHTML=`Cart Empty`;
        document.getElementById("CheckoutBody").innerHTML=`Shop something before checkout`;
    }
}
 
const applyDiscount = ()=>{
    couponApplied = document.getElementById("coupon_value").value;
    if(couponApplied=="SAM2K"){
        document.getElementById("total_amount").innerHTML = parseInt(document.getElementById("total_amount").innerHTML) - 15
        let coupon = document.getElementById("coupon");
        coupon.disabled = true;
    }else{
        document.getElementById("err_throw").innerHTML = "Your code is invalid. The code is SAM2K";
    }
}
