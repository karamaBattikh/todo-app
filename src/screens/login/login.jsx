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
    const { error, data } = signin(values);
    if (error) {
      setError("password", { type: "server" });
      setError("email", { type: "server" });
    }
    if (data) {
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
