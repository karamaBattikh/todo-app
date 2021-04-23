import { useForm } from "react-hook-form";
import { createBrowserHistory } from "history";
import { useAuth } from "../../contexts/auth-context";
import Input from "../../components/atoms/input";
import Button from "../../components/atoms/button";
import LoginWrapper from "./login-wrapper";

const Login = () => {
  const { register, handleSubmit, errors, getValues, setError } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { signin } = useAuth();
  const history = createBrowserHistory();

  const onSubmit = (values) => {
    console.log("values", values);
    const { error, data } = signin(values);
    if (error) {
      setError("password", { type: "server" });
      setError("email", { type: "server" });
    }
    if (data) {
      history.push("/todo-list");
    }
  };
  console.log("error", errors);
  console.log(" getValues", getValues());
  return (
    <LoginWrapper onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Adresse e-mail"
        name="email"
        type="email"
        inputRef={register({
          required: "Veuillez saisir votre adresse email.",
        })}
        error={errors?.email && errors?.email?.message}
      />
      <Input
        label="Mot de passe"
        name="password"
        type="password"
        inputRef={register({ required: "Veuillez saisir votre mot de passe." })}
        error={errors?.password && errors?.password?.message}
      />

      <Button type="submit">Soumettre</Button>

      {(errors?.email?.type === "server" ||
        errors?.password?.type === "server") && (
        <p>Votre adresse e-mail ou votre mot de passe incorrects.</p>
      )}
    </LoginWrapper>
  );
};
export default Login;
