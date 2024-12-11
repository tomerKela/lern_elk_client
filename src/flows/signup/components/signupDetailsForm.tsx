import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { fetchHookFactory } from "../../../common/hooks/fetch/useFetch";
import { FormButton } from "../../../common/styledComponents";
import { useSignupState } from "../data/signupState";
import { errorHandler } from "../../../common/errors/errorHandler";

const useFetchSignup = fetchHookFactory("SIGNUP_EMAIL_PART2");

export const SignupDetailsForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setSignupDetails, signupDetails } = useSignupState();
  const navigate = useNavigate();
  const { fetch: fetchSignup, loading } = useFetchSignup();

  const onSubmit = async (data: any) => {
    const { error, result } = await fetchSignup({
      email: signupDetails.email,
      pincode: data.pincode,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      phone: data.phone,
    });
    if (error) {
      switch (error.message) {
        default:
          errorHandler(error);
      }
      return;
    }
    if (result) {
      setSignupDetails({
        ...signupDetails,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
      });
      navigate("/signin");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: "400px", marginTop: "10px" }}
    >
      <div style={{ display: "flex", gap: "1rem" }}>
        <div>
          <TextField
            {...register("firstName", { required: true })}
            id="firstName"
            fullWidth
            error={!!errors.firstName}
            helperText={errors.firstName ? "First Name is required" : ""}
            margin="normal"
            placeholder="First Name"
            InputLabelProps={{
              shrink: false,
            }}
          />
        </div>
        <div>
          <TextField
            {...register("lastName", { required: true })}
            id="lastName"
            fullWidth
            error={!!errors.lastName}
            helperText={errors.lastName ? "Last Name is required" : ""}
            margin="normal"
            placeholder="Last Name"
            InputLabelProps={{
              shrink: false,
            }}
          />
        </div>
      </div>
      <TextField
        {...register("email", { required: false })}
        id="email"
        fullWidth
        disabled
        defaultValue={signupDetails.email}
        margin="normal"
        style={{ display: "none" }}
      />
      <TextField
        {...register("password", { required: true })}
        id="password"
        fullWidth
        error={!!errors.password}
        helperText={errors.password ? "Password is required" : ""}
        margin="normal"
        placeholder="Password"
        InputLabelProps={{
          shrink: false,
        }}
      />
      <TextField
        {...register("phone", { required: true })}
        id="phone"
        fullWidth
        error={!!errors.phone}
        helperText={errors.phone ? "Phone is required" : ""}
        margin="normal"
        placeholder="Phone"
        InputLabelProps={{
          shrink: false,
        }}
      />
      <TextField
        {...register("pincode", { required: true })}
        id="pincode"
        fullWidth
        error={!!errors.pincode}
        helperText={errors.pincode ? "Pincode is required" : ""}
        margin="normal"
        placeholder="Pincode sent to your email"
        InputLabelProps={{
          shrink: false,
        }}
      />

      <FormControlLabel
        style={{ marginTop: "10px" }}
        control={<Checkbox {...register("agreeToTerms")} />}
        label="I agree to the Terms of Service and Privacy Policy."
      />
      <FormButton type="submit" color="primary" style={{ marginTop: "20px" }}>
        Sgin Up
      </FormButton>
    </form>
  );
};
