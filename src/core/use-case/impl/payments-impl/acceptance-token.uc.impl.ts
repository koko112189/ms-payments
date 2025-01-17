import { Injectable } from "@nestjs/common";
import { AcceptanceTokenUc } from "../../payments/acceptance-token.uc";
import { IProcessorPaymentProvider } from "src/data-provider/provider/processor-payment.provider";
import { MerchantDataResponse } from "src/core/model/payments/acceptance-token-response.model";

@Injectable()
export class AcceptanceTokenUcImpl implements AcceptanceTokenUc{

    constructor(public readonly processorPaymentProvider: IProcessorPaymentProvider) { }
    execute(): Promise<MerchantDataResponse> {
        return this.processorPaymentProvider.getAcceptanceToken();
    }
    
}