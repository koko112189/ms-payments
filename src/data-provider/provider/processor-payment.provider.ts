import { Injectable } from "@nestjs/common";
import { CreateCardDto } from "src/controller/dto/create-card.dto";
import { TransactionDto } from "src/controller/dto/new-transaction.dto";
import { paymentSourceDto } from "src/controller/dto/payment-source.dto";
import { MerchantDataResponse } from "src/core/model/payments/acceptance-token-response.model";
import { PaymentSourceResponse } from "src/core/model/payments/payment-source-response.model";
import { TokenCardResponse } from "src/core/model/payments/token-card-response.model";

@Injectable()
export abstract class IProcessorPaymentProvider {
    abstract getAcceptanceToken(): Promise<MerchantDataResponse>;
    abstract setPaymentMethod(_paymentSourceDto: paymentSourceDto): Promise<PaymentSourceResponse>;
    abstract getTokenCard(CreateCardDto: CreateCardDto): Promise<TokenCardResponse>;
    abstract processPayment(transactionData : TransactionDto): Promise<any>;
    abstract getPaymentStatus(): Promise<any>;
}