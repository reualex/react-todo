import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoginData } from "../../storage/thunks/user";

import BasicInput from "../../components/Inputs/BasicInput";
import BasicButton from "../../components/Buttons/BasicButton";

import "./styles.scss";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serverError = useSelector((state: IState) => state.user.errors);
  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    dispatch(fetchLoginData(data));
  };

  return (
    <div>
      <form className="auth-form">
        <BasicInput
          className="auth-form__input"
          placeholder="Enter login"
          label="login"
          register={register}
          required
          error={{
            isError: errors.login,
            text: "Login is required",
          }}
        />

        <BasicInput
          className="auth-form__input"
          type="password"
          label="password"
          placeholder="Enter password"
          register={register}
          required
          error={{
            isError: errors.password,
            text: "Password is required",
          }}
        />

        {serverError?.invalidData ? (
          <span className="error">{serverError.invalidData}</span>
        ) : (
          ""
        )}

        <BasicButton
          className="auth-form__button"
          type="submit"
          onClick={handleSubmit(onSubmit)}
          text="Sign in"
        />
      </form>
    </div>
  );
};

export default SignIn;
