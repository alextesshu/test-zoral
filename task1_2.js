function orderedSales(input) { 
    const clonedInput = input.slice(); 
     
    clonedInput.forEach(sale => { 
        sale.Total = sale.amount * sale.quantity; 
    }); 
 
    clonedInput.sort((a, b) => a.Total - b.Total); 
 
    return clonedInput; 
}

module.exports = orderedSales;
