export type Product = { id:number; name:string; category:string; price:number; tag:string; description:string; gender:string };
const styles = ['Heritage','Alpine','Essential','Classic','Signature','Cloudweight','Relaxed','Ribbed','Everyday','Luxe','Modern','Tailored','Studio','Weekend','Urban','Refined','Softtouch','Premium','Minimal','Timeless'];
const types: Record<string,string[]> = {
  Jackets:['Puffer Jacket','Quilted Jacket','Wool Coat','Bomber Jacket','Trench Coat'],
  Hoodies:['Zip Hoodie','Classic Hoodie','Oversized Hoodie','Fleece Hoodie','Pullover Hoodie'],
  Knitwear:['Cashmere Blend Sweater','Ribbed Knit','Crewneck Knit','Mock-Neck Sweater','Cardigan'],
  Sweatshirts:['Crew Sweatshirt','Half-Zip Sweatshirt','Relaxed Sweatshirt','Fleece Sweatshirt','Graphic Sweatshirt'],
  Shirts:['Oxford Shirt','Woollen Shirt','Linen Shirt','Overshirt','Casual Shirt'],
  Dresses:['Midi Dress','Shirt Dress','Evening Dress','Knit Dress','Maxi Dress'],
  Trousers:['Tailored Trousers','Wide-Leg Pants','Straight Fit Pants','Cargo Trousers','Pleated Pants'],
  Accessories:['Leather Belt','Everyday Tote','Wool Scarf','Minimal Cap','Classic Wallet']
};
export const categories = Object.keys(types);
export const products: Product[] = Array.from({length:800},(_,i)=>{
  const category=categories[i%categories.length];
  const options=types[category];
  const gender=i%2===0?'Men':'Women';
  const name=`${styles[Math.floor(i/8)%styles.length]} ${options[Math.floor(i/2)%options.length]}`;
  const base = category==='Jackets'?2499:category==='Dresses'?2199:category==='Accessories'?799:1499;
  return {id:i+1,name,category,price:base+((i*137)%900),tag:i%11===0?'BESTSELLER':i%7===0?'NEW':'',description:`${gender} · Premium everyday collection`,gender};
});
