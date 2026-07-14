import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

export interface Message {
  id: number;
  content: string;
}

type MessagesMap = Record<string, Message>;
@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents) as MessagesMap;

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents) as MessagesMap;

    return messages;
  }

  async createMessage(content: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents) as MessagesMap;

    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
