import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenAIModule } from './open-ai/open-ai.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    OpenAIModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
