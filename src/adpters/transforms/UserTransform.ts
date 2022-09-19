import { Transformer, transform, DefaultTransformer, whitelist, Context } from "jsonapi-fractal"

type Relationship = {
  images: (user) => Context<any, any>
}

class UserTransformer {
  public type: string;
  public relationships: Relationship;

  constructor() {
    // super()
    this.type = 'users'
    // this.relationships = {
    //   images: this.images,
    // }
  }

  transform(user) {
    return whitelist(user, ['id', 'firstName', 'lastName'])
  }

  // images(user) {
  //   return transform()
  //     .withInput(user.images)
  //     .withTransformer(new DefaultTransformer('images'))
  //     .withIncluded(true)
  //     .toContext()
  // }
}

export {
  UserTransformer
}