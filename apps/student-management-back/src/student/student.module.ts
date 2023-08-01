import { Module } from "@nestjs/common";
import { StudentModuleBase } from "./base/student.module.base";
import { StudentService } from "./student.service";
import { StudentController } from "./student.controller";

@Module({
  imports: [StudentModuleBase],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule {}
