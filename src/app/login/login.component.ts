import { Component, OnInit , ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  Semail!: string;
  @ViewChild('myForm')
  form!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.form)
    alert("Your is login  Welcom")
  }

}
