import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoRepuestoComponent } from './dialogo-repuesto.component';

describe('DialogoRepuestoComponent', () => {
  let component: DialogoRepuestoComponent;
  let fixture: ComponentFixture<DialogoRepuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoRepuestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoRepuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
