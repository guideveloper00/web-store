import { MesoRegion } from './entities/mesoRegion.entity';
import { MicroRegion } from './entities/microRegion.entity';
import { County } from './entities/county.entity';
import { Module } from '@nestjs/common';
import { CountiesService } from './counties.service';
import { CountiesController } from './counties.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([County, MicroRegion, MesoRegion])],
  controllers: [CountiesController],
  providers: [CountiesService],
})
export class CountiesModule {}
