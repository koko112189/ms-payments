export class PaymentProcessor {
    name: string;
  }
  
  export class PaymentMethod {
    name: string;
    payment_processors: PaymentProcessor[];
  }
  
  export class PresignedAcceptance {
    acceptance_token: string;
    permalink: string;
    type: string;
  }
  
  export class PresignedPersonalDataAuth {
    acceptance_token: string;
    permalink: string;
    type: string;
  }
  
  export class MerchantDataResponse {
    id: string;
    name: string;
    email: string;
    contact_name: string;
    phone_number: string;
    active: boolean;
    logo_url: string | null;
    legal_name: string;
    legal_id_type: string;
    legal_id: string;
    public_key: string;
    accepted_currencies: string[];
    fraud_javascript_key: string | null;
    fraud_groups: string[];
    accepted_payment_methods: string[];
    payment_methods: PaymentMethod[];
    presigned_acceptance: PresignedAcceptance;
    presigned_personal_data_auth: PresignedPersonalDataAuth;
  }
  