let billAmount=document.getElementById("billAmount");
let perTip=document.getElementById("percentageTip");
let tipAmount=document.getElementById("tipAmount");
let fullAmount=document.getElementById("totalAmount");
let errorMsg=document.getElementById("errorMessage");
function calculateBtn(){
    if (billAmount.value === ""){
        errorMsg.textContent="Please Enter a Valid Input";
    }
    else if (perTip.value === ""){
        errorMsg.textContent="Please Enter a Valid Input";
    }
    else{
    let bill=parseInt(billAmount.value);
    let tip=parseInt(perTip.value);
    let calculateTip= (tip/100)*bill;
    tipAmount.value=calculateTip;
    let total=bill+calculateTip;
    fullAmount.value=total;
    }
}
