import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactorialController } from './factorial/factorial.controller';

@Module({
  imports: [],
  controllers: [AppController, FactorialController],
  providers: [AppService],
})
export class AppModule {}
