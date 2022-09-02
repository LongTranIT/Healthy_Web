import classNames from "classnames/bind";
import styles from "./CheckIcon.module.css";

const cx = classNames.bind(styles);

function CheckIcon() {
	return (
		<svg
			className={cx("checkbox-button__unit-icon")}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="12" cy="12" r="12" fill="url(#keto)"></circle>
			<path
				d="m9.75 15.127-2.602-2.602a.748.748 0 0 0-1.058 1.057l3.135 3.136a.747.747 0 0 0 1.058 0l7.935-7.935a.748.748 0 0 0-1.058-1.058l-7.41 7.402z"
				fill="#fff"
			></path>
			<defs>
				<linearGradient
					id="keto"
					x1="0"
					y1="12"
					x2="24"
					y2="12"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#F53373"></stop>
					<stop offset="1" stopColor="#BF51E8"></stop>
					<stop offset="1" stopColor="#BF51E8"></stop>
				</linearGradient>
				<linearGradient
					id="intermittent-fasting"
					x1="0"
					y1="12"
					x2="24"
					y2="12"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FBA34A"></stop>
					<stop offset="1" stopColor="#F47B60"></stop>
				</linearGradient>
			</defs>
		</svg>
	);
}

export default CheckIcon;
