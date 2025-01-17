import { Injectable } from "@nestjs/common";
import { CreateCardDto } from "../dto/create-card.dto";
import { TokenCardResponse } from "src/core/model/payments/token-card-response.model";
import { MerchantDataResponse } from "src/core/model/payments/acceptance-token-response.model";
import { ResponseService } from "../dto/response-service.dto";
import { TransactionDto } from "../dto/new-transaction.dto";
import { paymentSourceDto } from "../dto/payment-source.dto";

@Injectable()
export abstract class IProcessorPaymentService {
    abstract getAcceptanceToken(): Promise<MerchantDataResponse>;
    abstract setPaymentMethod(_paymentSourceDto: paymentSourceDto): Promise<any>;
    abstract getTokenCard(dataCard: CreateCardDto): Promise<ResponseService>;
    abstract processPayment(transactionData : TransactionDto): Promise<any>;
    abstract getPaymentStatus(): Promise<any>;
}