import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRow } from './contact-row';

describe('ContactRow', () => {
  let component: ContactRow;
  let fixture: ComponentFixture<ContactRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
