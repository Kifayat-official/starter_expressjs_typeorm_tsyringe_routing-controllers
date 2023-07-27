import { Repository } from 'typeorm';
import { IUserRepository } from './iuser-repository';
import { injectable } from 'tsyringe';
import { User } from '../../entities/user';
import { AppDataSource } from '../../database/data_source';

@injectable()
class UserRepository implements IUserRepository {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }

    public async getAllUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    // async getUserById(id: number): Promise<User | undefined> {
    //     return this.userRepository.findOne(id);
    // }

    public async createUser(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    // public async updateUser(id: number, updatedUser: User): Promise<User | undefined> {
    //     await this.userRepository.update(id, updatedUser);
    //     return this.getUserById(id);
    // }

    // public async deleteUser(id: number): Promise<void> {
    //     await this.userRepository.delete(id);
    // }
}

export { UserRepository };
