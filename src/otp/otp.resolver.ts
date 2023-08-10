import { Resolver, Mutation } from '@nestjs/graphql';
import { OtpService } from './otp.service';
import { Otp } from './entities/otp.entity';
import { GqlAuthGuard } from "../auth/gql-auth.guard";
import { UseGuards } from '@nestjs/common';
import { UserEntity } from '../common/decorators/user.decorator';
import { User } from '@prisma/client';


@Resolver(() => Otp)
export class OtpResolver {
  constructor(private readonly otpService: OtpService) { }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Otp)
  generateOtp(@UserEntity() user: User,) {
    const otp = this.otpService.generateOtp(user.id);
    return otp;
  }

}

