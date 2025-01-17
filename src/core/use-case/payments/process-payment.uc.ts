import { Injectable } from "@nestjs/common";
import { TransactionDto } from "src/controller/dto/new-transaction.dto";

@Injectable()
export abstract class ProcessPaymentUc {
    abstract execute(transactionData : TransactionDto): Promise<any[]>;
}