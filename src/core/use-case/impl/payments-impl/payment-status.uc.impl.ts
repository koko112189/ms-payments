import { Injectable } from "@nestjs/common";
import { PaymentStatusUc } from "../../payments/payment-status.uc";
import { IProcessorPaymentProvider } from "src/data-provider/provider/processor-payment.provider";

@Injectable()
export class PaymentStatusUcImpl implements PaymentStatusUc{

    constructor(public readonly processorPaymentProvider: IProcessorPaymentProvider) { }
    execute(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    
}