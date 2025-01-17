export interface PaymentSourceResponse {
    data: {
        id: number;
        public_data: {
            type: string;
        };
        type: string;
        status: string;
    }
}

