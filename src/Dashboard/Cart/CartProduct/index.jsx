import "./style.css" 

function CartProduct({elem, handleRemove}) {

    return (
        <div className="cardCartContainer">
            <div className="cartImg">
                <img src={elem.img} alt=""/>
            </div>
            <div className="cartDetailsContainer">
                <div className="cartDetailsContent">
                    <h1>{elem.name}</h1>
                    <p className="cartDetailsCategory">{elem.category}</p>
                </div>
                <div className="cartBtg">
                    <button onClick={() => handleRemove(elem)}>Remover</button>
                </div>
            </div>
        </div>
    )

}

export default CartProduct