export const PaymentConfig =  {
    url: process.env.API_COMPANY_URL,
    apiKey: process.env.COMPANY_API_KEY,
    apiKeyPrivate: process.env.COMPANY_PRIVATE_API_KEY,
    integrityKey: process.env.COMPANY_INTEGRITY_KEY,
    eventkey: process.env.COMPANY_EVENT_KEY,
    endpoint_token_card: process.env.ENDPOINT_TOKEN_CARD,
    endpoint_acceptance_token: process.env.ENDPOINT_ACCEPTANCE_TOKEN,
    endpoint_payment_method : process.env.ENDPOINT_PAYMENT_METHOD,
    endpoint_payment_status : process.env.ENDPOINT_PAYMENT_STATUS,
    endpoint_process_payment : process.env.ENDPOINT_PROCESS_PAYMENT,
}