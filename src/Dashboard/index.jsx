import Header from "./Header"
import ProductsList from "./ProductsList"
import Cart from "./Cart/"
import { useState } from "react";
import { useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import "./style.css"

function Dashboard() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentSale, setCurrentSale] = useState([])
    const [inputValue, setInputValue] = useState("");
  
    console.log(filteredProducts)
    useEffect(() =>{
      fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
    }, [])
  
    function handleClick(item) {
        const find = currentSale.find((elem) => elem === item)
        if(find) {
            return toast.error("Produto já adicionado ao carrinho!", {
                style: {
                  border: '1px solid var(--warning)',
                  padding: '16px',
                  color: 'var(--gray-100)',
                },
                iconTheme: {
                  primary: 'var(--warning)',
                  secondary: 'var(--white)',
                },
              });
        }else{
            setCurrentSale([item,...currentSale])
            toast.success("Produto adicionado ao carrinho!", {
                style: {
                  border: '0.15vw solid var(--color-primary)',
                  padding: '16px',
                  color: 'var(--gray-100)',
                },
                iconTheme: {
                  primary: 'var(--color-primary)',
                  secondary: 'var(--white)',
                },
              });
        } 
}

    function handleRemove(item) {
        const filter = currentSale.filter((elem) => elem !== item)
        setCurrentSale(filter)
        toast.error("Item removido do carrinho!", {
            style: {
              border: '1px solid var(--negative)',
              padding: '16px',
              color: 'var(--gray-100)',
            },
            iconTheme: {
              primary: 'var(--negative)',
              secondary: 'var(--white)',
            },
          });
    }

    function handleRemoveAll() {
        setCurrentSale([])
        
        toast.error("Seu carrinho esta vazio!", {
          style: {
            border: '1px solid var(--negative)',
            padding: '16px',
            color: 'var(--gray-100)',
          },
          iconTheme: {
            primary: 'var(--negative)',
            secondary: 'var(--white)',
          },
        });
    }

    return (
        <>
        <Header setFilteredProducts={setFilteredProducts} products={products}  inputValue={inputValue} setInputValue={setInputValue}/>
        <main className="mainContainer">
            <div className="divProductAll">
                <ProductsList products={products} handleClick={handleClick} filteredProducts={filteredProducts}  inputValue={inputValue}/>
                <Cart currentSale={currentSale} handleRemove={handleRemove} handleRemoveAll={handleRemoveAll}/> 
            </div>
        </main>
        <Toaster   
        position="bottom-right"
        reverseOrder={false}/>
        </>
    )
}

export default Dashboard