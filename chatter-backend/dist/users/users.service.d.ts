import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersRepository } from './users.repository';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    create(createUserInput: CreateUserInput): Promise<import("./entities/user.entity").User>;
    private hashPassword;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(_id: string): Promise<import("./entities/user.entity").User>;
    update(_id: string, updateUserInput: UpdateUserInput): Promise<import("./entities/user.entity").User>;
    remove(_id: string): Promise<import("./entities/user.entity").User>;
    verifyUser(email: string, password: string): Promise<import("./entities/user.entity").User>;
}
