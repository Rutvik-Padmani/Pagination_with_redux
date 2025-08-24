

export async function getPageData() {
    let p = await fetch("https://fakestoreapi.com/products");
    let d= await p.json();
    return d;
}