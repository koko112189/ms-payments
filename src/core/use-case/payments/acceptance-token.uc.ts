import { Injectable } from "@nestjs/common";
import { MerchantDataResponse } from "src/core/model/payments/acceptance-token-response.model";
import { TokenCardResponse } from "src/core/model/payments/token-card-response.model";

@Injectable()
export abstract class AcceptanceTokenUc {
    abstract execute(): Promise<MerchantDataResponse>;
}