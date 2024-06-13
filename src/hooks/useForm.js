import { useEffect, useMemo, useState } from "react";


export const UseForm = (initialForm = {}, formValidations = {}) => {


    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
        createValidators();
    }, [formState])

    const isFormValid = useMemo(() => {
        for (const textField of Object.keys(formValidation)) {

            if (formValidation[textField] !== null) return false;
        }
        return true;
    }, [formValidation])

    const OnInputchange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    const reset = () => {
        setFormState(initialForm);
    }
    const createValidators = () => {

        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage] = formValidations[formField];
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues);

    }
    return {

        ...formState,

        formState,

        OnInputchange,

        reset,

        isFormValid,

        ...formValidation

    }
}
