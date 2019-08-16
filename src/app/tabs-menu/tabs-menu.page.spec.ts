import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsMenuPage } from './tabs-menu.page';

describe('TabsMenuPage', () => {
  let component: TabsMenuPage;
  let fixture: ComponentFixture<TabsMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsMenuPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
