import { Configuration, CustomersApi, PaymentMethodsApi, TokensApi } from "conekta";

const apikey = process.env.CONEKTA_API_KEY;
const config = new Configuration({ accessToken: apikey });

const conektaCustomersApi = new CustomersApi(config);
const conektaTokenApi = new TokensApi(config);
// const conektaPaymentSourceApi = new PaymentMethodsApi(config);
const conektaOrderApi = new Payment;





// Create a class to export all this methods
export default class ConektaApi {
    static async createCustomer(customer: customer) {
        return conektaCustomersApi.createCustomer(customer);
    }

    static async createToken() {
        return conektaTokenApi.createToken({
            card: {
                name: "John Doe",
                exp_month: "10",
                exp_year: "2025",
                number: "4242424242424242",
                cvc: "123"
            }
        }); 
    }

    static async createPaymentSource() {
        return conektaPaymentSourceApi.createCustomerPaymentMethods();
    }
}

// export default conektaCustomersApi;