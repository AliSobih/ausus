import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServesComponent } from './serves.component';

describe('ServesComponent', () => {
  let component: ServesComponent;
  let fixture: ComponentFixture<ServesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
