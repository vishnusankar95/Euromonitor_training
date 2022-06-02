import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotactComponent } from './cotact.component';

describe('CotactComponent', () => {
  let component: CotactComponent;
  let fixture: ComponentFixture<CotactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
