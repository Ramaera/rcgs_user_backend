import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import otpGenerator from 'otp-generator';


@Injectable()
export class OtpService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }
  generateOtp(userId: string) {
    const otp = otpGenerator.generate(4, { digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
    console.log("======>9", userId)

    const newOtp = this.prisma.user.update({
      data: {
        otp: otp,
      },
      where: {
        id: userId
      },

    })

    return newOtp;
  }

}
