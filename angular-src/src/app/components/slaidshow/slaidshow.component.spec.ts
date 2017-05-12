/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SlaidshowComponent } from './slaidshow.component';

describe('SlaidshowComponent', () => {
  let component: SlaidshowComponent;
  let fixture: ComponentFixture<SlaidshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlaidshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaidshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
