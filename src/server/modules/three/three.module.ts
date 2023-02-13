import { Module } from '@nestjs/common';
import { ThreeController } from './three.controller';
import { ThreeService } from './three.service';

@Module({
  controllers: [ThreeController],
  providers: [ThreeService],
})
export class ThreeModule {}
