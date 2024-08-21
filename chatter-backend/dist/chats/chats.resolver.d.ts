import { ChatsService } from './chats.service';
import { Chat } from './entities/chat.entity';
import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
import { TokenPayload } from '../auth/token-payload.interface';
export declare class ChatsResolver {
    private readonly chatsService;
    constructor(chatsService: ChatsService);
    createChat(createChatInput: CreateChatInput, user: TokenPayload): Promise<Chat>;
    findAll(): Promise<Chat[]>;
    findOne(id: number): string;
    updateChat(updateChatInput: UpdateChatInput): string;
    removeChat(id: number): string;
}
