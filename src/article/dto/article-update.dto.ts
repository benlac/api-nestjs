import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Article } from '../models/article.model';

@InputType()
export class ArticleUpdateInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  image: string;
}

@ObjectType()
export class ArticleUpdateOutput {
  @Field(() => Article)
  article: Article;
}
