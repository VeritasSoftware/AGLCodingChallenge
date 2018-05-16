import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AglPetsComponent } from './agl-pets.component';

describe('AglPetsComponent', () => {
  let component: AglPetsComponent;
  let fixture: ComponentFixture<AglPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AglPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AglPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
