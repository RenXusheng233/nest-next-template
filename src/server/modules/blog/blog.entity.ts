import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType()
export class BlogPost {
  @Field(() => Number)
  id: number;
  @Field(() => String)
  title: string;
}

@InputType()
export class GetBlogInput {
  @Field(() => Number)
  id: number;
}
