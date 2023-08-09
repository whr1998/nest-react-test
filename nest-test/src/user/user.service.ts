import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userTest: Model<UserDocument>) {}

  async getUser(): Promise<User[]> {
    const users = await this.userTest.find().exec();
    return users;
  }

  async addUser(userDto: UserDto): Promise<User> {
    try {
      const createUser = new this.userTest(userDto);
      await createUser.save();
      return;
    } catch (e) {
      throw new HttpException('插入失败', HttpStatus.FORBIDDEN);
    }
  }

  async editUser(id: string, user: any) {
    try {
      await this.userTest.updateOne({ _id: id }, { $set: user });
      return;
    } catch (error) {
      throw new HttpException('修改失败', HttpStatus.FORBIDDEN);
    }
  }

  async deleteUser(id: string) {
    try {
      await this.userTest.deleteOne({ _id: id });
      return;
    } catch (error) {
      throw new HttpException('删除失败', HttpStatus.FORBIDDEN);
    }
  }
}
