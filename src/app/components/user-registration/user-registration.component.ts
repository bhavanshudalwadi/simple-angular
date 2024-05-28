import { Component, ViewChild, inject } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ApiService } from '../../services/api.service';
import { ApiResponse } from '../../@types/globalTypes';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatGridListModule, MatSelectModule, MatButtonModule],
  templateUrl: './user-registration.component.html',
  styles: `
    .w-100 {
      width: 100%;
    }
    .me-1 {
      margin-right: 1rem;
    }
  `
})
export class UserRegistrationComponent {
  apiService = inject(ApiService);
  
  @ViewChild('regForm') regForm!: HTMLFormElement;

  regDetails = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    pincode: "",
    dob: "",
    gender: "",
    country: "",
    state: "",
    district: "",
    address: ""
  }

  matcher = new MyErrorStateMatcher();

  onPincodeChange(event: any) {
    let pincodeValue: number = event.target.value
    if(pincodeValue.toString().length == 6) {
      this.apiService.getPincodeDetails(pincodeValue).subscribe((result: ApiResponse) => {
        if(result[0].PostOffice != null && result[0].PostOffice.length > 0) {
          this.regDetails.country = result[0].PostOffice[0].Country ?? "";
          this.regDetails.state = result[0].PostOffice[0].State ?? "";
          this.regDetails.district = result[0].PostOffice[0].District ?? "";
        }else {
          this.regDetails.country = "";
          this.regDetails.state = "";
          this.regDetails.district = "";
        }
      })
    }else {
      this.regDetails.country = "";
      this.regDetails.state = "";
      this.regDetails.district = "";
    }
  }
}
