import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoMecanicoComponent } from './dialogo-mecanico.component';

describe('DialogoMecanicoComponent', () => {
  let component: DialogoMecanicoComponent;
  let fixture: ComponentFixture<DialogoMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoMecanicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
