import api from "./api";
import { makeAutoObservable } from "mobx";

class ShopStore {
  constructor() {
    makeAutoObservable(this);
  }
  shops = [];
  loding = true;
  fetchShops = async () => {
    try {
      const res = await api.get("/shops");
      this.shops = res.data;
      this.loding = false;
    } catch (error) {
      console.log(
        "🚀 ~ file: shopStore.js ~ line 15 ~ ShopStore ~ fetchShops= ~ error",
        error
      );
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;
