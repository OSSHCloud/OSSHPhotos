import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumModule } from './album/album.module';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [AlbumModule, PhotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
