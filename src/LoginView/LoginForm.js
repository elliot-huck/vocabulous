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

	handleLogIn = () => {
		LocalApi.searchUsers(this.state.userNameInput)
			.then(response => {
				const validUser = (response.length !== 0);
				if (validUser) {
					const passwordMatch = (response[0].password === this.state.passwordInput);
					if (passwordMatch) {
						const userId = response[0].id;
						this.props.logMeIn(userId);
					} else {
						alert("Sorry, that password is incorrect");
					}
				} else {
					alert("Sorry, we do not have an account with that user name")
				}
			})

	}

	registerUser = (evt) => {
		evt.preventDefault();
		console.log("registering")
		LocalApi.searchUsers(this.state.userNameInput)
			.then(response => {
				const userNameAvailable = (response.length === 0);
				if (userNameAvailable) {
					console.log("Registering user...");
					const newUser = {
						userName: this.state.userNameInput,
						password: this.state.passwordInput
					}
					console.log("New User:", newUser);
					LocalApi.addUser(newUser)
						.then(response => {
							console.log("User added!")
						});
				} else {
					alert("Sorry, that user name is already taken")
				}
			});

	}

	render() {
		return (
			<form onSubmit={(evt) => { this.registerUser(evt) }}>
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
					<Button
						onClick={() => { this.handleLogIn() }}>
						Log in
					</Button>
					<Button type="submit">
						Register
					</Button>
				</Field>

			</form>
		)
	}
}