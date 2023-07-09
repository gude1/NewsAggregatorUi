import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Console, getBaseUrl, getCookie, setCookie } from "../../utils";

type SignUpAttributes = {
  email: string;
  password: string;
  name: string;
  onSuccess?: () => void;
  onFail?: () => void;
};

export type SignupError = {
  email?: [string];
  name?: [string];
  password?: [string];
};

export type AuthResult = {
  message: string;
  data: {
    token: string;
  };
};

export type SignupPayloadError = {
  error: SignupError | string;
  status: number | string;
};

type SigninAttributes = {
  email: string;
  password: string;
  onSuccess?: () => void;
  onFail?: () => void;
};

export type SigninError = {
  email?: [string];
  password?: [string];
};

export type SigninPayloadError = {
  error: SignupError | string;
  status: number | string;
};

export const signUp = createAsyncThunk<void, SignUpAttributes>(
  "auth/signup",
  async (param, thunkApi) => {
    try {
      const res = await axios.post(
        `${getBaseUrl()}/auth/signup`,
        {
          name: param.name,
          email: param.email,
          password: param.email,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      return thunkApi.fulfillWithValue(res.data);
    } catch (err) {
      Console.log("signUp", String(err));
      if (axios.isAxiosError(err)) {
        console.log("axioserror", err.response);
        return thunkApi.rejectWithValue({
          error:
            err?.response?.data?.errors ||
            err?.response?.data?.error ||
            "Sign up failed, please try again",
          status: err.response?.status,
        });
      }
      return thunkApi.rejectWithValue({
        error: "Sign Up failed please try again",
        status: 400,
      });
    }
  }
);

export const signIn = createAsyncThunk<void, SigninAttributes>(
  "auth/signin",
  async (param, thunkApi) => {
    try {
      const res = await axios.post(
        `${getBaseUrl()}/auth/login`,
        {
          email: param.email,
          password: param.email,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      return thunkApi.fulfillWithValue(res.data);
    } catch (err) {
      Console.log("signIn", String(err));
      if (axios.isAxiosError(err)) {
        console.log("axioserror", err.response);
        return thunkApi.rejectWithValue({
          error:
            err?.response?.data?.errors ||
            err?.response?.data?.error ||
            "Login failed, please try again",
          status: err.response?.status,
        });
      }
      return thunkApi.rejectWithValue({
        error: "Login failed please try again",
        status: 400,
      });
    }
  }
);
