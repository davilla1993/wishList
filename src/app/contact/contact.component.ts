import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { createInvalidDomainValidator } from './invalidEmailDomain';

const invalidEmailDomain = createInvalidDomainValidator(['gmail.com', 'yahoo.com'])

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  ngOnInit(): void {
  }

  contactForm  = new FormGroup({
    senderName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)])
  });


  submitForm() {
    console.log(this.contactForm.value);

  }
}
