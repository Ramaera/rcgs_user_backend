import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Otp {
  @Field()
  otp: string;
}
