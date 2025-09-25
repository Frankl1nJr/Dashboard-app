import { Component, Input } from '@angular/core';
import { Contact } from '../contact-list/contact-list';

@Component({
  selector: 'app-contact-row',
  standalone: true,
  imports: [],
  template: `
    <tr>
      <td>{{ contact.id }}</td>
      <td>{{ contact.name }}</td>
      <td>{{ contact.email }}</td>
    </tr>
  `,
})

export class ContactRow {
  @Input({ required: true }) contact!: Contact;
}
