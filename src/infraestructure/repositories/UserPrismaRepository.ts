import { PrismaClient } from "@prisma/client";
import { PrismaRepository } from "./PrismaRepository";

/**
 * 
 */
class UserPrismaRepository extends PrismaRepository implements UserRepository {
  constructor(
    private prisma: PrismaClient
  ) {
    super();
  }

  /**
   * 
   * @param param0 
   * @returns 
   */
  async index({ filter, field, sort }) {

    return await this.prisma.user.findMany({
      where: super.converterFilter(filter),
      select: super.converterField(field),
      orderBy: super.converterSort(sort)
    })
  }

  /**
   * 
   * @param userData 
   * @returns 
   */
  async create(userData: { name: string, email: string }) {
    return await this.prisma.user.create({ data: userData })
  }
}

export { UserPrismaRepository }