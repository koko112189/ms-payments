import { Inject, Injectable } from "@nestjs/common";
import { IProcessorPaymentService } from "../processor-payment.service";
import { AcceptanceTokenUc } from "src/core/use-case/payments/acceptance-token.uc";
import { PaymentMethodUc } from "src/core/use-case/payments/payment-method.uc";
import { TokenCardUc } from "src/core/use-case/payments/token-card.uc";
import { ProcessPaymentUc } from "src/core/use-case/payments/process-payment.uc";
import { PaymentStatusUc } from "src/core/use-case/payments/payment-status.uc";
import { CreateCardDto } from "src/controller/dto/create-card.dto";
import { TokenCardResponse } from "src/core/model/payments/token-card-response.model";
import { MerchantDataResponse } from "src/core/model/payments/acceptance-token-response.model";
import { ResponseService } from "src/controller/dto/response-service.dto";
import { TransactionDto } from "src/controller/dto/new-transaction.dto";
import { paymentSourceDto } from "src/controller/dto/payment-source.dto";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class ProcessorPaymentService implements IProcessorPaymentService {
    constructor(
        private readonly acceptanceTokenUc : AcceptanceTokenUc, 
        private readonly paymentMethodUc : PaymentMethodUc, 
        private readonly paymentStatusUc : PaymentStatusUc,
        private readonly processPaymentUc : ProcessPaymentUc, 
        private readonly tokenCardUc : TokenCardUc,
        @Inject('RABBIT_MQ') private readonly rabbitmqClient: ClientProxy

    ) {}
    getAcceptanceToken(): Promise<MerchantDataResponse> {
        return this.acceptanceTokenUc.execute();
    }
    setPaymentMethod(_paymentSourceDto: paymentSourceDto): Promise<any> {
        return this.paymentMethodUc.execute(_paymentSourceDto);
    }
    getTokenCard(dataCard: CreateCardDto): Promise<ResponseService> {
        return this.tokenCardUc.execute(dataCard);
    }
    async processPayment(transactionData : TransactionDto): Promise<any> {
        console.log("processPayment del servicio", transactionData);
        const customer = await this.rabbitmqClient.send('verify_customer', {customerData: transactionData.customer_data, email: transactionData.customer_email, shipping_address : transactionData.shipping_address});
        console.log("customer esta en", customer);
        return this.processPaymentUc.execute(transactionData);
    }
    getPaymentStatus(): Promise<any> {
        return this.paymentStatusUc.execute();
    }
    
}