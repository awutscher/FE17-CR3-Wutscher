import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { FormsModule,ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.scss']
})
export class OrderformComponent implements OnInit {


orderinfo = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.minLength(4)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(6)]),
    adress: new FormControl('', [Validators.required, Validators.minLength(7)]),
  });

  constructor() { }

  ngOnInit(): void {}
    onSubmit(){
        var a = this.orderinfo.value;
        alert(JSON.stringify(a))
    }
  }
