import "./style.css"

function CartTotal({currentSale, handleRemoveAll}) {
    const totalValue = currentSale.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    if(currentSale.length > 0) {
        return (
            <div className="totalContainer">
            <div className="totalValue">
                <h1>Total</h1>
                <p>R$
                {totalValue.toFixed(2)}
                </p>
            </div>
            <div className="totalBtg">
                <button onClick={() => handleRemoveAll()}>Remover todos</button>
            </div>
        </div>
        )
    }else{
        return null
    }
}

export default CartTotal