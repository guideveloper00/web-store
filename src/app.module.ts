import { MesoRegion } from './integrations/ibge/counties/entities/mesoRegion.entity';
import { MicroRegion } from './integrations/ibge/counties/entities/microRegion.entity';
import { County } from './integrations/ibge/counties/entities/county.entity';
import { CountiesModule } from './integrations/ibge/counties/counties.module';
import { Product } from './products/entities/product.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Product, County, MicroRegion, MesoRegion],
      synchronize: true,
    }),
    ProductsModule,
    CountiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
