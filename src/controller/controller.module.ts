import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { DataProviderModule } from 'src/data-provider/data-provider.module';
import { IMessageService } from './service/message.service';
import { MessageService } from './service/impl/message.service.impl';
import { ProcessorPaymentService } from './service/impl/processor-payment.service.impl';
import { IProcessorPaymentService } from './service/processor-payment.service';
import { ProcessorPaymentController } from './payment.controller';

@Module({
    imports: [CoreModule, DataProviderModule],
    controllers: [ProcessorPaymentController],
    providers: [
        { provide: IProcessorPaymentService, useClass: ProcessorPaymentService },
        { provide: IMessageService, useClass: MessageService }
    ]
})
export class ControllerModule { }
