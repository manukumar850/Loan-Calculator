window.onload =()=> {
    const inputs=document.querySelectorAll("input");
    inputs.forEach(input=> {
        input.addEventListener('change',calculateLoan)
    })
}
function calculateLoan (){
    const principal=document.querySelector('#amount').value;
    const interestRate=document.querySelector('#interest').value;
    const Tenure=document.querySelector('#tenure').value;

    if(!principal || !interestRate || !Tenure){
        return;
    }
    const monthlyInterest=interestRate/100/12;
    const emi=principal*monthlyInterest*Math.pow(1 + monthlyInterest, Tenure)/(Math.pow(1+monthlyInterest, Tenure)-1);
    const totalAmount=emi*Tenure;
    const totalInterest= totalAmount-principal;
    
    document.querySelector('#emi').innerText='EMI : ₹' + emi.toFixed(2);
    document.querySelector('#totalInterest').innerText='Total Interest : ₹' + totalInterest.toFixed(2);
    document.querySelector('#totalAmount').innerText='Total Amount : ₹' + totalAmount.toFixed(2);

}
