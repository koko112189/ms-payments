import { Injectable } from "@nestjs/common";
import { CreateCardDto } from "src/controller/dto/create-card.dto";
import { ResponseService } from "src/controller/dto/response-service.dto";
import { TokenCardResponse } from "src/core/model/payments/token-card-response.model";

@Injectable()
export abstract class TokenCardUc {
    abstract execute(dataCard: CreateCardDto): Promise<ResponseService>
}