import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkspacePage } from './workspace.page';

describe('WorkspacePage', () => {
  let component: WorkspacePage;
  let fixture: ComponentFixture<WorkspacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkspacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
