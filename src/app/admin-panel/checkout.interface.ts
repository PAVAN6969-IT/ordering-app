import { ItemI } from "../ordering/ItemInterface";

export interface checkoutI {
  menuList: {
    [key: string]: ItemI
  };
  totalItemsSelected: number;
  subTotalVal: number;
  tableno: number
}
