import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOptionsComponent } from './register-options.component';

describe('RegisterComponent', () => {
  let component: RegisterOptionsComponent;
  let fixture: ComponentFixture<RegisterOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
