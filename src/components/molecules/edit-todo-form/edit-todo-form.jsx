import PropTypes from "prop-types";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import Select from "../../atoms/select";
import EditFormWrapper from "./edit-form-wrapper";

const EditForm = ({ onSubmit, register, errors, watch }) => {
  return (
    <EditFormWrapper onSubmit={onSubmit}>
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
      <Select name="status" inputRef={register} defaultValue={watch("status")}>
        <option value="completed">complétée</option>
        <option value="not-completed">non complétée</option>
      </Select>

      <div className="form__action">
        <Button type="submit">Mis à jour la tache</Button>
      </div>
    </EditFormWrapper>
  );
};

EditForm.propTypes = {
  errors: PropTypes.object,
  onSubmit: PropTypes.func,
  registerr: PropTypes.func,
};

export default EditForm;
