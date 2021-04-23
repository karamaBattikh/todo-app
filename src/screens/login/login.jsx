import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import LoginForm from "../../components/molecules/login-form";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { register, handleSubmit, errors, setError } = useForm({
    defaultValues: { ...initialValues },
  });
  const { signin } = useAuth();
  const history = useHistory();

  const onSubmit = (values) => {
    const result = signin(values);

    if (!result?.ok) {
      setError("password", { type: "server" });
      setError("email", { type: "server" });
    } else {
      history.push("/todo-list");
    }
  };

  return (
    <LoginForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
    />
  );
};

export default Login;
