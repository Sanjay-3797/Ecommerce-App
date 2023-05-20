import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Card from "./UI/Card";

const ContactUs = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const nameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setUserPhone(e.target.value);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      name: userName,
      email: userEmail,
      phone: userPhone,
    };

    try {
      const response = await fetch(
        "https://react-http-fetch-default-rtdb.firebaseio.com/ecom/userData.json",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong ....Retrying!");
      }

      const data = await response.json();
      console.log(data.name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <Form onSubmit={formSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={nameChangeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={emailChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter phone number"
            onChange={phoneChangeHandler}
          />
        </Form.Group>

        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default ContactUs;
