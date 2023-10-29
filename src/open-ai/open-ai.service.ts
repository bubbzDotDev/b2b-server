import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { MessageObjectOpenAI } from './types/message';

@Injectable()
export class OpenAIService {
  private openAI: OpenAI;

  constructor() {
    this.openAI = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async createChatCompletion(messages: MessageObjectOpenAI[]) {
    try {
      return await this.openAI.chat.completions.create({
        messages,
        model: 'gpt-3.5-turbo',
        max_tokens: 1000,
        temperature: 0.8,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  }

  async createModeration(input: string) {
    try {
      return await this.openAI.moderations.create({
        input,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  }
}
