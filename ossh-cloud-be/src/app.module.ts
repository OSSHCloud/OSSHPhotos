import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumModule } from './album/album.module';
import { PhotoModule } from './photo/photo.module';
import { ListOfValuesModule } from './list-of-values/list-of-values.module';
import { LovCategoryModule } from './lov-category/lov-category.module';

@Module({
  imports: [AlbumModule, PhotoModule, ListOfValuesModule, LovCategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
