import classNames from "classnames/bind";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./DefaultLayout.module.css";
import { ToastContainer } from "react-toastify";


const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
	return (
		<div className={cx("wrapper")}>
			<Header />
			<ToastContainer />
			<div className={cx("content")}>{children}</div>
			<Footer />
		</div>
	);
}

export default DefaultLayout;
