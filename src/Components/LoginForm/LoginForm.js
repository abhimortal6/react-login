
import {

    Form,
    Card,
    CardHeader,
    CardBody,
    Button,
    FormGroup,
    Label

} from "reactstrap";
import React from 'react';
import GenericInputFeild from "../GenericInputField/GenericInputField";
import { Component } from "react";


export default class LoginForm extends Component {

    state = {
        email: "",
        password: ""
    };

    onMailChange = e => {
        this.setState({ email: e.target.value })
    };

    onPassChange = e => {
        this.setState({ password: e.target.value })
    };

    render() {
        return (

            <Form className="login-form">
                <Card>

                    <CardHeader>Login</CardHeader>
                    <CardBody>
                        <FormGroup>
                            <Label>Email</Label>
                            <GenericInputFeild
                                placeholder="Email"
                                type="email"
                                value={this.state.email}
                                OnChange={this.onMailChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <GenericInputFeild
                                placeholder="Password"
                                type="password"
                                value={this.state.password}
                                OnChange={this.onPassChange}
                            />
                        </FormGroup>


                    </CardBody>
                    <Button type="submit">Submit</Button>
                </Card>

            </Form>

        );
    }
}

