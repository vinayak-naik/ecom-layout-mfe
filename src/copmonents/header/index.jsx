import style from './header.module.css'
import amazonLogo from '../../assets/logo/amazon.png'
import indianFlag from '../../assets/logo/indianFlag.png'
import cartIcon from '../../assets/icons/cartIcon.png'
import { IconButton } from '@mui/material'
import { ArrowDropDown, Search } from '@mui/icons-material'

const InfoBox = (props) => {
  const { first, second } = props
  return (
    <div className={style.infoBox}>
      <div className={style.first}>{first}</div>
      <div className={style.second}>{second}</div>
    </div>
  )
}
const CartBox = () => {
  return (
    <div className={style.cartBox}>
      <div className={style.cartCount}>2</div>
      <img className={style.cartIcon} src={cartIcon} alt="amazon" />
    </div>
  )
}
const LanguageBox = () => {
  return (
    <div className={style.languageBox}>
      <div className={style.langIconBox}>
        <img className={style.langIcon} src={indianFlag} alt="amazon" />
      </div>
      <span className={style.langName}>EN</span>
      <span className={style.DownIcon}>
        <ArrowDropDown sx={{ color: 'gray' }} />
      </span>
    </div>
  )
}
const SearchContainer = () => {
  return (
    <div className={style.searchContainer}>
      <div className={style.categoryButton}>
        <span className={style.categoryName}>All</span>
        <span>
          <ArrowDropDown sx={{ color: 'gray', paddingTop: '4px' }} />
        </span>
      </div>
      <div className={style.searchBox}>
        <input placeholder="Search Amazon.in" />
      </div>
      <div className={style.searchButton}>
        <IconButton>
          <Search />
        </IconButton>
      </div>
    </div>
  )
}
const LogoBox = () => {
  return (
    <div className={style.logoBox}>
      <img className={style.amazonLogo} src={amazonLogo} alt="amazon" />
    </div>
  )
}
// ==========================================================================================

const HeaderComponent = () => {
  return (
    <div className={style.container}>
      <LogoBox />
      <InfoBox first="Deliver to Vinayak" second="Bengaluru 560100" />

      <SearchContainer />
      <LanguageBox />
      <InfoBox first="Hello, Vinayak" second="Account & Lists" />
      <InfoBox first="Returns" second="& Orders" />
      <CartBox />
    </div>
  )
}

export default HeaderComponent
