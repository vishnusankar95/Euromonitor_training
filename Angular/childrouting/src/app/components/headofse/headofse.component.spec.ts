import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadofseComponent } from './headofse.component';

describe('HeadofseComponent', () => {
  let component: HeadofseComponent;
  let fixture: ComponentFixture<HeadofseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadofseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadofseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
