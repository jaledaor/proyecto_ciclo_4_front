import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JefeOperacionesComponent } from './jefe-operaciones.component';

describe('JefeOperacionesComponent', () => {
  let component: JefeOperacionesComponent;
  let fixture: ComponentFixture<JefeOperacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JefeOperacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JefeOperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
