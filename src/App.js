import './App.css';
import { useEffect, useState } from 'react';
import Products from './components/Products';
import Pagination from './components/Pagination';

function App() {

  
  const [products,setProducts] = useState([]);
  const [page,setPage] = useState(1);
  const [totalPages,setTotalPage] = useState(0);
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
},[page]) 

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`)
    const data = await res.json();
    if(data && data.products) {
      setProducts(data.products)
      setTotalPage(data.total/10);
    }
  }
  return (
    <div className="App">
      { products.length > 0 && <Products products={products} page={page} /> }
      { products.length > 0 && <Pagination totalPages={totalPages} products={products} page={page} setPage={setPage} />}
    </div>
  );
}

export default App;
