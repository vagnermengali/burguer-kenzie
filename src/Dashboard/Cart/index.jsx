import CartTotal from "./CartTotal"
import CartProduct from "./CartProduct"
import "./style.css"

function Cart({currentSale, handleRemove, handleRemoveAll}) {

    return (
        <section className="sectionCart">
            <div className="cartContainer">
            <div  className="cartContentOne">
                <h1 className="cartContentOneTitle">Carrinho de compras</h1>
            </div>
            {currentSale.length > 0 ? (
                <div  className="cartContentTwo">
                    <ul>
                        {currentSale.map((elem) =>(
                            <li key={elem.id} className="cardCart">
                                <CartProduct elem={elem} handleRemove={handleRemove} />
                            </li>
                ))}
                    </ul>
                </div>
                ):(
                    <div  className="cartContentTwoEmpty">
                    <ul>
                        <h2 className="cartContentTwoTitle">Sua sacola está vazia</h2>
                        <p className="cartContentTwoSubTitle">Adicione itens</p> 
                    </ul>
                </div>
                    )}
            <CartTotal currentSale={currentSale} handleRemoveAll={handleRemoveAll}/>
            </div>
        </section>
    )
}

export default Cart