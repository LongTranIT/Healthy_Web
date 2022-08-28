import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./Home.module.css";
import Background from "../../assets/image/background.jpg";
import CheckIcon from "../../components/CheckIcon/CheckIcon";
import Helpers from "../../common/Helpers";

const cx = classNames.bind(styles);

function Home() {
	const [userInfo, setUserInfo] = useState({
		name: "",
		gender: "",
		age: 0,
		weight: 0,
		height: 0,
		activityLevel: 1.2,
	});

	function renderInputInfo() {
		switch (userInfo.gender) {
			case "":
				return (
					<>
						<h1>
							Tìm hiểu xem bạn cần bao nhiêu calo trong thực đơn
							hàng ngày
						</h1>
						<div
							className={cx(
								"section-home__gender-buttons",
								"container-fluid"
							)}
						>
							<div
								className={cx(
									"section-home__gender-buttons_button__select-female",
									"section-home__gender-buttons_button"
								)}
								onClick={() => {
									setUserInfo((preState) => {
										return {
											...preState,
											gender: "nữ",
										};
									});
								}}
							>
								<div
									className={cx(
										"section-home__gender-buttons_button__select"
									)}
								>
									<img
										data-src="https://assets.appsforfit.com/assets/img/keto/icons/woman.svg"
										className={cx(
											"section-home__gender-buttons_button__icon"
										)}
										alt="man-icon"
										src="https://assets.appsforfit.com/assets/img/keto/icons/woman.svg"
									/>
									<span
										className={cx(
											"section-home__gender-buttons_button__title"
										)}
									>
										Nữ
									</span>
								</div>
							</div>
							<div
								className={cx(
									"section-home__gender-buttons_button__select-male",
									"section-home__gender-buttons_button"
								)}
								onClick={() => {
									setUserInfo((preState) => {
										return {
											...preState,
											gender: "nam",
										};
									});
								}}
							>
								<div
									className={cx(
										"section-home__gender-buttons_button__select"
									)}
								>
									<img
										data-src="https://assets.appsforfit.com/assets/img/keto/icons/man.svg"
										className={cx(
											"section-home__gender-buttons_button__icon"
										)}
										alt="man-icon"
										src="https://assets.appsforfit.com/assets/img/keto/icons/man.svg"
									/>
									<span
										className={cx(
											"section-home__gender-buttons_button__title"
										)}
									>
										Nam
									</span>
								</div>
							</div>
						</div>
					</>
				);
			default:
				return (
					<>
						<h2
							className={cx("text-highlight-color--design-color")}
						>
							Nhập tuổi
						</h2>
						<input
							className={cx("input")}
							placeholder="Tuổi"
							type={"number"}
							onChange={(e) => {
								setUserInfo((preState) => {
									return {
										...preState,
										age: e.target.value,
									};
								});
							}}
						/>
						<h2
							className={cx("text-highlight-color--design-color")}
						>
							Nhập chiều cao (Cm)
						</h2>
						<input
							className={cx("input")}
							placeholder="Chiều cao"
							type={"number"}
							onChange={(e) => {
								setUserInfo((preState) => {
									return {
										...preState,
										height: e.target.value,
									};
								});
							}}
						/>
						<h2
							className={cx("text-highlight-color--design-color")}
						>
							Nhập cân nặng (Kg)
						</h2>
						<input
							className={cx("input")}
							placeholder="Cân nặng"
							type={"number"}
							onChange={(e) => {
								setUserInfo((preState) => {
									return {
										...preState,
										weight: e.target.value,
									};
								});
							}}
						/>
						<h2
							className={cx("text-highlight-color--design-color")}
						>
							Chọn mức độ vận động
						</h2>
						<select
							name="example"
							className={cx("input")}
							onChange={(e) => {
								setUserInfo((preState) => {
									return {
										...preState,
										activityLevel: e.target.value,
									};
								});
							}}
							defaultValue= "1.2"
						>
							<option value="1.2">Không có hoặc ít</option>
							<option value="1.375"> 1-3 ngày/tuần</option>
							<option value="1.55">Vừa phải 3-5 ngày/tuần</option>
							<option value="1.725">Năng động 6-7 ngày/tuần</option>
						</select>
						<div
							className={cx(
								"section-home__gender-buttons_button__select-male",
								"section-home__gender-buttons_button"
							)}
							onClick={()=>{
								sessionStorage.setItem("userInfo",JSON.stringify(userInfo))
								console.log(Helpers.calculateCalo(
									userInfo.gender,
									userInfo.age,
									userInfo.weight,
									userInfo.height,
									+userInfo.activityLevel
								));
							}}
							style={{
								width: "300px",
								position: "absolute",
								top: "50%",
								left: "55%",
							}}
						>
							<div
								className={cx(
									"section-home__gender-buttons_button__select"
								)}
							>
								<span
									className={cx(
										"section-home__gender-buttons_button__title"
									)}
								>
									Xác Nhận
								</span>
							</div>
						</div>
					</>
				);
		}
	}

	return (
		<div className={cx("wrapper")}>
			<div className={cx("top-content")}>
				<img
					className={cx("background")}
					src={Background}
					alt="Background"
				/>
				<div className={cx("content-on-background")}>
					{renderInputInfo()}
				</div>
			</div>

			<div className={cx("middle-content")}>
				<h1>
					Đạt được mục tiêu với Hướng Dẫn Chế Độ Ăn Kiêng Keto Cơ Bản
					của chúng tôi
				</h1>
				<div className={cx("section-youget__content_need")}>
					<div className={cx("section-youget__side")}>
						<ul className={cx("section-youget__list")}>
							<li
								className={cx(
									"section-youget__list-item_reason"
								)}
							>
								<span
									className={cx(
										"section-youget__list-item_number"
									)}
								>
									01
								</span>
								<div
									className={cx("section-youget__list-text")}
								>
									Mô Tả Sơ Lược về Chế Độ Ăn Miễn Phí và Tức
									Thì
								</div>
							</li>
							<li
								className={cx(
									"section-youget__list-item_reason"
								)}
							>
								<span
									className={cx(
										"section-youget__list-item_number"
									)}
								>
									02
								</span>
								<div
									className={cx("section-youget__list-text")}
								>
									Chuẩn Bị Bữa Ăn Nhanh
								</div>
							</li>
							<li
								className={cx(
									"section-youget__list-item_reason"
								)}
							>
								<span
									className={cx(
										"section-youget__list-item_number"
									)}
								>
									03
								</span>
								<div
									className={cx("section-youget__list-text")}
								>
									Được Thiết Kế Riêng Cho Bạn
								</div>
							</li>
							<li
								className={cx(
									"section-youget__list-item_reason"
								)}
							>
								<span
									className={cx(
										"section-youget__list-item_number"
									)}
								>
									04
								</span>
								<div
									className={cx("section-youget__list-text")}
								>
									Một Gói Đăng Ký Chi Phối Tất Cả Các Công
									Thức Nấu Ăn
								</div>
							</li>
							<li
								className={cx(
									"section-youget__list-item_reason"
								)}
							>
								<span
									className={cx(
										"section-youget__list-item_number"
									)}
								>
									05
								</span>
								<div
									className={cx("section-youget__list-text")}
								>
									Hướng Dẫn Chi Tiết về Keto
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div className={cx("section-with-image")}>
					<div className={cx("section-benefits__image-wrap")}>
						<img
							data-src="https://assets.appsforfit.com/assets/img/keto/design-home.png"
							className={cx("section-benefits__image")}
							alt="healthy food"
							src="https://assets.appsforfit.com/assets/img/keto/design-home.png"
						/>
					</div>
					<div className={cx("section-youget__content")}>
						<div className={cx("section-youget__title title")}>
							<span className={cx("benefits-title")}>
								<span
									className={cx(
										"text-highlight-color--design-color"
									)}
								>
									Yourketo.diet
								</span>
							</span>
							<br />
							Những gì mà bạn sẽ nhận được
						</div>
						<div className={cx("section-youget__side")}>
							<ul className={cx("section-youget__list")}>
								<li className={cx("section-youget__list-item")}>
									<CheckIcon />
									<div
										className={cx(
											"section-youget__list-text_sequence"
										)}
									>
										Step-by-step video tutorials
									</div>
								</li>
								<li className={cx("section-youget__list-item")}>
									<CheckIcon />
									<div
										className={cx(
											"section-youget__list-text_sequence"
										)}
									>
										Công thức món ăn ngon và dễ nấu
									</div>
								</li>
								<li className={cx("section-youget__list-item")}>
									<CheckIcon />
									<div
										className={cx(
											"section-youget__list-text_sequence"
										)}
									>
										Danh sách các món đồ cần mua mỗi tuần có
										thể in ra và bao quát tất cả các thành
										phần
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className={cx("bottom-content")}></div>
		</div>
	);
}

export default Home;
