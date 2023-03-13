import React, { ChangeEvent } from "react";
import { saveQRCode } from "../api/Auth";
import { redirect } from "react-router-dom";

class QRCodeForm extends React.Component {
	state = {
		secret : ''
	}

	constructor(props: any) {
		super(props);
		this.setSecret = this.setSecret.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const res = saveQRCode(this.state.secret);
		localStorage.setItem("token", JSON.stringify(res));
		redirect("/matchmaking");
	}

	setSecret(e: ChangeEvent<HTMLInputElement>) : void {
		this.setState({ secret : e.target.value });
	}

	render() {
		return (
			<div>
				<label>Secret : <input type="text" onChange={this.setSecret} /> </label>
				<button onClick={this.handleClick}>Envoyer</button>
			</div>
		);
	}
}

export default QRCodeForm;