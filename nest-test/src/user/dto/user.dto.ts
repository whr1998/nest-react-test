import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNotEmpty } from 'class-validator';
export class UserDto {
  @ApiProperty({ description: '用户id' })
  id: string;
  @ApiProperty({ description: '用户名称', example: '小激动' })
  @IsNotEmpty({ message: '用户名称不能为空' })
  @IsString({ message: '用户名称必须为字符串' })
  name: string;
  @ApiProperty({ description: '用户年龄', example: 24 })
  @IsInt({ message: '年龄必须为数字' })
  age: number;
}
