import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      // You can handle the form submission here (e.g., send data to a server)
    } else {
      console.log('Form is not valid');
    }
  }
}
