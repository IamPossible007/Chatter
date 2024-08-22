import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
import { ChatsRepository } from './chats.repository';
export declare class ChatsService {
    private readonly chatsRepository;
    constructor(chatsRepository: ChatsRepository);
    create(createChatInput: CreateChatInput, userId: string): Promise<import("./entities/chat.entity").Chat>;
    findAll(): Promise<import("./entities/chat.entity").Chat[]>;
    findOne(_id: string): Promise<import("./entities/chat.entity").Chat>;
    update(id: number, updateChatInput: UpdateChatInput): string;
    remove(id: number): string;
}
