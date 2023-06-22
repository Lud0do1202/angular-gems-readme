import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss'],
  providers: [MessageService],
})
export class PaypalComponent implements OnInit {
  public payPalConfig!: IPayPalConfig;
  donnation: number = 5;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'AabkNQVHyM87m7PZlI7_LDl_iH2yNt6tED1jPHnFbgc3VbKiBiqpj-JPqlTUPEiCpg9u1X0aSwoRD8Iv',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'EUR',
                value: this.donnation.toString(),
                breakdown: {
                  item_total: {
                    currency_code: 'EUR',
                    value: this.donnation.toString(),
                  },
                },
              },
              items: [
                {
                  name: 'Lud0do1202',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'EUR',
                    value: this.donnation.toString(),
                  },
                },
              ],
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onClientAuthorization: (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "$$$ Bill gates, watch out, I'm richer than before $$$",
        });
      },
      onCancel: (data, actions) => {
        this.messageService.add({ severity: 'info', summary: 'Cancel', detail: "Snif :'(" });
      },
      onError: (err) => {
        // Donnation <= 0
        if (!this.donnation || this.donnation <= 0)
          return this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'A donnation of 0€ is not a donnation',
          });

        // Error
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Oh Noooo !!! My money !!! Please come back',
        });
      },
    };
  }
}
