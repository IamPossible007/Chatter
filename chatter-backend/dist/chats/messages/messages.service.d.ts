import { ChatsRepository } from '../chats.repository';
import { CreateMessageInput } from './dto/create-message.input';
import { Message } from './entities/message.entity';
import { GetMessagesArgs } from './dto/get-messages.args';
import { PubSub } from 'graphql-subscriptions';
import { MessageCreatedArgs } from './dto/message-created.args';
import { UsersService } from '../../users/users.service';
export declare class MessagesService {
    private readonly chatsRepository;
    private readonly usersService;
    private readonly pubSub;
    constructor(chatsRepository: ChatsRepository, usersService: UsersService, pubSub: PubSub);
    createMessage({ content, chatId }: CreateMessageInput, userId: string): Promise<Message>;
    getMessages({ chatId }: GetMessagesArgs): Promise<any[]>;
    messageCreated({ chatId }: MessageCreatedArgs): Promise<AsyncIterator<unknown, any, undefined>>;
}
