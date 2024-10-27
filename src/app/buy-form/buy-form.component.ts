import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'buy-form-component',
  templateUrl: './buy-form.component.html',
})
export class BuyFormComponent {
  public show: boolean = false;
  public buyNowForm: FormGroup;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.formService.formVisibility$.subscribe((visible) => {
      this.show = visible;
    });

    this.buyNowForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],  
      address: ['', Validators.required]    
    });
  } 

  public submitForm(): void {
    if (this.buyNowForm.valid) {
      Swal.fire({
        title: 'Thank you!',
        text: `${this.buyNowForm.value.firstName} ${this.buyNowForm.value.lastName}, thank you for your purchase!`,
        icon: 'success',
        confirmButtonText: 'Cool'
      })
     
      this.buyNowForm.reset();
    } else {
      Swal.fire({
        title: 'Invalid form!',
        text: "Please fill in the fields in the form!",
        icon: 'warning',
        confirmButtonText: 'Okay'
      })
    }
  }
}