import formValidator from "./form.validator";

export default (e, formData) => {
    const changedInput = e.target.closest('.input');
    if(!changedInput) return;
    // console.log(changedInput);
    const updatedInputKey = changedInput.dataset.key;
    // console.log(updatedInputKey)
    const updatedFormData = {
        ...formData
    }

    // console.log(updatedFormData);

    const updatedFormElement = {
        ...updatedFormData[updatedInputKey]
    }

    // console.log(updatedFormElement);

    updatedFormElement.value = e.target.value;
    // console.log(updatedFormElement.value);
    updatedFormElement.touched = true;
    updatedFormElement.valid = formValidator(updatedFormElement.value, updatedFormElement.validation);
    updatedFormData[updatedInputKey] = updatedFormElement;
    let formIsValid = true;
    for (let inputKey in updatedFormData) {
        formIsValid = updatedFormData[inputKey].valid && formIsValid;
        console.log(formIsValid);
    }
    // console.log(formIsValid);
    return {formIsValid, updatedFormData};
}