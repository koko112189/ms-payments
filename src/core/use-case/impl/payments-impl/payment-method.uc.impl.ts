import { Injectable } from "@nestjs/common";
import { PaymentMethodUc } from "../../payments/payment-method.uc";
import { IProcessorPaymentProvider } from "src/data-provider/provider/processor-payment.provider";
import { TransactionDto } from "src/controller/dto/new-transaction.dto";
import GeneralUtils from "src/common/utils/general-utils";
import CryptoUtils from "src/common/utils/crypto-utils";
import { paymentSourceDto } from "src/controller/dto/payment-source.dto";

@Injectable()
export class PaymentMehodUcImpl implements PaymentMethodUc{

    constructor(public readonly processorPaymentProvider: IProcessorPaymentProvider) { }
    async execute(_paymentSourceDto: paymentSourceDto): Promise<any> {
        return await this.processorPaymentProvider.setPaymentMethod(_paymentSourceDto);
    }
    
}