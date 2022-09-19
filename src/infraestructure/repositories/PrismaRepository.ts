/**
 * 
 */
class PrismaRepository {
  protected allowFilter = []
  protected allowField = []
  protected allowSort = []

  /**
   * 
   * @param field 
   * @returns 
   */
  protected converterField(field: string) {
    if (!field) return;

    return { [field]: true }
  }

  /**
   * 
   * @param filter 
   * @returns 
   */
  protected converterFilter(filter: Record<string, string>) {
    return filter
  }

  /**
   * 
   * @param sort 
   * @returns 
   */
  protected converterSort(sort: string) {
    if (!sort) return;

    const direction = sort.search('-') === 0
      ? 'desc'
      : 'asc';

    return { [sort.replace('-', '')]: direction }
  }
}

export { PrismaRepository }