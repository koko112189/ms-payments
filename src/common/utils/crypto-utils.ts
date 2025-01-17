import { IntegritySignBaseModel } from "src/core/model/integrity-sign-base.model";

export default class CryptoUtils {
    public static async getIntegritySign(data : IntegritySignBaseModel ) : Promise<string> {
        let concatenedString = this.getConcatenatedString(data);
        console.log("concatenedString", concatenedString);
        const encondedText = new TextEncoder().encode(concatenedString);
        const hashBuffer = await crypto.subtle.digest("SHA-256", encondedText);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
        return hashHex;
    }

    static getConcatenatedString(data : IntegritySignBaseModel ) {
        return `${data.reference}${data.ammount}${data.currency}${data.integrity_key}`;
    }
}
