import { AbstractEntity } from 'src/common/database/abstract.entity';
export declare class Chat extends AbstractEntity {
    userId: String;
    isPrivate: Boolean;
    userIds: String[];
    name?: String;
}
export declare const ChatSchema: import("mongoose").Schema<Chat, import("mongoose").Model<Chat, any, any, any, import("mongoose").Document<unknown, any, Chat> & Chat & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Chat, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Chat>> & import("mongoose").FlatRecord<Chat> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>;
