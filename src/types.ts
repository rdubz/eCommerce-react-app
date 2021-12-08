export type item = {
    id:number,
    name:string,
    description:string,
    price:number,
    sale_price:number,
    sizes:size[]
};

export type size = {
    size:string, 
    quantity:number
};

export {}