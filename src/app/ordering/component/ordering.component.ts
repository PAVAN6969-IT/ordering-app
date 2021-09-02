import { Component, OnInit } from '@angular/core';
import { ItemI } from '../ItemInterface';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.scss']
})
export class OrderingComponent implements OnInit {

  menuContent = [
    { menuHeading:'Recommended',  menuList:[
      { id:1,itemName:'Chicken Tikka', itemPrice:229, quantity:0},
      { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
      { id:3,itemName:'Baby Corn Manchurian', itemPrice:240, quantity:0  }
      ] },
    { menuHeading:'Deserts',  menuList:[
        { id:4,itemName:'Phirni', itemPrice:60, quantity:0  },
        { id:5,itemName:'Kaddu Ki Kheer', itemPrice:70, quantity:0  },
        { id:6,itemName:'Qubani Ka Meetha', itemPrice:70, quantity:0  }
      ] },
    { menuHeading:'Biryanis',  menuList:[
        { id:7,itemName:'Egg Biryani', itemPrice:149, quantity:0  },
        { id:8,itemName:'Chicken Biryani', itemPrice:199, quantity:0  },
        { id:9,itemName:'Chicken Boneless Biryani', itemPrice:229, quantity:0  }
      ] },
    { menuHeading:'Kebabs',  menuList:[
        { id:10,itemName:'Chicken Tikka', itemPrice:229, quantity:0  },
        { id:11,itemName:'Chicken Reshmi Kebab', itemPrice:229, quantity:0  },
        { id:12,itemName:'Tandoori Chicken', itemPrice:199, quantity:0  }
      ] },
    { menuHeading:'Non Veg Starters',  menuList:[
        { id:13,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
        { id:14,itemName:'Chicken Manchurian', itemPrice:299, quantity:0  },
        { id:15,itemName:'Chilli Chicken', itemPrice:299, quantity:0  },
        { id:16,itemName:'Chicken Lollipop', itemPrice:199, quantity:0  }
      ] },
    { menuHeading:'Veg Starters',  menuList:[
        { id:17,itemName:'Baby Corn Manchurian', itemPrice:240, quantity:0  },
        { id:18,itemName:'Paneer Chilli', itemPrice:240, quantity:0  },
        { id:19,itemName:'Paneer 65', itemPrice:240, quantity:0  },
      ] },
    { menuHeading:'Breads',  menuList:[
        { id:20,itemName:'Tandoori Roti', itemPrice:25, quantity:0  },
        { id:21,itemName:'Rumali Roti', itemPrice:20, quantity:0  },
        { id:22,itemName:'Butter Roti', itemPrice:20, quantity:0  },
        { id:23,itemName:'Plain Roti', itemPrice:25, quantity:0  },
        { id:24,itemName:'Butter Roti', itemPrice:35, quantity:0  }
      ] }
 ]

  enableAddBtn:boolean= false;
  enableCart: boolean= false;
  selectedNoItems:number = 0;
  totalItemsSelected:number = 0;
  subTotalVal:number =0;
  cartItems: ItemI[] =[];
  checkoutList = {
    menuList: {},
    tableno: 0,
    totalItemsSelected: 0,
    subTotalVal: 0
  };

  constructor() { }

  addItemBtn(initem:ItemI){
    initem.quantity++;
    this.enableCart = true;
    this.totalItemsSelected++;
    this.cartItems.push(initem);
    this.subTotalVal = this.subTotalVal + initem.itemPrice;
  }

  backToAddItemBtn(initem:ItemI) {
    let itemId = initem.id;
    this.cartItems.forEach(item => {
      if(item.id === itemId){
        item.quantity--;
        this.totalItemsSelected--;
        this.subTotalVal = this.subTotalVal - initem.itemPrice;
        if(item.quantity == 0) {
           this.cartItems.splice(this.cartItems.findIndex(e => e.id === itemId), 1);
           if(this.cartItems.length == 0) {
              this.enableCart = false;
              this.cartItems = [];
              this.totalItemsSelected = 0;
              this.enableAddBtn = true;
            }
        }
      }
    })
  }

  addMoreQuantity(initem:ItemI) {
    initem.quantity++;
    this.totalItemsSelected++;
    this.subTotalVal = this.subTotalVal + initem.itemPrice;
  }

  Checkout() {
    this.checkoutList.tableno = 11;
    this.checkoutList.menuList = this.cartItems;
    this.checkoutList.subTotalVal = this.subTotalVal;
    this.checkoutList.totalItemsSelected = this.totalItemsSelected;
    window.localStorage.setItem('checkoutObj', JSON.stringify(this.checkoutList));
  }

  ngOnInit(): void {
  }

}
