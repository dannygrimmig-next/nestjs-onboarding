import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ValidateUserDto } from './dto/validate-user.dto';
import { AuthGuard } from './auth.gaurd';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async signIn(
    @Body() validateUserDto: ValidateUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    // Get response from service
    const serviceResponse: { access_token: string } =
      await this.authService.signIn(validateUserDto);

    // Set Cookie
    response.cookie('access_token', serviceResponse, {
      httpOnly: true,
      secure: true,
    });

    // Return something
    return serviceResponse;
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
