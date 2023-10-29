import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenAIModule } from './open-ai/open-ai.module';
import { AI21Module } from './ai21/ai21.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    OpenAIModule,
    AI21Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
