import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClassesComponent } from './register-classes.component';

describe('RegisterClassesComponent', () => {
  let component: RegisterClassesComponent;
  let fixture: ComponentFixture<RegisterClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterClassesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
