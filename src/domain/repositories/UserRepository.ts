export interface UserRepository {
  /**
   * 
   * @param param0 
   */
  index({
    filter,
    field,
    sort
  }): Promise<any>

  /**
   * 
   * @param param0 
   */
  create({ name, email }: { name: string, email: string }): Promise<any>
}