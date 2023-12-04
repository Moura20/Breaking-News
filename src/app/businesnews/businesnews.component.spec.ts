import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesnewsComponent } from './businesnews.component';

describe('BusinesnewsComponent', () => {
  let component: BusinesnewsComponent;
  let fixture: ComponentFixture<BusinesnewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinesnewsComponent]
    });
    fixture = TestBed.createComponent(BusinesnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
