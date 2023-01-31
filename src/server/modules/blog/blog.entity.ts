import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType()
export class BlogPost {
  @Field(() => String)
  id: string;
  @Field(() => String)
  title: string;
}

@InputType()
export class GetBlogInput {
  @Field(() => String)
  id: string;
}
