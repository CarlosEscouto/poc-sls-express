import { UserRepository } from "../repositories/UserRepository";

export class UserService {
  constructor(
    private repository: UserRepository
  ) {}

  async create(userData: IUserRequestDTO) {
    // regra de negocio ( Caso de uso - Criação )

    const user = new User(userData);

    if(!user.isValidated()) {
      // envio sms
    }

    return await this.repository.create(userData)
  }
}