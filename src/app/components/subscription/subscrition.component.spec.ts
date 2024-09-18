import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionComponent } from './subscrition.component';

describe('FormInputComponent', () => {
  let component: SubscriptionComponent;
  let fixture: ComponentFixture<SubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});