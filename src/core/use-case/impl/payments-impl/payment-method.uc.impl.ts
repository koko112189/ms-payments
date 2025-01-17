import { Injectable } from "@nestjs/common";
import { PaymentMethodUc } from "../../payments/payment-method.uc";
import { IProcessorPaymentProvider } from "src/data-provider/provider/processor-payment.provider";

@Injectable()
export class PaymentMehodUcImpl implements PaymentMethodUc{

    constructor(public readonly processorPaymentProvider: IProcessorPaymentProvider) { }
    execute(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    
}