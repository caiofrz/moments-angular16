import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMomentComponent } from './card-moment.component';

describe('CardMomentComponent', () => {
  let component: CardMomentComponent;
  let fixture: ComponentFixture<CardMomentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMomentComponent]
    });
    fixture = TestBed.createComponent(CardMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
