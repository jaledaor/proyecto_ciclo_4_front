import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoRevisionComponent } from './dialogo-revision.component';

describe('DialogoRevisionComponent', () => {
  let component: DialogoRevisionComponent;
  let fixture: ComponentFixture<DialogoRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoRevisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
