export type UserType = {
  id?: number;
  name: string;
  lastName: string;
  email: string;
  birthDate: string;   // Fecha de nacimiento
  password: string;    
  createdAt?: string;   // Fecha de registro
};


export type MessageErrorsType = {
  name: string;
  lastName: string;
  email: string;
  birthDate: string;
  password: string;
  confirmPassword: string;
};


// Para registro (formulario)
export type RegisterType = UserType & {
  confirmPassword: string; 
};

// Para login
export type CredentialsType = {
  email: string;
  password: string;
};

// Estado del store
export type StateType = {
  user: UserType | null;
  authentication: boolean;
};

export type SpecialtyType = {
  name:string
}

export interface Message {
  id: string;
  role: "system" | "user" | "assistant";
  content: string;
}