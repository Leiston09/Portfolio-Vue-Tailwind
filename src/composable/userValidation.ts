import { reactive } from "vue";
import { useI18n } from "vue-i18n";

type UserType = {
  name: string;
  lastName: string;
  email: string;
  date: string;
  password: string;
  confirmPassword: string;
};

type ErrorsType = {
  name: string;
  lastName: string;
  email: string;
  date: string;
  password: string;
  confirmPassword: string;
};

export function useUserValidation() {
  const { t } = useI18n();

  const errors = reactive<ErrorsType>({
    name: "",
    lastName: "",
    email: "",
    date: "",
    password: "",
    confirmPassword: "",
  });

  const validateName = (name: string): boolean => {
    errors.name =
      name.trim() === ""
        ? t("validation.nameRequired")
        : "";

    return !errors.name;
  };

  const validateLastName = (
    lastName: string,
  ): boolean => {
    errors.lastName =
      lastName.trim() === ""
        ? t("validation.lastNameRequired")
        : "";

    return !errors.lastName;
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    errors.email = !regex.test(email)
      ? t("validation.invalidEmail")
      : "";

    return !errors.email;
  };

  const validatePassword = (
    password: string,
  ): boolean => {
    errors.password =
      password.length < 6
        ? t("validation.shortPassword")
        : "";

    return !errors.password;
  };

  const validateConfirmPassword = (
    password: string,
    confirmPassword: string,
  ): boolean => {
    errors.confirmPassword =
      password !== confirmPassword
        ? t("validation.passwordMismatch")
        : "";

    return !errors.confirmPassword;
  };

  const validateDate = (
    dateString: string,
  ): boolean => {
    if (!dateString) {
      errors.date = t(
        "validation.birthDateRequired",
      );

      return false;
    }

    const birthDate = new Date(dateString);
    const today = new Date();

    let age =
      today.getFullYear() -
      birthDate.getFullYear();

    const monthDiff =
      today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 &&
        today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    if (age < 15) {
      errors.date = t(
        "validation.minimumAge",
      );
    } else if (age > 100) {
      errors.date = t(
        "validation.maximumAge",
      );
    } else {
      errors.date = "";
    }

    return !errors.date;
  };

  const validateUser = (
    user: UserType,
  ): boolean => {
    const okName = validateName(user.name);

    const okLastName = validateLastName(
      user.lastName,
    );

    const okEmail = validateEmail(user.email);

    const okPassword = validatePassword(
      user.password,
    );

    const okConfirmPassword =
      validateConfirmPassword(
        user.password,
        user.confirmPassword,
      );

    const okDate = validateDate(user.date);

    return (
      okName &&
      okLastName &&
      okEmail &&
      okPassword &&
      okConfirmPassword &&
      okDate
    );
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