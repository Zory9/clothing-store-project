import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'contacts-component',
  templateUrl: './contacts.component.html',
})
export class ContactsComponent {
  public contactForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],  
      message: ['', Validators.required]    
    });
  }

  public submitForm(): void{
    if (this.contactForm.valid) {
      Swal.fire({
        title: 'Thank you!',
        text: `${this.contactForm.value.fullName}, thank you for your message! We will get back to you very soon!`,
        icon: 'success',
        confirmButtonText: 'Cool'
      })

      this.contactForm.reset();
    } else {
      Swal.fire({
        title: 'Invalid form!',
        text: "Please fill in the fields in the form to submit your message!",
        icon: 'warning',
        confirmButtonText: 'Okay'
      })
    }
  }
}
