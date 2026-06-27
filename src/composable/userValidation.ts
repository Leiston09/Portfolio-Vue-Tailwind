import { reactive } from "vue";
import { useI18n } from "vue-i18n";
import { MessageErrorsType } from "@/types";


export function useUserValidation() {
  
  const { t } = useI18n();

  const MessageErrors = reactive<MessageErrorsType>({
    name: '',
    lastName: '',
    email: '',
    birthDate: '',
    password: '',
    confirmPassword: '',
  });

  const textOnly = (texts : string , parameter: keyof typeof MessageErrors )  => {
    if(/\d/.test(texts)) {
      MessageErrors[parameter] = t("validation.nameInvalid");
    }
  }

  const validateFirstName = (name: string): boolean => {
    let validate = name.trim() === ""
    MessageErrors.name = validate ? t("validation.nameRequired") : "";

    if (!validate) {
      textOnly(name, "name");
    }    
    return !MessageErrors.name;
  };


  const validateLastName = (lastName: string): boolean => {
    let validate = lastName.trim() === ""
    MessageErrors.lastName = validate ? t("validation.lastNameRequired") : "";

    if (!validate) {
      textOnly(lastName, "lastName");
    }    

    return !MessageErrors.lastName;
  };


  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    MessageErrors.email = !regex.test(email) ? t("validation.invalidEmail") : "";
    return !MessageErrors.email;
  };


  const validatePassword = (password: string): boolean => {
    let validate = password.length < 6
    MessageErrors.password = validate ? t("validation.shortPassword") : "";
    return !MessageErrors.password;
  };


  const validateConfirmPassword = ( password: string, confirmPassword: string ): boolean => {
    let validate = password !== confirmPassword
    MessageErrors.confirmPassword = validate ? t("validation.passwordMismatch") : "";
    return !MessageErrors.confirmPassword;
  };


  const validateDate = (dateString: string) : boolean => {

    if (!dateString) {
      MessageErrors.birthDate = t("validation.birthDateRequired");
      return false;
    }

    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!regex.test(dateString)) {
      MessageErrors.birthDate = t("validation.birthDateTextInvalidate");
      return false;
    }
        
    return validateDateBirthdate(dateString)
  };



  const validateDateBirthdate = (dateString: string) : boolean => {

    let minimumAge : number = 15
    let maximumAge : number = 100

    const birthDate = new Date(dateString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if ( monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < minimumAge) {
      MessageErrors.birthDate = t("validation.minimumAge");
    } 
    
    else if (age > maximumAge) {
      MessageErrors.birthDate = t("validation.maximumAge");
    } 
    
    else {
      MessageErrors.birthDate = "";
    }

    return !MessageErrors.birthDate;

  }


  const validateUser = (user : MessageErrorsType ): boolean => {
    const okName = validateFirstName(user.name);

    const okLastName = validateLastName(user.lastName);

    const okEmail = validateEmail(user.email);

    const okDate = validateDate(user.birthDate);

    const okPassword = validatePassword(user.password);

    const okConfirmPassword = validateConfirmPassword( user.password, user.confirmPassword);

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
    MessageErrors,
    validateUser,

    validateFirstName,
    validateLastName,
    validateEmail,
    validatePassword,
    validateConfirmPassword,
    validateDate,
 
  };
}
