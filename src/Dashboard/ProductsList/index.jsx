import Product from "../Product"
import "./style.css"

function ProductsList({products, handleClick, filteredProducts,  inputValue}) {

    return (
        <section className="listContainer">
            {inputValue.length > 0 ? (
                <>                
                <h1 className="resultSearch">Resultados para: <span>{inputValue}</span></h1>
                <ul className="list">
                    {filteredProducts.map((elem) =>(
                        <li key={elem.id} className="card">
                            <Product elem={elem} handleClick={handleClick} />
                        </li>
                    ))}
                </ul>
                </>
            ):(
                <>
                <ul className="list">
                    {products.map((elem) =>(
                        <li key={elem.id} className="card">
                            <Product elem={elem} handleClick={handleClick} />
                        </li>
                     ))}
                </ul>
                </>
            )}

        </section>
    )
}

export default ProductsList