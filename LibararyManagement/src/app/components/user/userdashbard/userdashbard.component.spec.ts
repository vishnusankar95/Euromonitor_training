import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashbardComponent } from './userdashbard.component';

describe('UserdashbardComponent', () => {
  let component: UserdashbardComponent;
  let fixture: ComponentFixture<UserdashbardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdashbardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdashbardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
