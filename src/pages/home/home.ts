import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OtraPaginaPage } from '../../pages/otra-pagina/otra-pagina'
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data: any = {
    email: '',
    user: '',
    password: '',
    name: '',
    algo: ''
  }

  validations_form: FormGroup;
 
  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {

    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      user: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
      algo: new FormControl('', Validators.required)

    });
  }

  ngOnInit(){
    

  }


  go() {
    this.navCtrl.push(OtraPaginaPage, { 'datos': JSON.stringify(this.validations_form.value)});
  }

}
