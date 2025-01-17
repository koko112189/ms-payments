import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'src/common/configuration/database.config';
import { MessageEntity } from './entities/message.entity';
import { ServiceErrorEntity } from './entities/service-error.entity';
import { ServiceTracingEntity } from './entities/service-tracing.entity';
import { IMessageProvider } from './provider/message.provider';
import { MessageProvider } from './provider/impl/message.provider.impl';
import { IServiceErrorProvider } from './provider/service-error.provider';
import { ServiceErrorProvider } from './provider/impl/service-error.provider.impl';
import { IServiceTracingProvider } from './provider/service-tracing.provider';
import { ServiceTracingProvider } from './provider/impl/service-tracing.provider.impl';
import { IServiceTracingUc } from 'src/core/use-case/service-tracing.resource.uc';
import { ServiceTracingUcimpl } from 'src/core/use-case/impl/service-tracing.resource.uc.impl';
import { IProcessorPaymentProvider } from './provider/processor-payment.provider';
import { ProcessorPaymentProvider } from './provider/impl/processor-payment.provider.impl';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        TypeOrmModule.forFeature([ MessageEntity, ServiceErrorEntity, ServiceTracingEntity])
    ],
    providers: [
        {provide: IProcessorPaymentProvider, useClass: ProcessorPaymentProvider},
        {provide: IMessageProvider, useClass: MessageProvider},
        {provide: IServiceErrorProvider, useClass: ServiceErrorProvider},
        {provide: IServiceTracingProvider, useClass: ServiceTracingProvider},
        {provide: IServiceTracingUc, useClass: ServiceTracingUcimpl},
        HttpModule
    ],
    exports: [IProcessorPaymentProvider, IMessageProvider, IServiceErrorProvider, IServiceTracingProvider, IServiceTracingUc, HttpModule]
})
export class DataProviderModule {}
