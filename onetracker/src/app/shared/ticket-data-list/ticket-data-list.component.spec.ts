import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDataListComponent } from './ticket-data-list.component';

describe('TicketDataListComponent', () => {
  let component: TicketDataListComponent;
  let fixture: ComponentFixture<TicketDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketDataListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
