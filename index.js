const billAmount =document.querySelector('#bill-amount');
console.log(billAmount.value)
const cashGiven= document.querySelector("#cash-given");
const checkButton= document.querySelector("#check-button");
const message= document.querySelector("#error-meaasge")

checkButton.addEventListener("click",function validateBillAmount(){
    console.log('clicked')
    //message.getElementsByClassName.display="none"
    if (billAmount.value>0) {
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturn = cashGiven.value - billAmount.value
            calculateChange(amountToBeReturn);
        }else{
            showMessage("The cash provided should atleast be equal to the bill amount")
        }
    }else{
        showMessage("Invalid Bill Amount");
    }
})

function calculateChange(){

}
function showMessage(Msg){
    message.style.display="block";
    message.innerText =Msg;
}