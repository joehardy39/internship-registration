import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserInfoComponent } from './browser-info.component';

describe('BrowserInfoComponent', () => {
  let component: BrowserInfoComponent;
  let fixture: ComponentFixture<BrowserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowserInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
