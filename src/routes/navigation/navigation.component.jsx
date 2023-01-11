import {Outlet, Link} from "react-router-dom";
import { Fragment} from "react";
import { ReactComponent as CrwnLogo} from "../../assests/crown.svg";
import './navigation.styles.scss';

function Navigation() {
    return (
        <Fragment>
            <div className={'navigation'}>
                <Link className={'logo-container'} to={'/'}>
                    <CrwnLogo className={'logo'} />
                </Link>

                <div className={'nav-links-container'}>
                    <Link className={'nav-links-container'} to={'/shop'}>
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}



export default Navigation