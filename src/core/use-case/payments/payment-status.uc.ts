import { Injectable } from "@nestjs/common";

@Injectable()
export abstract class PaymentStatusUc {
    abstract execute(): Promise<any[]>
}