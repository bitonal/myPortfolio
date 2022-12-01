import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  username!: string;
  Semail!: string;
  @ViewChild('myForm')
  form!: NgForm;


  constructor() { }

  ngOnInit(): void {
  }
 
  onSubmit(){
    console.log(this.form)
    alert("Your is Register Welcom")
  }
}
