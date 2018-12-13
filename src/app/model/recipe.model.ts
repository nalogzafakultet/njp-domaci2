import {Proizvod} from './proizvod.model';

export class Recept {
  constructor(
    public naziv: string,
    public opis: string,
    public proizvodi?: Proizvod[],
    public id?: number
  ) {
    if (!proizvodi) {
      this.proizvodi = [];
    }
  }
}
