import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react'
import { ReactComponent as Logo } from '../../../assets/crown.svg'
const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className="logo-container" to="/"><Logo className="logo" /></Link>

                <div className="nav-link-container">
                    <Link className="nav-link" to="/shop">shop</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};
export default Navigation;