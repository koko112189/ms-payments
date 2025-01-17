import { Injectable } from "@nestjs/common";
import { CreateCardDto } from "src/controller/dto/createCard.dto";
import { MerchantDataResponse } from "src/core/model/payments/acceptance-token-response.model";
import { TokenCardResponse } from "src/core/model/payments/token-card-response.model";

@Injectable()
export abstract class IProcessorPaymentProvider {
    abstract getAcceptanceToken(): Promise<MerchantDataResponse>;
    abstract setPaymentMethod(): Promise<any>;
    abstract getTokenCard(CreateCardDto: CreateCardDto): Promise<TokenCardResponse>;
    abstract processPayment(): Promise<any>;
    abstract getPaymentStatus(): Promise<any>;
}