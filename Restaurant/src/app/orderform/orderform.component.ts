/* import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.scss']
})
export class OrderformComponent implements OnInit {


orderinfo = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    adress: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {}
    onSubmit(){
      // to take the values from the form you can select the property that have the formGroup and then just add .value
        var a = this.orderinfo.value;
        console.log(a)
      }
  }

 */