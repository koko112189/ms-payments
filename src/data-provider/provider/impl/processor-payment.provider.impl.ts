import { Injectable } from "@nestjs/common";
import { IProcessorPaymentProvider } from "../processor-payment.provider"
import { HttpService } from '@nestjs/axios';
import { PaymentConfig } from "src/common/configuration/payment.config";
import { MerchantDataResponse } from "src/core/model/payments/acceptance-token-response.model";
import { firstValueFrom } from 'rxjs';
import GeneralUtils from "src/common/utils/general-utils";
import { Etask, EtaskDesc } from "src/common/utils/enums/task.enum";
import { TokenCardResponse } from "src/core/model/payments/token-card-response.model";
import { CreateCardDto } from "src/controller/dto/create-card.dto";
import { PaymentSourceResponse } from "src/core/model/payments/payment-source-response.model";
import { paymentSourceDto } from "src/controller/dto/payment-source.dto";
import { TransactionDto } from "src/controller/dto/new-transaction.dto";


@Injectable()
export class ProcessorPaymentProvider implements IProcessorPaymentProvider {
    constructor(private readonly httpService : HttpService) { }
    async getAcceptanceToken(): Promise<MerchantDataResponse> {
        const response =  await firstValueFrom(this.httpService.get<MerchantDataResponse>(`${PaymentConfig.url}${PaymentConfig.endpoint_acceptance_token}/${PaymentConfig.apiKey}/checkout`));
        return response.data;
    }
    async setPaymentMethod(_paymentSourceDto: paymentSourceDto): Promise<PaymentSourceResponse> {
        try {
            const data = JSON.stringify({..._paymentSourceDto});
            const config = {
                headers: {
                    'Authorization': `Bearer ${PaymentConfig.apiKey}`,
                    'Content-Type': 'application/json',
                },
            };
            const url = `${PaymentConfig.url}/${PaymentConfig.endpoint_payment_method}`;
            const response = await firstValueFrom(this.httpService.post<PaymentSourceResponse>(url, data, config));
            return response.data;
        } catch (error) {
            GeneralUtils.assignTaskError(error, Etask.CREATE, EtaskDesc.CREATE);
            throw error;
        }
    }
    async getTokenCard(CreateCardDto: CreateCardDto): Promise<TokenCardResponse> {
        try {
            const data = JSON.stringify({...CreateCardDto});
            const config = {
                headers: {
                    'Authorization': `Bearer ${PaymentConfig.apiKey}`,
                    'Content-Type': 'application/json',
                },
            };
            const url = `${PaymentConfig.url}/${PaymentConfig.endpoint_token_card}`;
            const response = await firstValueFrom(this.httpService.post<TokenCardResponse>(url, data, config));
            return response.data;
        } catch (error) {
            GeneralUtils.assignTaskError(error, Etask.CREATE, EtaskDesc.CREATE);
            throw error;
        }
    }
    async processPayment(transactionData : TransactionDto): Promise<any> {
        try {
            const data = JSON.stringify({...TransactionDto});
            const config = {
                headers: {
                    'Authorization': `Bearer ${PaymentConfig.apiKeyPrivate}`,
                    'Content-Type': 'application/json',
                },
            };
            const url = `${PaymentConfig.url}/${PaymentConfig.endpoint_process_payment}`;
            const response = await firstValueFrom(this.httpService.post<TokenCardResponse>(url, data, config));
            return response.data;
        } catch (error) {
            GeneralUtils.assignTaskError(error, Etask.CREATE, EtaskDesc.CREATE);
            throw error;
        }
    }
    getPaymentStatus(): Promise<any> {
        throw new Error("Method not implemented.");
    }    
}