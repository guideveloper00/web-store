import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateProductDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsBoolean()
  status: boolean;

  @IsNumber()
  quantity: number;
}
