import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogResolver } from './blog.resolver';
import { BlogService } from './blog.service';

@Module({
  controllers: [BlogController],
  providers: [BlogResolver, BlogService],
})
export class BlogModule {}
