import { County } from './entities/county.entity';
import { Module } from '@nestjs/common';
import { CountiesService } from './counties.service';
import { CountiesController } from './counties.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([County])],
  controllers: [CountiesController],
  providers: [CountiesService],
})
export class CountiesModule {}
