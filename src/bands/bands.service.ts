import { Injectable } from '@nestjs/common';
import { Band } from './definitions/band.interface';

@Injectable()
export class BandsService {
  private readonly bands: Band[] = [];

  create(band: Band) {
    this.bands.push(band);
  }

  findAll(): Band[] {
    return this.bands;
  }

  findOne(id: string): Band {
    return this.bands.find((band) => band.id === id);
  }
}
