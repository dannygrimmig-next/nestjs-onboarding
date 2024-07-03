import { IsString } from 'class-validator';

export class CreateBandDto {
  @IsString()
  name: string;

  @IsString()
  origin: string;

  @IsString()
  years: string;

  @IsString()
  website: string;

  disbandingYear?: number;
}

export type Band = {
  id: number;
  name: string;
  origin: string;
  years: string;
  website: string;
  disbandingYear?: number;
};
