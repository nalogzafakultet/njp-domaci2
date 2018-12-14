import { Component, OnInit } from '@angular/core';
import { ProizvodiService } from '../../services/proizvodi.service';
import { Proizvod } from '../../model/proizvod.model';

@Component({
  selector: 'app-add-proizvod',
  templateUrl: './add-proizvod.component.html',
  styleUrls: ['./add-proizvod.component.css']
})
export class AddProizvodComponent implements OnInit {
  private prozvodi: Proizvod[] = [];
  private filtrirani: Proizvod[] = [];
  private naziv = '';
  private errorText = '';
  private buttonEnabled = false;

  constructor(private service: ProizvodiService) { }

  ngOnInit() {
    this.loadProizvodi();
}

  loadProizvodi() {
    this.service.getAllProizvodi()
      .subscribe(proizvodi => {
        this.prozvodi = proizvodi;
        console.log(this.prozvodi);
      });
  }

  onChange(value: string) {
    if (!value) {
      return;
    }
    if (!value) {
      this.errorText = 'Popunite naziv';
      this.buttonEnabled = false;
      return;
    }

    this.filtrirani = this.prozvodi.filter(proizvod => proizvod.naziv.toLowerCase() === value.toLowerCase());
    if (this.filtrirani.length !== 0) {
      this.errorText = 'Proizvod sa takvim imenom vec postoji!';
      this.buttonEnabled = false;
    } else {
      this.buttonEnabled = true;
      this.errorText = '';
    }
  }

  saveProizvod() {
    let noviProizvod: Proizvod = new Proizvod(this.naziv);
    console.log('Saving now: ', noviProizvod);
    this.service.addNewProizvod(noviProizvod)
      .subscribe(proizvod => noviProizvod = proizvod);
    console.log('Saved proizvod: ', noviProizvod);
  }

}
