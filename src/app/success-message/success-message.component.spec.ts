// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { SuccessMessageComponent } from './success-message.component';
// import { Component, ViewChild } from '@angular/core';

// describe('SuccessMessageComponent', () => {
//   let testHostComponent: TestHostComponent;
//   let testHostFixture: ComponentFixture<TestHostComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [SuccessMessageComponent, TestHostComponent],
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     testHostFixture = TestBed.createComponent(TestHostComponent);
//     testHostComponent = testHostFixture.componentInstance;
//   });

//   it('should show 50', () => {
//     testHostComponent.successMessageComponent.amount = 50;
//     testHostFixture.detectChanges();
//     expect(
//       testHostFixture.nativeElement.querySelector('div').innerText
//     ).toEqual(50);
//   });

//   it('should show Prize', () => {
//     testHostComponent.successMessageComponent.prize = 'Prize';
//     testHostFixture.detectChanges();
//     expect(
//       testHostFixture.nativeElement.querySelector('div').innerText
//     ).toEqual('Prize');
//   });

//   @Component({
//     selector: `app-host-component`,
//     template: `<app-success-message></app-success-message>`,
//   })
//   class TestHostComponent {
//     @ViewChild(SuccessMessageComponent)
//     public successMessageComponent: SuccessMessageComponent;
//   }
// });
