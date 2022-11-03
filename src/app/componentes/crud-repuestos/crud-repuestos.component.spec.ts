import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRepuestosComponent } from './crud-repuestos.component';

describe('CrudRepuestosComponent', () => {
  let component: CrudRepuestosComponent;
  let fixture: ComponentFixture<CrudRepuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudRepuestosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudRepuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
