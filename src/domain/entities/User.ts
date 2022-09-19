type UserDTO = {
  name: string;
  email: string;
}

class User {
  name: FullNameVO
  email: EmailVO

  constructor({ name, email }: UserDTO) {
    this.name = new FullNameVO(name)
    this.email = new EmailVO(email)
  }

  isValidated() {
    // logica que verifica o que é validado

    return true;
  }
}