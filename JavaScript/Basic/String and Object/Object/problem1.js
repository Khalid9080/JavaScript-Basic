/* ---------------------- To show Specific Item form the Object Using for-of loop ----------------------*/

const products = [
    {id:1, name:'xiaomi Phone one night', price:19000},
    {id:2, name:'iphone', price:19000},
    {id:3, name:'mac book air', price:19000},
    {id:4, name:'lenevo yoga laptop 2025', price:19000},
    {id:5, name:'Dell ispiron laptop', price:19000},
    {id:6, name:'Samsung phone nore 7', price:19000},
    {id:7, name:'Nokia old age phone gone', price:19000},
    {id:8, name:'phone one', price:19000},
   
]


function matchedProducts (products,search){
    const matched=[];
    for (const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }

    return matched;
}



const result = matchedProducts(products,'laptop');
console.log(result);
