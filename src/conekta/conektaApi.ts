import { Customer } from "@/interfaces";
import { Configuration, CustomersApi, OrderRequest, OrdersApi, OrdersApiInterface, PaymentMethodsApi, TokenCard, TokensApi } from "conekta";

const apikey = process.env.CONEKTA_API_KEY;
const config = new Configuration({ accessToken: apikey });

const conektaCustomersApi = new CustomersApi(config);
const conektaTokenApi = new TokensApi(config);
const ordersApi = new OrdersApi(config);

// Create a class to export all this methods
export default class ConektaApi {
    static async createCustomer(customer: Customer) {
        return conektaCustomersApi.createCustomer(customer);
    }

    static async createToken(card: TokenCard) {
        return conektaTokenApi.createToken({
            card
        });
    }

    static async createOrder(order: OrderRequest) {
        return ordersApi.createOrder(order);
    }

    // static async 
}
