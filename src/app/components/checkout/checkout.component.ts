import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private formBuider: FormBuilder) { }

  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuider.group({
      customer: this.formBuider.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      shippingAddress: this.formBuider.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      billingAddress: this.formBuider.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      creditCard: this.formBuider.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: ['']
      }),
    });
  }

    onSubmit() {
      console.log("Handling the submit button");
      console.log(this.checkoutFormGroup.get('customer').value);
    }

    copyShippingToBilling(event){
      if(event.target.checked){
        this.checkoutFormGroup.controls.billingAddress
          .setValue(this.checkoutFormGroup.controls.shippingAddress.value);
      } else {
        this.checkoutFormGroup.controls.billingAddress.reset();
      }
    }
}
