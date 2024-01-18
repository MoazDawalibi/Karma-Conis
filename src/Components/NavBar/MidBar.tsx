import KarimLogo from '../../Layout/app/KarimLogo'
import InputAutoComplete from './InputAutoComplete'
import { Link } from 'react-router-dom';
import ViewCart from './ViewCart';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import WithDrawer from '../../HighOrderComponent/WithDrawer';
import { Button } from 'antd';
import Theme from '../Utils/Theme';
import Translate from '../Utils/Translate';

const MidBar = () => {

  return (
    <div className="MidBar">
        <div className='MidBar_Left'>  
          <div className='logo_contianer'>
            <Link className='logo' to="/">
              <img src='../logo-without-text.png' alt='logo' className='logo'/>
            </Link>
          </div>
        </div>
        <div className='MidBar_Mid'>
            <InputAutoComplete/>
        </div>
        <div className='MidBar_Right'>
        <div className="Cart_Icon">
        <Link to="/auth">
          <UserOutlined  />
        </Link>

          </div>
   <ViewCart/>
    

        </div>
        <div className='MediaMenu'> 
        <WithDrawer
        
              title='Nav Links'
              button={<Button icon={<MenuOutlined />} className='MenuButton' type='primary' />}
            >
              <div className="Menu_anv">
                {/* <Translate/> */}

                <Link className='Link' to={'/'} >  <h1>Home</h1> </Link>
                <Link className='Link' to={'/about'} >  <h1>About</h1> </Link>
                <Link className='Link' to={'/contact'} >  <h1>Contact</h1> </Link>
                <Link className='Link' to={'/products'} >  <h1>Products</h1> </Link>
              </div>
              {/* <Theme/> */}

              <div className="Cart_Icon menu_nav_icon">
                <Link to="/auth">
                  <UserOutlined  />
                </Link>
              </div>
              <ViewCart/>

            </WithDrawer>
      </div>
    </div>
  )
}

export default MidBar