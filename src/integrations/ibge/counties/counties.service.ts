import { MicroRegion } from './entities/microRegion.entity';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { County } from './entities/county.entity';

@Injectable()
export class CountiesService {
  constructor(
    @InjectRepository(County) private repoCounty: Repository<County>,
    @InjectRepository(MicroRegion)
    private repoMicroRegion: Repository<MicroRegion>,
  ) {}

  async findAllCounties() {
    const response = await axios.get(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios',
    );
    response.data.map((county) => {
      this.createCounty(county, county.microrregiao);
    });
  }

  async createCounty(countyParams, microrregiaoParams) {
    const county = this.repoCounty.create({
      id: countyParams.id,
      nome: countyParams.nome,
    });

    const microrregiao = this.repoMicroRegion.create({
      id: countyParams.microrregiao.id,
      nome: countyParams.microrregiao.nome,
    });

    county.microrregiao = microrregiao;

    console.log(county);

    await this.repoCounty.save(county);
    await this.repoMicroRegion.save(microrregiao);
  }
}