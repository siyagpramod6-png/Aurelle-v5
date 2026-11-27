'use client';
import { createContext, useContext, useMemo, useState } from 'react';
import type { Product } from '@/lib/products';
type Item={product:Product; qty:number};
const Ctx=createContext<{items:Item[];add:(p:Product)=>void;remove:(id:number)=>void;count:number;total:number}>({items:[],add:()=>{},remove:()=>{},count:0,total:0});
export function CartProvider({children}:{children:React.ReactNode}){
 const [items,setItems]=useState<Item[]>([]);
 const add=(p:Product)=>setItems(old=>old.some(x=>x.product.id===p.id)?old.map(x=>x.product.id===p.id?{...x,qty:x.qty+1}:x):[...old,{product:p,qty:1}]);
 const remove=(id:number)=>setItems(old=>old.filter(x=>x.product.id!==id));
 const value=useMemo(()=>({items,add,remove,count:items.reduce((n,x)=>n+x.qty,0),total:items.reduce((n,x)=>n+x.qty*x.product.price,0)}),[items]);
 return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export const useCart=()=>useContext(Ctx);
