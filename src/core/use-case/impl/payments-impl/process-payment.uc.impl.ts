import { Injectable } from "@nestjs/common";
import { ProcessPaymentUc } from "../../payments/process-payment.uc";
import { IProcessorPaymentProvider } from "src/data-provider/provider/processor-payment.provider";

@Injectable()
export class ProcessPaymentUcImpl implements ProcessPaymentUc{

    constructor(public readonly processorPaymentProvider: IProcessorPaymentProvider) { }
    execute(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    
}