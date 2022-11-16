import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoVehiculosComponent } from './dialogo-vehiculos.component';

describe('DialogoVehiculosComponent', () => {
  let component: DialogoVehiculosComponent;
  let fixture: ComponentFixture<DialogoVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoVehiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
