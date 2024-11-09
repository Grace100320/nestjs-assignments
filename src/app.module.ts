import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimeController } from './prime/prime.controller';

@Module({
  imports: [],
  controllers: [AppController, PrimeController],
  providers: [AppService],
})
export class AppModule {}
