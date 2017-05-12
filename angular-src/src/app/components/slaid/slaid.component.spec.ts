/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SlaidComponent } from './slaid.component';

describe('SlaidComponent', () => {
  let component: SlaidComponent;
  let fixture: ComponentFixture<SlaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
