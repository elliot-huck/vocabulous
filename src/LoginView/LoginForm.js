// This module renders the login form section of the main login view

import React, { Component } from "react"
import { Field, Label, Control, Input, Button } from "bloomer"
import LocalApi from "../Api/LocalApi"

export default class Login extends Component {

	state = {
		userNameInput: "",
		passwordInput: ""
	}

	// Updates state as input typed into either field
	handleChange = (evt) => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	}

	// Runs when the "Log in" button is clicked
	handleLogIn = () => {
		// Checks if the user name exists
		LocalApi.searchUsers(this.state.userNameInput)
			.then(response => {
				const validUser = (response.length !== 0);
				if (validUser) {
					// Checks if the password matches the name
					const passwordMatch = (response[0].password === this.state.passwordInput);
					if (passwordMatch) {
						// Calls the logIn function passed from App.js, passing it the id of the matched user
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

	// Runs when the "Register" is clicked (or the form is submitted)
	registerUser = (evt) => {
		evt.preventDefault();
		// Checks if the username is unique
		LocalApi.searchUsers(this.state.userNameInput)
			.then(response => {
				const userNameAvailable = (response.length === 0);
				if (userNameAvailable) {
					// Creates a newUser object and POSTs it to the database
					const newUser = {
						userName: this.state.userNameInput,
						password: this.state.passwordInput
					}
					LocalApi.addUser(newUser)
						.then(response => {
							// Calls the logIn function passed from App.js, passing it the id of the newly created user
							this.props.logMeIn(response.id);
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