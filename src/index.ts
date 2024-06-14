export class PublicApiClient {
  constructor() {
    this.user = {};
import {Client} from "./abstract/client";
export const ClientsPool: Client[] = []
    this.tariff = {};
    this.payment = {};
    this.key = {};
    this.calculator = {};
    this.ban = {};
    this.auth = {};
  }

  readonly user: object;
  readonly tariff: object;
  readonly payment: object;
  readonly key: object;
  readonly calculator: object;
  readonly ban: object;
  readonly auth: object;
}
