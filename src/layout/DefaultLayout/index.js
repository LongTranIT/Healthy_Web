import classNames from "classnames/bind";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./DefaultLayout.module.css";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
	return (
		<div className={cx("wrapper")}>
			<Header />
			<div className={cx("content")}>{children}</div>
			<Footer />
		</div>
	);
}

export default DefaultLayout;
