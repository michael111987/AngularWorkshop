import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingTaskComponent } from './binding-task.component';

describe('BindingTaskComponent', () => {
  let component: BindingTaskComponent;
  let fixture: ComponentFixture<BindingTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
