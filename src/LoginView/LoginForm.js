import React, { Component } from "react"
import { Field, Label, Control, Input } from "bloomer"
import { Button } from "../../node_modules/bloomer/lib/elements/Button";

export default class Login extends Component {
  render() {
    return (
      <form>
        <Field isGrouped>
          <Label>User name:</Label>
          <Control>
            <Input type="text"></Input>
          </Control>
        </Field>

        <Field isGrouped>
          <Label>Password:</Label>
          <Control>
            <Input type="password"></Input>
          </Control>
        </Field>

      <Field isGrouped>
        <Button>Log in</Button>
        <Button>Register</Button>
      </Field>

      </form>
    )
  }
}