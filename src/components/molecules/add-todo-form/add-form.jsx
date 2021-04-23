import PropTypes from "prop-types";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import AddFormWrapper from "./add-form-wrapper";

const AddForm = ({ onSubmit, register, errors }) => {
  return (
    <AddFormWrapper onSubmit={onSubmit}>
      <Input
        label="Nom de la tache"
        name="name"
        type="text"
        inputRef={register({ required: "Veuillez saisir Nom de la tache." })}
        error={errors?.name && errors?.name?.message}
      />

      <Input
        label="Description de la tache en une ligne"
        name="description"
        type="text"
        inputRef={register({
          required: "Veuillez saisir la description",
        })}
        error={errors?.description && errors?.description?.message}
      />

      <div className="form__action">
        <Button type="submit">Ajouter la tache</Button>
      </div>
    </AddFormWrapper>
  );
};

AddForm.propTypes = {
  errors: PropTypes.object,
  onSubmit: PropTypes.func,
  registerr: PropTypes.func,
};

export default AddForm;
