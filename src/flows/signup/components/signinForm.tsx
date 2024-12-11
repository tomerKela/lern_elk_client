import { TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../../common/data/authStore";
import { fetchHookFactory } from "../../../common/hooks/fetch/useFetch";
import { FormButton } from "../../../common/styledComponents";

const useFetchSignin = fetchHookFactory("PASSWORD_LOGIN");

export const SigninForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { set } = useAuthStore();

  const navigate = useNavigate();
  const { fetch: fetchLogin } = useFetchSignin();

  const onSubmit = async (data: any) => {
    const { result, error } = await fetchLogin({
      email: data.email,
      password: data.password,
    });

    if (error) {
      alert("Error: " + error);
      return;
    }
    if (result) {
      set({ token: result.token, user: result.user });
      navigate("/search");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        marginTop: "10px",
      }}
    >
      <TextField
        {...register("email", { required: true })}
        label="Email"
        fullWidth
        style={{ height: "50px" }}
        error={!!errors.email}
        helperText={errors.email ? "Email is required" : ""}
        margin="normal"
      />
      <TextField
        {...register("password", { required: true })}
        label="password"
        fullWidth
        error={!!errors.pincode}
        helperText={errors.pincode ? "password is required" : ""}
        margin="normal"
      />

      <FormButton type="submit" color="primary">
        LogIn
      </FormButton>
    </form>
  );
};
