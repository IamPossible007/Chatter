import { Logger } from '@nestjs/common';
import { AbstractRepository } from '../common/database/abstract.repository';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
export declare class UsersRepository extends AbstractRepository<User> {
    protected readonly logger: Logger;
    constructor(userModel: Model<User>);
}
