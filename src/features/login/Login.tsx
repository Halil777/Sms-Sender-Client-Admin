import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check credentials
    if (
      (phoneNumber === "+99363430338" && password === "12345!") ||
      (phoneNumber === "+99362737222" && password === "sensei")
    ) {
      localStorage.setItem("userLoggedIn", "true"); // Set the static value
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container>
      <Card>
        <FormSection>
          <h2>Sign In</h2>
          <br />
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit(e);
              }}
            />
            <Button type="submit">Sign In</Button>
          </Form>
        </FormSection>
        <ImageSection>
          <img src="/images/login.png" alt="Login" />
        </ImageSection>
      </Card>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5; /* Light background color */
`;

const Card = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ImageSection = styled.div`
  flex: 1;
  background: url("/images/login.png") no-repeat center center;
  background-size: cover;
`;

const FormSection = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #0e1217;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 400px;
  height: 54px;
  margin-bottom: 16px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1.5px solid #ededed;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #0e1217;
  outline: none;
`;

const Button = styled.button`
  width: 400px;
  height: 48px;
  background-color: #1a54eb;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #153f9b;
  }
`;

export default Login;
