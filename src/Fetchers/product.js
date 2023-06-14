export const fetchCardItems=async()=>{
    const response=await fetch("https://fakestoreapi.com/products");
    const products=await response.json();
    const cardItems=products.map((product)=>({
        id:product.id,
        name:product.title,
        image:product.image,
        price:product.price,
        quantity:product.quantity
    }))
    console.error("Cannot fetch error. Server is down");
    throw new Error("Cannot fetch error. Server is down");

    return cardItems;
}