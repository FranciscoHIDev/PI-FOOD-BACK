function validate(input) {
    let errors = {}

    if (!input.name) {
        errors.name = "El nombre es requerido"
    }
    else if (!/^[A-Za-z\s]+$/g.test(!input.name)) {
        errors.name = "El nombre es invalido"
    }
    else if (!input.summay) {
        errors = "El summary es requerido"
    }
    else if (!input.healtScore) {
        errors.healtScore = "El healtScore es requerido"
    } else if (!input.steps) {
        errors.steps = "La preparación es requerido"
    }
    return errors
}

export default validate