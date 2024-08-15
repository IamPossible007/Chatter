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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const users_repository_1 = require("./users.repository");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserInput) {
        try {
            return await this.usersRepository.create(Object.assign(Object.assign({}, createUserInput), { password: await this.hashPassword(createUserInput.password) }));
        }
        catch (err) {
            if (err.message.includes('E11000')) {
                throw new common_1.UnprocessableEntityException('Email already exists.');
            }
            throw err;
        }
    }
    async hashPassword(password) {
        return bcrypt.hash(password, 10);
    }
    async findAll() {
        return this.usersRepository.find({});
    }
    async findOne(_id) {
        return this.usersRepository.findOne({ _id });
    }
    async update(_id, updateUserInput) {
        if (updateUserInput.password) {
            updateUserInput.password = await this.hashPassword(updateUserInput.password);
        }
        return this.usersRepository.findOneAndUpdate({ _id }, {
            $set: Object.assign({}, updateUserInput),
        });
    }
    async remove(_id) {
        return this.usersRepository.findOneAndDelete({ _id });
    }
    async verifyUser(email, password) {
        const user = await this.usersRepository.findOne({ email });
        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) {
            throw new common_1.UnauthorizedException('Credentials are not valid.');
        }
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map