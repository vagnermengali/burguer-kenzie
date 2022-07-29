import  logo  from "../../assets/logo.svg"
import "./style.css"
function Header({products ,setFilteredProducts, inputValue, setInputValue}) {

    function showProducts(item) {
        const itemAll = item.toLowerCase()
        const filter = products.filter((elem) => elem.name.toLowerCase().includes(itemAll) || elem.category.toLowerCase().includes(itemAll))
        setFilteredProducts(filter)
      }

    return (
        <header className="headerContainer">
            <div className="headerContentOne">
                <img src={logo} alt="" />
            </div>
            <div className="headerContentTwo">
                <div className="headerContentTwoBorderSucess">
                    <input 
                    type="text" 
                    placeholder="Digitar Pesquisa" 
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}/>
                    <button onClick={() => showProducts(inputValue)}>Pesquisar</button>
                </div>
            </div>
        </header>
    )
}

export default Header