import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import { serialize } from "jsonapi-fractal"
import { UserPrismaRepository } from "../../infraestructure/repositories/UserPrismaRepository"
import { UserRepository } from '../../domain/repositories/UserRepository'

class MeuRepositoryDeTeste extends UserRepository
/**
 * 
 * @param req 
 * @param res 
 */
const index = async (req: Request, res: Response) => {
  const {
    filter,
    field,
    sort
  } = req.query;

  console.table({
    filter,
    field,
    sort
  })

  const repository = new UserPrismaRepository(new PrismaClient())

  const users = await repository.index({
    filter,
    field,
    sort
  })

  const serialized = serialize(users, 'User')

  res.send(serialized)
}

/**
 * 
 * @param req 
 * @param res 
 */
const create = async (req: any, res: Response) => {
  const repository = new UserPrismaRepository(new PrismaClient())
  const userRequest = JSON.parse(req.apiGateway.event.body).data as UserRequestDTO;

  const userService = new UserService(repository);

  const user = await userService.create(userRequest);
  // const user = await repository.create(userRequest)

  const serialized = serialize(user, 'User')

  res.send(serialized)
}

export {
  index,
  create
}