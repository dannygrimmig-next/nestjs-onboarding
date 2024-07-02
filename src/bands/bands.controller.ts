import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateBandDto } from './dto/create-band.dto';
import { Band } from './definitions/band.interface';

// https://docs.nestjs.com/controllers

@Controller('bands')
export class BandsController {
  constructor(private bandsService: BandsController) {}

  // ADD BAND
  @Post()
  async create(@Body() createBandDto: CreateBandDto) {
    this.bandsService.create(createBandDto);
  }

  // RETURN ALL BANDS
  @Get()
  async findAll(): Promise<Band[]> {
    return this.bandsService.findAll();
  }

  // RETURN BAND BY ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Band> {
    return this.bandsService.findOne(id);
  }

  //  DELETE BAND BT ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} band`;
  }
}
