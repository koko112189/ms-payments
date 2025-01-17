import { Injectable } from "@nestjs/common";
import { CreateCardDto } from "../dto/createCard.dto";
import { TokenCardResponse } from "src/core/model/payments/token-card-response.model";
import { MerchantDataResponse } from "src/core/model/payments/acceptance-token-response.model";
import { ResponseService } from "../dto/response-service.dto";

@Injectable()
export abstract class IProcessorPaymentService {
    abstract getAcceptanceToken(): Promise<MerchantDataResponse>;
    abstract setPaymentMethod(): Promise<any>;
    abstract getTokenCard(dataCard: CreateCardDto): Promise<ResponseService>;
    abstract processPayment(): Promise<any>;
    abstract getPaymentStatus(): Promise<any>;
}