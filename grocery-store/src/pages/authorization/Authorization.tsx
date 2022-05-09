import React from "react";
import { Container } from "../../components/ui/grid";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import './Authorization.scss'

const Authorization = () => {
	return (
		<>
			<Header />
			<Container>
				<div className="auth">
					<div className="auth_title">
						Добро пожаловать в Продуктс
					</div>
					<div className="auth_items">
						<div className="auth_item">
							<div className="auth_item__title">
								Телефон
							</div>
							<div className="auth_item__input">
								<input type="text" name="phone" />
							</div>
						</div>
						<div className="auth_item">
							<div className="auth_item__title">
								Пароль
							</div>
							<div className="auth_item__input">
								<input type="text" name="pass" />
							</div>
						</div>
					</div>
					<button className="auth_btn1">Авторизоваться</button>
					<button className="auth_btn2">Зарегистрироваться</button>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Authorization;