import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormEmailComponent } from './register-form-email.component';

describe('RegisterFormEmailComponent', () => {
  let component: RegisterFormEmailComponent;
  let fixture: ComponentFixture<RegisterFormEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterFormEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
