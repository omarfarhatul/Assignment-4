function calculateTax(income, expenses) {
    if(0 > income || 0 > expenses){
        return 'Invalid Input';
    }

    else if(income < expenses){
        return 'Invalid Input';
    }

    else{
        const TaxAmount=(income-expenses)*0.20;
        return TaxAmount;
    }
}

const TaxAmount = calculateTax(34000, 1753);
console.log(TaxAmount);
