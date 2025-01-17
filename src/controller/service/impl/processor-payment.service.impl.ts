import { Injectable } from "@nestjs/common";
import { IProcessorPaymentService } from "../processor-payment.service";
import { AcceptanceTokenUc } from "src/core/use-case/payments/acceptance-token.uc";
import { PaymentMethodUc } from "src/core/use-case/payments/payment-method.uc";
import { TokenCardUc } from "src/core/use-case/payments/token-card.uc";
import { ProcessPaymentUc } from "src/core/use-case/payments/process-payment.uc";
import { PaymentStatusUc } from "src/core/use-case/payments/payment-status.uc";
import { CreateCardDto } from "src/controller/dto/createCard.dto";
import { TokenCardResponse } from "src/core/model/payments/token-card-response.model";
import { MerchantDataResponse } from "src/core/model/payments/acceptance-token-response.model";
import { ResponseService } from "src/controller/dto/response-service.dto";

@Injectable()
export class ProcessorPaymentService implements IProcessorPaymentService {
    constructor(
        private readonly acceptanceTokenUc : AcceptanceTokenUc, 
        private readonly paymentMethodUc : PaymentMethodUc, 
        private readonly paymentStatusUc : PaymentStatusUc,
        private readonly processPaymentUc : ProcessPaymentUc, 
        private readonly tokenCardUc : TokenCardUc

    ) {}
    getAcceptanceToken(): Promise<MerchantDataResponse> {
        return this.acceptanceTokenUc.execute();
    }
    setPaymentMethod(): Promise<any> {
        return this.paymentMethodUc.execute();
    }
    getTokenCard(dataCard: CreateCardDto): Promise<ResponseService> {
        return this.tokenCardUc.execute(dataCard);
    }
    processPayment(): Promise<any> {
        return this.processPaymentUc.execute();
    }
    getPaymentStatus(): Promise<any> {
        return this.paymentStatusUc.execute();
    }
    
}