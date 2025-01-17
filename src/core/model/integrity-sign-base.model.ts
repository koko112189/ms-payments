export class IntegritySignBaseModel {
    reference: string;
    ammount: number;
    currency: string;
    integrity_key: string = process.env.COMPANY_INTEGRITY_KEY || "";
}