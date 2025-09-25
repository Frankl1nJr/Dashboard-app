import { Component } from '@angular/core';
import { ContactRow } from '../contact-row/contact-row';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [ContactRow],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css'
})

export class ContactList {
  contacts: Contact[] = [
    { id: 1, name: 'Maria Lopez', email: 'maria@example.com'},
    { id: 2, name: 'Carlos Ruiz', email: 'carlos@example.com'},
    { id: 3, name: 'Ana Gomez', email: 'ana@example.com'},
    { id: 4, name: 'Luis Fernandez', email: 'luis@example.com'},
  ];
}

export interface Contact {
  id: number;
  name: string;
  email: string;
}


