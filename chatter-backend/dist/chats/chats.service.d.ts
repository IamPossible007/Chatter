import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
import { ChatsRepository } from './chats.repository';
import { PipelineStage } from 'mongoose';
export declare class ChatsService {
    private readonly chatsRepository;
    constructor(chatsRepository: ChatsRepository);
    create(createChatInput: CreateChatInput, userId: string): Promise<import("./entities/chat.document").ChatDocument>;
    findMany(prePipeLineStages?: PipelineStage[]): Promise<any[]>;
    findOne(_id: string): Promise<any>;
    update(id: number, updateChatInput: UpdateChatInput): string;
    remove(id: number): string;
}
