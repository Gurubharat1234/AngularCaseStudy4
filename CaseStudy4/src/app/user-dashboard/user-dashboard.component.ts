import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  message: any;
  error!: string;
  isLoading = false; 

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
  this.isLoading = true; 
   this.auth.onRegister(form.value).subscribe((res: { message: any; }) => {
     this.isLoading = false;
     this.message = res.message;
     form.reset();
   },(err: any) => {
     this.isLoading = false;     
     this.error = "Something went wrong"
   })
  }

}