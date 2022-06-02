import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanagerComponent } from './semanager.component';

describe('SemanagerComponent', () => {
  let component: SemanagerComponent;
  let fixture: ComponentFixture<SemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
