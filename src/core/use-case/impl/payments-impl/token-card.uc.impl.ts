import { Injectable } from "@nestjs/common";
import { TokenCardUc } from "../../payments/token-card.uc";
import { IProcessorPaymentProvider } from "src/data-provider/provider/processor-payment.provider";
import { TokenCardResponse } from "src/core/model/payments/token-card-response.model";
import GeneralUtils from "src/common/utils/general-utils";
import { Etask, EtaskDesc } from "src/common/utils/enums/task.enum";
import { ResponseService } from "src/controller/dto/response-service.dto";
import { EmessageMapping } from "src/common/utils/enums/message.enum";
import { CreateCardDto } from "src/controller/dto/create-card.dto";

@Injectable()
export class TokenCardUcImpl implements TokenCardUc {

    constructor(public readonly processorPaymentProvider: IProcessorPaymentProvider) { }
    async execute(CreateCardDto: CreateCardDto): Promise<ResponseService> {
        try {
            const response = await this.processorPaymentProvider.getTokenCard(CreateCardDto);
            return new ResponseService(true, EmessageMapping.DEFAULT, 200, response);
        } catch (error) {
            GeneralUtils.assignTaskError(error, Etask.UPDATE, EtaskDesc.LOAD_MESSAGE);
            throw error;
        }
    }
}