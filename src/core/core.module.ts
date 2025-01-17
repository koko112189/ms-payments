import { Module } from '@nestjs/common';
import { DataProviderModule } from 'src/data-provider/data-provider.module';
import { IMessageUc } from './use-case/message.uc';
import { MessageUcimpl } from './use-case/impl/message.uc.impl';
import { IServiceErrorUc } from './use-case/service-error.resource.uc';
import { ServiceErrorUcimpl } from './use-case/impl/service-error.resource.uc.impl';
import { ServiceTracingUcimpl } from './use-case/impl/service-tracing.resource.uc.impl';
import { IServiceTracingUc } from './use-case/service-tracing.resource.uc';
import { AcceptanceTokenUc } from './use-case/payments/acceptance-token.uc';
import { AcceptanceTokenUcImpl } from './use-case/impl/payments-impl/acceptance-token.uc.impl';
import { PaymentMethodUc } from './use-case/payments/payment-method.uc';
import { PaymentMehodUcImpl } from './use-case/impl/payments-impl/payment-method.uc.impl';
import { PaymentStatusUc } from './use-case/payments/payment-status.uc';
import { PaymentStatusUcImpl } from './use-case/impl/payments-impl/payment-status.uc.impl';
import { ProcessPaymentUc } from './use-case/payments/process-payment.uc';
import { ProcessPaymentUcImpl } from './use-case/impl/payments-impl/process-payment.uc.impl';
import { TokenCardUc } from './use-case/payments/token-card.uc';
import { TokenCardUcImpl } from './use-case/impl/payments-impl/token-card.uc.impl';

@Module({
    imports: [DataProviderModule],
    providers: [
        { provide: AcceptanceTokenUc, useClass: AcceptanceTokenUcImpl},
        { provide: PaymentMethodUc, useClass: PaymentMehodUcImpl},
        { provide: PaymentStatusUc, useClass: PaymentStatusUcImpl},
        { provide: ProcessPaymentUc, useClass: ProcessPaymentUcImpl},
        { provide: TokenCardUc, useClass: TokenCardUcImpl},
        { provide: IMessageUc, useClass: MessageUcimpl},
        { provide: IServiceErrorUc, useClass: ServiceErrorUcimpl},
        { provide: IServiceTracingUc, useClass: ServiceTracingUcimpl},
    ],
    exports: [AcceptanceTokenUc,PaymentMethodUc, PaymentStatusUc, ProcessPaymentUc, TokenCardUc, IMessageUc, IServiceErrorUc, IServiceTracingUc]})
export class CoreModule {
    
}
