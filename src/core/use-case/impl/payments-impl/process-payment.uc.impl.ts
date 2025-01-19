import { Injectable } from "@nestjs/common";
import { ProcessPaymentUc } from "../../payments/process-payment.uc";
import { IProcessorPaymentProvider } from "src/data-provider/provider/processor-payment.provider";
import { TransactionDto } from "src/controller/dto/new-transaction.dto";
import CryptoUtils from "src/common/utils/crypto-utils";
import { randomUUID } from "crypto";

@Injectable()
export class ProcessPaymentUcImpl implements ProcessPaymentUc{

    constructor(public readonly processorPaymentProvider: IProcessorPaymentProvider) { }
    async execute(transactionData: TransactionDto): Promise<any> {
        transactionData.amount_in_cents *= 100;
        transactionData.reference = randomUUID();
        transactionData.signature = await CryptoUtils.getIntegritySign({
            reference: transactionData.reference,
            ammount: transactionData.amount_in_cents,
            currency: transactionData.currency,
            integrity_key: process.env.COMPANY_INTEGRITY_KEY
        });
    
        const created_transaction = await this.processorPaymentProvider.processPayment(transactionData);
        console.log("created_transaction", created_transaction);
        const checkInterval = 5000; 
        const maxChecks = 12; 
        let attempts = 0;
    
        return new Promise((resolve, reject) => {
            const interval = setInterval(async () => {
                attempts++; 
                try {
                    const status = await this.processorPaymentProvider.getPaymentStatus(created_transaction.data.id);
                    if (status.data.status != 'PENDING') {
                        console.log("status es: ", status.data.status);
                        clearInterval(interval);
                        resolve(status.data);
                    }
                    if (attempts >= maxChecks) {
                        clearInterval(interval);
                        resolve("status not found");
                    }
                } catch (error) {
                    clearInterval(interval);
                    reject(error);
                }
            }, checkInterval);
        });
    }
    
}