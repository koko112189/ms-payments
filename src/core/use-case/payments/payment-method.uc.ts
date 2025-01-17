import { Injectable } from "@nestjs/common";


@Injectable()
export abstract class PaymentMethodUc {
    abstract execute(): Promise<any[]>;
}