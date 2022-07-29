import "./style.css"

function Product({elem, handleClick}) {

    return (
        <>
        <div className="divContainer">
            <div className="divContentOne">
                <img src={elem.img} alt=""/>
            </div>
            <div className="divContentTwo">
                <h1 className="contentName">{elem.name}</h1>
                <h2 className="contentCategory">{elem.category}</h2>
                <p className="contentPrice">R$ {elem.price.toFixed(2)}</p>
                <button onClick={() => handleClick(elem)} className="contentBtg">Adicionar</button>
            </div> 
        </div>
        </>
    )
}

export default Product