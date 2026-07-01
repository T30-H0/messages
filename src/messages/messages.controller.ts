import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessage() {
    return 'Message list';
  }

  @Post()
  createMessage() {
    return 'Create Message';
  }

  @Get('/:id')
  getMessage() {
    return 'Message by Id';
  }
}
