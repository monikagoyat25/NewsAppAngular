import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstourComponent } from './newstour.component';

describe('NewstourComponent', () => {
  let component: NewstourComponent;
  let fixture: ComponentFixture<NewstourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
