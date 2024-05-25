import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingComponent } from './wedding.component';

describe('WeddingComponent', () => {
  let component: WeddingComponent;
  let fixture: ComponentFixture<WeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
