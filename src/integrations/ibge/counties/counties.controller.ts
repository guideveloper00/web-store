import { Controller, Get } from '@nestjs/common';
import { CountiesService } from './counties.service';

@Controller('counties')
export class CountiesController {
  constructor(private readonly countiesService: CountiesService) {}

  @Get()
  findAll() {
    return this.countiesService.findAllCounties();
  }
}
