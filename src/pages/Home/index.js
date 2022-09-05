import classNames from "classnames/bind";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Home.module.css";
import Background from "../../assets/image/background.jpg";
import CheckIcon from "../../components/CheckIcon";
import Helpers from "../../common/Helpers";
import { CasesTwoTone } from "@mui/icons-material";
import { Typography } from "@mui/material";

import UserService from "../../services/user.service";
const userService= new UserService()
const cx = classNames.bind(styles);

function Home() {
	console.log(userService.getUsers());
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState(
		JSON.parse(sessionStorage.getItem("userInfo")) || {
			name: "",
			gender: "",
			age: 0,
			weight: 0,
			height: 0,
			activityLevel: 1.2,
		}
	);
	const [step, setStep] = useState(userInfo.name ? 3 : 0);

	const [account, setAccount] = useState({
		username: "",
		password: "",
	});

	function renderInputInfo() {
		switch (step) {
			case 0:
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
									setStep(1);
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
									setStep(1);
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
			case 1:
				return (
					<>
						<h2
							className={cx("text-highlight-color--design-color")}
						>
							Nhập tuổi
						</h2>
						<input
							id="age"
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
							min={0}
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
							min={0}
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
							min={0}
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
							defaultValue="1.2"
						>
							<option value="1.2">Không có hoặc ít</option>
							<option value="1.375"> 1-3 ngày/tuần</option>
							<option value="1.55">Vừa phải 3-5 ngày/tuần</option>
							<option value="1.725">
								Năng động 6-7 ngày/tuần
							</option>
						</select>
						<div
							className={cx(
								"section-home__gender-buttons_button__select-male",
								"section-home__gender-buttons_button"
							)}
							onClick={() => {
								setStep(2);
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
			case 2:
				return (
					<>
						<h2
							className={cx("text-highlight-color--design-color")}
						>
							Nhập tên
						</h2>
						<input
							className={cx("input")}
							value={userInfo.name}
							id="name"
							placeholder="Tên"
							onChange={(e) => {
								setUserInfo((preState) => {
									return {
										...preState,
										name: e.target.value,
									};
								});
							}}
						/>
						<h2
							className={cx("text-highlight-color--design-color")}
						>
							Username
						</h2>
						<input
							className={cx("input")}
							placeholder="Username"
							value={account.username}
							onChange={(e) => {
								setAccount((preState) => {
									return {
										...preState,
										username: e.target.value,
									};
								});
							}}
						/>
						<h2
							className={cx("text-highlight-color--design-color")}
						>
							Mật khẩu
						</h2>
						<input
							className={cx("input")}
							placeholder="Mật khẩu"
							type={"password"}
							value={account.password}
							onChange={(e) => {
								setAccount((preState) => {
									return {
										...preState,
										password: e.target.value,
									};
								});
							}}
						/>

						<div
							className={cx(
								"section-home__gender-buttons_button__select-male",
								"section-home__gender-buttons_button"
							)}
							onClick={() => {
								sessionStorage.setItem(
									"userInfo",
									JSON.stringify(userInfo)
								);
								navigate("/caculated");
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
			case 3:
				return (
					<>
						<div className={cx("flex-box")}>
							<h2
								className={cx(
									"text-highlight-color--design-color"
								)}
							>
								Tên
							</h2>
							<span className={cx("text-white")}>
								{userInfo.name}
							</span>
						</div>
						<div className={cx("flex-box")}>
							<h2
								className={cx(
									"text-highlight-color--design-color"
								)}
							>
								Tuổi
							</h2>
							<span className={cx("text-white")}>
								{userInfo.age}
							</span>
						</div>
						<div className={cx("flex-box")}>
							<h2
								className={cx(
									"text-highlight-color--design-color"
								)}
							>
								Giới tính
							</h2>
							<span className={cx("text-white")}>
								{userInfo.gender}
							</span>
						</div>
						<div className={cx("flex-box")}>
							<h2
								className={cx(
									"text-highlight-color--design-color"
								)}
							>
								Chiều cao
							</h2>
							<span className={cx("text-white")}>
								{userInfo.height} (cm)
							</span>
						</div>
						<div className={cx("flex-box")}>
							<h2
								className={cx(
									"text-highlight-color--design-color"
								)}
							>
								Cân nặng
							</h2>
							<span className={cx("text-white")}>
								{userInfo.weight} (kg)
							</span>
						</div>
						<div className={cx("flex-box")}>
							<h2
								className={cx(
									"text-highlight-color--design-color"
								)}
							>
								Calo mục tiêu
							</h2>
							<span className={cx("text-white")}>
								{userInfo.calo_muc_tieu} (kcal)
							</span>
						</div>

						<div
							className={cx(
								"section-home__gender-buttons_button__select-male",
								"section-home__gender-buttons_button"
							)}
							onClick={() => {
								sessionStorage.setItem(
									"userInfo",
									JSON.stringify(userInfo)
								);
								navigate("/caculated");
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
