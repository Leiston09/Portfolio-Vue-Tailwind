import { reactive } from "vue";

export function useUserValidation() {
  const errors = reactive({
    name: "",
    lastName: "",
    email: "",
    date: "",
    password: "",
    confirmPassword: "",
  });

  const validateName = (name) => {
    errors.name = name.trim() === "" ? "El nombre es obligatorio" : "";
    return !errors.name;
  };

  const validateLastName = (lastName) => {
    errors.lastName =
      lastName.trim() === "" ? "El apellido es obligatorio" : "";
    return !errors.lastName;
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    errors.email = !regex.test(email) ? "Correo no válido" : "";
    return !errors.email;
  };

  const validatePassword = (password) => {
    errors.password = password.length < 6 ? "Contraseña muy corta" : "";
    return !errors.password;
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    errors.confirmPassword =
      password !== confirmPassword ? "Las contraseñas no coinciden" : "";
    return !errors.confirmPassword;
  };
  
  const validateDate = (dateString) => {
    if (!dateString) {
      errors.date = "La fecha de nacimiento es obligatoria";
      return false;
    }

    const birthDate = new Date(dateString);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      errors.date = "Debes ser mayor de 18 años";
    } else if (age > 100) {
      errors.date = "La edad no puede ser mayor a 100 años";
    } else {
      errors.date = "";
    }

    return !errors.date;
  };

  const validateUser = (user) => {
    const okName = validateName(user.name);
    const okLast = validateLastName(user.lastName);
    const okEmail = validateEmail(user.email);
    const okPass = validatePassword(user.password);
    const okConfirm = validateConfirmPassword(
      user.password,
      user.confirmPassword,
    );
    const okDate = validateDate(user.date);
    return okName && okLast && okEmail && okPass && okConfirm && okDate;
  };

  return {
    errors,
    validateName,
    validateLastName,
    validateEmail,
    validatePassword,
    validateConfirmPassword,
    validateDate,
    validateUser,
  };
}
