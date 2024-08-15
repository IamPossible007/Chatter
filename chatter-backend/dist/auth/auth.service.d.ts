import { User } from '../users/entities/user.entity';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly configService;
    private readonly jwtService;
    constructor(configService: ConfigService, jwtService: JwtService);
    login(user: User, response: Response): Promise<void>;
    logout(response: Response): void;
}
