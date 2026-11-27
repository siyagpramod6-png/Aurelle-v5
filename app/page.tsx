'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { products, categories } from '@/lib/products';
import { useCart } from '@/components/CartProvider';

export default function Home() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const { add } = useCart();
  const shown = useMemo(() => products.filter(p =>
    (category === 'All' || p.category === category) &&
    (p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 24), [category, query]);
  return <main>
    <div className="announcement">COMPLIMENTARY SHIPPING ON ORDERS ABOVE ₹1,999</div>
    <header className="header"><Link className="logo" href="/">AURELLE<span>®</span><small> ELEGANCE IN EVERY DETAIL</small></Link><nav><a href="#shop">SHOP</a><a href="#story">OUR STORY</a><Link href="/account">ACCOUNT</Link><Link href="/wishlist">WISHLIST</Link></nav><Link className="bag" href="/cart">BAG</Link></header>
    <section className="hero"><div className="heroText"><p className="eyebrow">THE NEW SEASON EDIT · 2026</p><h1>Quiet luxury.<br/><i>Bold presence.</i></h1><p>Considered essentials and elevated everyday pieces, for him and her.</p><a className="goldButton" href="#shop">DISCOVER THE COLLECTION ↗</a></div></section>
    <section className="intro" id="story"><p className="eyebrow">A NEW STANDARD OF EVERYDAY</p><h2>Made for the moments<br/><i>that matter.</i></h2><p>Thoughtful silhouettes. Versatile comfort. A refined point of view.</p></section>
    <section className="shop" id="shop"><div className="sectionTitle"><div><p className="eyebrow">CURATED FOR YOU</p><h2>Shop the <i>edit</i></h2></div><span>800+ STYLE OPTIONS</span></div>
      <input className="search" placeholder="Search products…" value={query} onChange={e=>setQuery(e.target.value)}/>
      <div className="filters">{['All',...categories].map(c=><button key={c} className={category===c?'active':''} onClick={()=>setCategory(c)}>{c}</button>)}</div>
      <div className="grid">{shown.map(p=><article className="product" key={p.id}><div className="productImage"><span>{p.tag}</span><div className="placeholderArt">{p.category}</div></div><div className="productInfo"><div><h3>{p.name}</h3><p>{p.description}</p></div><b>₹{p.price.toLocaleString('en-IN')}</b></div><button className="add" onClick={()=>add(p)}>ADD TO BAG</button></article>)}</div>
      <p className="catalogNote">Showing a curated preview. Full catalogue contains 800 generated product entries; replace placeholder catalogue imagery and verify product details before accepting orders.</p>
    </section>
    <section className="banner"><p className="eyebrow">THE AURELLE SIGNATURE</p><h2>Less, but <i>exceptional.</i></h2><p>Build a wardrobe around pieces you'll reach for, season after season.</p></section>
    <footer><div className="logo">AURELLE<small>ELEGANCE IN EVERY DETAIL</small></div><p>© 2026 AURELLE. ALL RIGHTS RESERVED.</p><div><Link href="/shipping">SHIPPING</Link><Link href="/returns">RETURNS</Link><Link href="/privacy">PRIVACY</Link><Link href="/terms">TERMS</Link></div></footer>
  </main>;
}
