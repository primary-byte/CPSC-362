import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherEntity } from './models/teacher.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([TeacherEntity])],
  providers: [TeacherService],
  controllers: [TeacherController],
  exports: [TeacherService]
})

export class TeacherModule {}
