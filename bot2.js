async function UstToTry() {
    const apiLink = 'https://api.exchangeratesapi.io/latest?base=USD';

    const response = await fetch(apiLink);
    const data = await response.json();

    return data.rates.TRY;
}

async function EuroToTry() {
    const apiLink = 'https://api.exchangeratesapi.io/latest?base=EUR';

    const response = await fetch(apiLink);
    const data = await response.json();
    
    return data.rates.TRY;
}