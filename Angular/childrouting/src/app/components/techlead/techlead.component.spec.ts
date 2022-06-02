import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechleadComponent } from './techlead.component';

describe('TechleadComponent', () => {
  let component: TechleadComponent;
  let fixture: ComponentFixture<TechleadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechleadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
