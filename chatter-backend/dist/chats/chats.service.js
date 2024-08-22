"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatsService = void 0;
const common_1 = require("@nestjs/common");
const chats_repository_1 = require("./chats.repository");
let ChatsService = class ChatsService {
    constructor(chatsRepository) {
        this.chatsRepository = chatsRepository;
    }
    async create(createChatInput, userId) {
        return this.chatsRepository.create(Object.assign(Object.assign({}, createChatInput), { userId, userIds: createChatInput.userIds || [] }));
    }
    async findAll() {
        return this.chatsRepository.find({});
    }
    async findOne(_id) {
        return this.chatsRepository.findOne({ _id });
    }
    update(id, updateChatInput) {
        return `This action updates a #${id} chat`;
    }
    remove(id) {
        return `This action removes a #${id} chat`;
    }
};
exports.ChatsService = ChatsService;
exports.ChatsService = ChatsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [chats_repository_1.ChatsRepository])
], ChatsService);
//# sourceMappingURL=chats.service.js.map