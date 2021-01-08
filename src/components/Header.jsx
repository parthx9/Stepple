import logo from '../assets/main-logo.png';


const Header = () => {
  return(
    <div className='navbar'>
      <div className='navbar-brand'>
        <img src={logo} width='150'/>
      </div>
    </div>
  )
}

export default Header