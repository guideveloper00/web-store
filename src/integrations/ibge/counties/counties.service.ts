import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { County } from './entities/county.entity';

@Injectable()
export class CountiesService {
  constructor(
    @InjectRepository(County) private repoCounty: Repository<County>,
  ) {}

  async findAllCounties() {
    const response = await axios.get(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios',
    );
    response.data.map((county) => {
      this.createCounty(county);
    });
  }

  async createCounty(countyParams) {
    const county = this.repoCounty.create({
      id: countyParams.id,
      nome: countyParams.nome,
    });

    await this.repoCounty.save(county);
  }
}
