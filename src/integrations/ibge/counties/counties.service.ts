import { MesoRegion } from './entities/mesoRegion.entity';
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
    @InjectRepository(MesoRegion)
    private repoMesoRegion: Repository<MesoRegion>,
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

    const mesorregiao = this.repoMesoRegion.create({
      id: countyParams.microrregiao.mesorregiao.id,
      nome: countyParams.microrregiao.mesorregiao.nome,
    });

    county.microrregionId = microrregiao.id;
    county.microrregiao = microrregiao;

    microrregiao.mesorregionId = mesorregiao.id;
    microrregiao.mesorregiao = mesorregiao;

    console.log(mesorregiao);

    await this.repoCounty.save(county);
    await this.repoMicroRegion.save(microrregiao);
    await this.repoMesoRegion.save(mesorregiao);
  }
}
