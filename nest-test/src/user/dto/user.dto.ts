import { IsString, IsInt, IsNotEmpty } from 'class-validator';
export class UserDto {
  id: string;
  @IsNotEmpty({ message: '用户名称不能为空' })
  @IsString({ message: '用户名称必须为字符串' })
  name: string;
  @IsInt({ message: '年龄必须为数字' })
  age: number;
}
