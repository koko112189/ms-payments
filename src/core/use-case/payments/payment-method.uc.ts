import { Injectable } from "@nestjs/common";
import { TransactionDto } from "src/controller/dto/new-transaction.dto";
import { paymentSourceDto } from "src/controller/dto/payment-source.dto";


@Injectable()
export abstract class PaymentMethodUc {
    abstract execute(_paymentSourceDto: paymentSourceDto): Promise<any[]>;
}