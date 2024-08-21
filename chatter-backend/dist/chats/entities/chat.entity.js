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
exports.ChatSchema = exports.Chat = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const abstract_entity_1 = require("../../common/database/abstract.entity");
let Chat = class Chat extends abstract_entity_1.AbstractEntity {
};
exports.Chat = Chat;
__decorate([
    (0, graphql_1.Field)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Chat.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Chat.prototype, "isPrivate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], Chat.prototype, "userIds", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Chat.prototype, "name", void 0);
exports.Chat = Chat = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, mongoose_1.Schema)()
], Chat);
exports.ChatSchema = mongoose_1.SchemaFactory.createForClass(Chat);
//# sourceMappingURL=chat.entity.js.map