import { Body, Controller, Get, Post, Put, Query } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { IProcessorPaymentService } from "./service/processor-payment.service";
import { CreateCardDto } from "./dto/create-card.dto";

@ApiTags('Payment')
@Controller('Payment')
export class ProcessorPaymentController {

    constructor(private readonly processorPaymentService: IProcessorPaymentService) { }

    @Get()
    @ApiOperation({ summary: 'get acceptance tokens' })
    async getAcceptanceTokens() {
        return await this.processorPaymentService.getAcceptanceToken();
    }

    @Post()
    @ApiOperation({ summary: 'set payment' })
    @ApiBody({ type: Object })
    async Payout() {
        throw new Error("Method not implemented.");
        //return await this.processorPaymentService.processPayment();
    }

    @Post("tokenizeCard")
    @ApiOperation({ summary: 'tokenize card' })
    @ApiBody({ type: CreateCardDto })
    async tokenizeCard(@Body() dataCard: CreateCardDto) {
        return await this.processorPaymentService.getTokenCard(dataCard);
    }

}