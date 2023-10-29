import { Controller, Post, Body } from '@nestjs/common';
import { OpenAIService } from './open-ai.service';
import { MessageObjectOpenAI } from './types/message';
import { OpenAI } from 'openai';
import ChatCompletion = OpenAI.ChatCompletion;
import { ModerationCreateResponse } from 'openai/resources';

@Controller('api/open-ai')
export class OpenAIController {
  constructor(private readonly openAIService: OpenAIService) {}

  @Post('generate')
  createCompletion(
    @Body('input') input: MessageObjectOpenAI[],
  ): Promise<ChatCompletion> {
    return this.openAIService.createChatCompletion(input);
  }

  @Post('moderate')
  createModeration(
    @Body('input') input: string,
  ): Promise<ModerationCreateResponse> {
    return this.openAIService.createModeration(input);
  }
}
