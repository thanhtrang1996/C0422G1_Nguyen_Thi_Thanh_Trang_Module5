import {Country} from "./country";
import {Password} from "./password";

export interface Customer {
  email?: string;
  password?: Password;
  country?: Country;
  age?: string;
  gender?: number;
  phone?: number;
}
