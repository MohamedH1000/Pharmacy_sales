import pharmacyLogo from '../assets/pharmacyLogo.webp'
import '../components/css/navigationBar.css'
import { Link } from 'react-router-dom';

function NavBar () {
    return (
    <header className="App">
      <Link to="" style={{textDecoration:'none',color: 'black'}}><img src= {pharmacyLogo} alt=''></img></Link>
      <nav>
        <ul>
          <li><Link to="/medication" style={{textDecoration:'none',color: 'black'}}>Medications</Link></li>
          <li><Link to="/hair-care" style={{textDecoration:'none',color:'black'}}>Hair care</Link></li>
          <li><Link to="/skin-care" style={{textDecoration:'none',color:'black'}}>Skin Care</Link></li>
          <li><Link to="/daily-essentials" style={{textDecoration:'none',color: 'black'}}>Daily Essentials</Link></li>
          <li><Link to="/mom-and-baby" style={{textDecoration:'none',color: 'black'}}>Mom and Baby</Link></li>
          <li><Link to="/makeup-and-accessories" style={{textDecoration:'none',color: 'black'}}>Makeup and Accessories</Link></li>
          <li><Link to="/health-care-devices" style={{textDecoration:'none',color: 'black'}}>Health Care Devices</Link></li>
          <li><Link to="/vitamins-and-supplements" style={{textDecoration:'none',color: 'black'}}>Vitamins and Supplements</Link></li>
        </ul>
      </nav>
    </header>
    );
}
export default NavBar;