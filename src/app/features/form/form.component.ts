import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  usuario: any = {
    nome: 'Usuario',
    email: 'usuario@email.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(form.value)
    console.log(this.usuario)
  }

}
