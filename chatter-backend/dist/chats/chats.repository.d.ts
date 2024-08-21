import { Logger } from '@nestjs/common';
import { AbstractRepository } from '../common/database/abstract.repository';
import { Model } from 'mongoose';
import { Chat } from './entities/chat.entity';
export declare class ChatsRepository extends AbstractRepository<Chat> {
    protected readonly logger: Logger;
    constructor(chatModel: Model<Chat>);
}
