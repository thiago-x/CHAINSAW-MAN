import './Header.css'
import HeaderSuperior from "../00 - img/header-superior.png"
import IconSuperior from "../00 - img/icon-superior.png"
import HeaderImg from "../00 - img/header.png"


function Header(){
    return(
        <header className='Header'>

            <div className='Header-img'>
                <img src={HeaderImg} alt="" />
            </div>

            <div className='Cards'>
                <ul className='Grid-cards'>
                    <li className='Item-card'></li>
                    <li className='Item-card'></li>
                    <li className='Item-card'></li>
                </ul>
            </div>
        </header>
    )
}

export default Header