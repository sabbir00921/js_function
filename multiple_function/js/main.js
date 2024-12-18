/*
Try to build a Cash Memo Software
  !! need to add vat
  !! need to add discount
  !! Output for display details
*/
const productPrice = +prompt("Enter the price of product");
const vatRate = +prompt("Enter the VAT rate");
const discountRate = +prompt("Enter the offering discount rate");

const vatAddert = (actualPrice, vat) => {
        const vatAmount = (actualPrice * vat) / 100;
        const priceWithvat = actualPrice + vatAmount;
        // console.log(priceWithVat);
        return [priceWithvat, vatAmount];
}

const discountAdder = (priceWithvat, discountRate) => {
        const discountAmount = (priceWithvat * discountRate) / 100;
        const finalPrice = priceWithvat - discountAmount;
        return [finalPrice,discountAmount];
}

const printMemo =  (pActalprice, pVatamount, pPricewithvat, pDiscount, pFinalprice) =>{
        document.getElementById("demo").innerHTML = (`<strong>INVOICE</strong> </br>
        --------------------------------------------------</br>
                Product price           : ${pActalprice} TK</br>
                VAt amount              : ${pVatamount} TK</br>
        --------------------------------------------------</br>
                Price including VAT     : ${pPricewithvat} TK</br>
                Discount amount         : ${pDiscount} TK</br>
        --------------------------------------------------</br>
                Total Amount            : ${Math.round(pFinalprice)} TK</br></br>


        Enjoy your shopping with </br> ${discountRate}% discount and ${vatRate}% VAT</br></br>
        Develope by MD SABBIR
        `)
}

let result = vatAddert(productPrice, vatRate)
// console.log(result)
let discountInfo = discountAdder(result[0], discountRate)
// console.log(discountInfo)
printMemo(productPrice,result[1],result[0],discountInfo[1],discountInfo[0],)