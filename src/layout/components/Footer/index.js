import classNames from "classnames/bind";
import styles from "./Footer.module.css";
import Logo from "../../../components/Logo";

const cx = classNames.bind(styles);

function Footer() {
	return (
		<div className={cx("wrapper")}>
			<div className={cx("left-content")}>
				<span>Blog</span>
				<span>Điều khoản chung</span>
				<span>Chính sách Bảo vệ Dữ liệu</span>
				<span>Trung tâm trợ giúp</span>
			</div>
			<div className={cx("middle-content")}>
				<Logo/>
			</div>
			<div className={cx("right-content")}>
				<span>2022 BẢO LƯU MỌI QUYỀN</span>
			</div>
		</div>
	);
}

export default Footer;
