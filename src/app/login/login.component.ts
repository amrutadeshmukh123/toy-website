import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass,NgFor,ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router){}

  isError= false

  // toy=['Woolen','Handcrafted','Vehicles','Animals']


  customerForm = new FormGroup({
    password : new FormControl('' ,[Validators.required , Validators.minLength(5)]),
    userId : new FormControl('' ,[Validators.required, Validators.email]),
    // toy : new FormControl('' ,Validators.required),
    // age : new FormControl('' ,[Validators.required]),
    // feedback : new FormControl('',Validators.required)
  })


  onSubmit(){
    console.log(this.customerForm.value)
    if(this.customerForm.get('userId')?.value==='amruta@mail.com' && this.customerForm.get('password')?.value==='amruta123'){
      localStorage.setItem('user','user')
      this.router.navigateByUrl('dashboard')

    } else{
      this.isError=true
      this.customerForm.reset()
    }
  }

}
