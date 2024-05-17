import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormEmailComponent2 } from './register-form-email-component2.component';

describe('RegisterFormEmailComponent', () => {
  let component: RegisterFormEmailComponent2;
  let fixture: ComponentFixture<RegisterFormEmailComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormEmailComponent2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormEmailComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
