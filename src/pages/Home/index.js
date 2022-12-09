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
import AccountService from "../../services/account.service";
import MenuTypeService from "../../services/menuType.service";
const userService= new UserService()
const accountService= new AccountService()
const menuTypeService= new MenuTypeService()
const cx = classNames.bind(styles);

function Home() {
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState(
		JSON.parse(sessionStorage.getItem("userInfo")) || {
			_id:"",
			ho_ten: "",
			gioi_tinh: "",
			tuoi: 0,
			can_nang: 0,
			chieu_cao: 0,
			van_dong: 1.2,
		}
	);
	const [step, setStep] = useState(userInfo.ho_ten ? 3 : 0);

	const [account, setAccount] = useState({
		username: "",
		password: "",
	});

	const handleSubmit=async()=>{
		// sessionStorage.setItem(
		// 	"userInfo",
		// 	JSON.stringify(userInfo)
		// );
		const accountId= (await accountService.signUp(account))['_id']
		const userCreated= await userService.addUser({
			ho_ten: userInfo.ho_ten,
			gioi_tinh: userInfo.gioi_tinh,
			tuoi: userInfo.tuoi,
			can_nang: userInfo.can_nang,
			chieu_cao: userInfo.chieu_cao,
			van_dong: userInfo.van_dong,
			calo_muc_tieu: 0,
			tai_khoan: accountId
		})
		menuTypeService.add({
			ten: 'Thực đơn tự tạo',
			mo_ta: 'Do người dùng tự tạo',
			thuc_don:[],
			nguoi_xem: userCreated['_id']
		})
		const user=await accountService.login(account.username,account.password)
		if(user.ho_ten){
			alert("Tạo tài khoản thành công")

			sessionStorage.setItem('userInfo', JSON.stringify(user))
			window.location.reload()
		}
		else{
			alert(user.message)
		}
		// navigate("/caculated");
	}

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
											gioi_tinh: "nữ",
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
											gioi_tinh: "nam",
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
										tuoi: e.target.value,
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
										chieu_cao: e.target.value,
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
										can_nang: e.target.value,
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
										van_dong: e.target.value,
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
							value={userInfo.ho_ten}
							id="name"
							placeholder="Tên"
							onChange={(e) => {
								setUserInfo((preState) => {
									return {
										...preState,
										ho_ten: e.target.value,
									};
								});
							}}
						/>
						<h2
							className={cx("text-highlight-color--design-color")}
						>
							Tên tài khoản
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
							placeholder="Password"
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
								handleSubmit()
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
								{userInfo.ho_ten}
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
								{userInfo.tuoi}
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
								{userInfo.gioi_tinh}
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
								{userInfo.chieu_cao} (cm)
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
								{userInfo.can_nang} (kg)
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
								navigate('/caculated')
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
									Chọn calo
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
					Hỗ trợ lên thực đơn và tập thể dục khoa học
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
									Tính toán lượng calo cần thiết cho cơ thể
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
									Xem danh sách thực thẩm - Calo
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
									Lập thực đơn hằng ngày
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
									Tập thể dục theo hướng dẫn
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
									Thống kê
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
									HealSci
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
										Thông tin về calo cơ thể cần
									</div>
								</li>
								<li className={cx("section-youget__list-item")}>
									<CheckIcon />
									<div
										className={cx(
											"section-youget__list-text_sequence"
										)}
									>
										Lập thực đơn phù hợp theo khoa học
									</div>
								</li>
								<li className={cx("section-youget__list-item")}>
									<CheckIcon />
									<div
										className={cx(
											"section-youget__list-text_sequence"
										)}
									>
										Tập thể dục khoa học
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
