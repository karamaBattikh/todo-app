import PropTypes from "prop-types";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import LoginFormWrapper from "./login-form-wrapper";

const LoginForm = ({ onSubmit, register, errors }) => {
  return (
    <LoginFormWrapper onSubmit={onSubmit}>
      <Input
        label="Adresse e-mail"
        name="email"
        type="email"
        inputRef={register({
          required: "Veuillez saisir votre adresse email.",
        })}
        error={
          (errors?.email && errors?.email?.message) ||
          errors?.email?.type === "server"
        }
      />
      <Input
        label="Mot de passe"
        name="password"
        type="password"
        inputRef={register({ required: "Veuillez saisir votre mot de passe." })}
        error={
          (errors?.password && errors?.password?.message) ||
          errors?.password?.type === "server"
        }
      />

      <Button type="submit">Soumettre</Button>

      {(errors?.email?.type === "server" ||
        errors?.password?.type === "server") && (
        <p className="form__error">
          Votre adresse e-mail ou votre mot de passe incorrects.
        </p>
      )}
    </LoginFormWrapper>
  );
};

LoginForm.propTypes = {
  errors: PropTypes.object,
  onSubmit: PropTypes.func,
  registerr: PropTypes.func,
};

export default LoginForm;
