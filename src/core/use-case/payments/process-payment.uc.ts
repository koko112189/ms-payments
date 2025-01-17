import { Injectable } from "@nestjs/common";

@Injectable()
export abstract class ProcessPaymentUc {
    abstract execute(): Promise<any[]>;
}