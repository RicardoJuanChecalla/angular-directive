import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent {

  color: string = 'green';
  texto1: string = 'Ricardo Checalla';

  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required]
  });

  constructor( private fb: FormBuilder ) { }

  tieneError(campo: string): boolean{
    return this.myForm.get(campo)?.invalid || false;
  }

  cambiarNombre(){
    this.texto1 = Math.random().toString();
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}
