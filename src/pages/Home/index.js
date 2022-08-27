import classNames from "classnames/bind";
import { useState } from "react";
import { TextField } from "@mui/material";

import styles from "./Home.module.css";
import Background from "../../assets/image/background.jpg";
import CheckIcon from "../../components/CheckIcon/CheckIcon";

const cx = classNames.bind(styles);

function Home() {
	const [stepInputInfo, setStepInputInfo] = useState(1);

	function renderInputInfo() {
		switch (stepInputInfo) {
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
								onClick={() => console.log("Nu")}
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
										Nu
									</span>
								</div>
							</div>
							<div
								className={cx(
									"section-home__gender-buttons_button__select-male",
									"section-home__gender-buttons_button"
								)}
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
						<h1>Nhập chiều cao và cân nặng</h1>
						<div className={cx('inputs-box')}>
							<input className={cx('input')} placeholder="Cân nặng"/>
							<TextField
								id="outlined-basic"
								label="Outlined"
								variant="outlined"
								fullWidth
								sx={{ input: { color: "white", border: "white" } }}
							/>
							<TextField
								id="filled-basic"
								label="Filled"
								variant="filled"
							/>
							<TextField
								id="standard-basic"
								label="Standard"
								variant="standard"
							/>
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
