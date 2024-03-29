import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UserService } from "./user.service";
import { LogOutComponent } from './log-out/log-out.component';
import { MatButtonModule } from "@angular/material/button";
import { UserRoutingModule } from "./user-routing.module";

@NgModule({
   declarations:[LoginComponent,RegisterComponent, LogOutComponent],
   imports:[CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule,RouterModule,MatButtonModule,UserRoutingModule],
   providers:[UserService],
   exports:[LoginComponent,RegisterComponent,LogOutComponent]
})

export class UserModule{

}