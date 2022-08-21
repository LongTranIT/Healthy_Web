import classNames from "classnames/bind";
import styles from "./Header.module.css"
// import Strings from "../../../common/Strings";
import Logo from "../../../components/Logo/Logo"

const cx=classNames.bind(styles)

function Header() {
	return ( 
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				{/* {Strings.App.TITLE} */}
				<div className={cx('logo')}>
					<Logo/>
				</div>
				
			</div>
		</header>
	);
}

export default Header;