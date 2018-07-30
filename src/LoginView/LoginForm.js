import React, { Component } from "react"
import { Field, Label, Control, Input, Button } from "bloomer"
// import {  } from "../../node_modules/bloomer/lib/elements/Button";
import LocalApi from "../Api/LocalApi"

export default class Login extends Component {

	state = {
		userNameInput: "",
		passwordInput: ""
	}

	handleChange = (evt) => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	}

	registerUser = () => {
		console.log("Registering user...");
		const newUser = {
			userName: this.state.userNameInput,
			password: this.state.passwordInput
		}
		console.log("New User:", newUser);
		LocalApi.addUser(newUser).then( response => {
			console.log("User added!")
		}

		)
	}

	render() {
		return (
			<form>
				<Field isGrouped>
					<Label>User name:</Label>
					<Control>
						<Input required type="text" id="userNameInput"
							onChange={(evt) => { this.handleChange(evt) }}></Input>
					</Control>
				</Field>

				<Field isGrouped>
					<Label>Password:</Label>
					<Control>
						<Input required type="password" id="passwordInput"
							onChange={(evt) => { this.handleChange(evt) }}></Input>
					</Control>
				</Field>

				<Field isGrouped>
					<Button>Log in</Button>
					<Button onClick={this.registerUser}>Register</Button>
				</Field>

			</form>
		)
	}
}