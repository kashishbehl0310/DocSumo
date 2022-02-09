import React, { useState } from "react";
import styled from "styled-components";

import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";

import {
  login
} from "../../api"

const StyledHeading = styled.h1`
  color: var(--dsFontPrimary);
  margin: 0;
  font-size: 22px;
  text-align: center;
  font-weight: 600;
  margin: 32px 0px;
`;

const StyledErrorMessage = styled.p`
  font-size: 12px;
  margin: 0px;
  color: red;
  text-align: center;
`;

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const validate = () => {
    let error = {};

    if (!email) {
      error = {
        message: "Email is missing",
        field: "email"
      };
    } else if (!password) {
      error = {
        message: "Password is missing",
        field: "password"
      };
    }
    return error;
  }

  const handleLogin = () => {
    const error = validate();
    console.log({
      error
    })
    if (Object.keys(error).length) {
      setError(error)
      return;
    }

    const data = {
      email,
      password
    }

    login((err, res) => {
      if (err) {
        setError({
          message: "Inavlid User",
          field: "api"
        })
        return;
      }
      if (res.data && !res.error && res.status_code === 200) {
        window.sessionStorage.setItem("uname", res.data[0].full_name);
        history.push("/home");
      } else if (res.error) {
        setError({
          message: "Inavlid User",
          field: "api"
        })
      }
    }, data)
  }

  return (
    <div>
      <Card
        style={{
          maxWidth: "380px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative"
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
            borderRadius: "50%",
            boxShadow: "0 -1px 0 hsl(0deg 0% 43% / 5%)",
            position: "absolute",
            top: "-30px"
          }}
        >
         <svg height={32} width={32} viewBox="0 0 294 294"><g fill="#4d61fc" fill-rule="evenodd"><path fill-rule="nonzero" d="M62.874 225.046c-3.73 6.134-11.727 8.084-17.862 4.354-6.135-3.73-8.084-11.726-4.355-17.861l87.427-143.805c3.73-6.135 11.727-8.085 17.862-4.355 6.135 3.73 8.084 11.727 4.355 17.862L62.874 225.046zm82.798-143.85c-3.73-6.135-1.78-14.132 4.355-17.862 6.135-3.73 14.132-1.78 17.862 4.355l89.28 146.854c3.73 6.135 1.78 14.132-4.355 17.862-6.135 3.73-14.132 1.78-17.861-4.355l-89.28-146.854z"></path><path fill-rule="nonzero" d="M42.5 264c6.904 0 12.5-5.596 12.5-12.5S49.404 239 42.5 239 30 244.596 30 251.5 35.596 264 42.5 264zm0 30C19.028 294 0 274.972 0 251.5S19.028 209 42.5 209 85 228.028 85 251.5 65.972 294 42.5 294zm105-239c6.904 0 12.5-5.596 12.5-12.5S154.404 30 147.5 30 135 35.596 135 42.5 140.596 55 147.5 55zm0 30C124.028 85 105 65.972 105 42.5S124.028 0 147.5 0 190 19.028 190 42.5 170.972 85 147.5 85zm104 179c6.904 0 12.5-5.596 12.5-12.5s-5.596-12.5-12.5-12.5-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5zm0 30c-23.472 0-42.5-19.028-42.5-42.5s19.028-42.5 42.5-42.5 42.5 19.028 42.5 42.5-19.028 42.5-42.5 42.5z"></path><path d="M66.065 216.892c22.808-34.622 49.448-51.933 79.92-51.933 30.473 0 58.302 16.978 83.485 50.933l18.537-4.312C231.273 168.527 197.267 147 145.986 147s-85.23 21.527-101.845 64.58l21.924 5.312z"></path></g></svg>
        </div>
        <StyledHeading>Login to Docsumo</StyledHeading>
        <Input
          type="text"
          name={"email"}
          placeholder="Work Email"
          onChange={(e) => {
            setError({});
            setEmail(e.target.value);
          }}
          onEnter={() => {
            handleLogin();
          }}
          value={email}
          label="Work Email"
          hasError={error && error.field === "email"}
          errorMessage={error && error.message}
        />
        <Input
          type="password"
          name={"password"}
          placeholder="Password"
          onChange={(e) => {
            setError({});
            setPassword(e.target.value);
          }}
          onEnter={() => {
            handleLogin();
          }}
          value={password || ""}
          label="Password"
          hasError={error && error.field === "password"}
          errorMessage={error && error.message}
        />
        {
          error && error.field === "api"
            ? <StyledErrorMessage>
              {error.message}
            </StyledErrorMessage>
            : ""
        }
        <div
          style={{
            marginTop: "16px",
            width: "80%"
          }}
        >
          <Button
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Login;
