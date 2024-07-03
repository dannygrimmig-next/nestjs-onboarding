import { Injectable, NotFoundException } from '@nestjs/common';
import { Band, CreateBandDto } from './dto/create-band.dto';
import { UpdateBandDto } from './dto/update-band.dto';
import { sampleBands } from 'data/bands';

@Injectable()
export class BandsService {
  private bands: Band[] = sampleBands;

  create(createBandDto: CreateBandDto) {
    const highestId: number = this.bands.sort((a, b) => a.id - b.id)[
      this.bands.length - 1
    ].id;

    const newBand = { id: highestId + 1, ...createBandDto };
    this.bands.push(newBand);
    return newBand;
  }

  findAll() {
    return this.bands;
  }

  findOne(id: number) {
    const band = this.bands.find((band) => band.id === id);

    if (!band) {
      throw new NotFoundException('Band Not Found');
    }
    return band;
  }

  update(id: number, updateBandDto: UpdateBandDto) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) {
        return { ...band, ...updateBandDto };
      } else {
        return band;
      }
    });

    return this.findOne(id);
  }

  remove(id: number) {
    const removed = this.findOne(id);
    this.bands = this.bands.filter((band) => band.id !== id);
    return removed;
  }
}
