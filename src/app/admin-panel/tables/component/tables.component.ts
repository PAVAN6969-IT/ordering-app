import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { checkoutI } from 'src/app/admin-panel/checkout.interface';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { tablesI } from '../../tables.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})

export class TablesComponent implements OnInit {

  modalRef?: BsModalRef;
  selectedItem: tablesI[] = [];
  selectedItemTableNumber: number = 0;
  checkedOutList :any;
  orderLists: any;
  tableno:number = 0;
  totalItemsSelected: number = 0;
  subTotalVal: number =0;

  constructor(private modalService: BsModalService, private http_: HttpClient ) {
    // this.checkedOutList = JSON.parse(window.localStorage.getItem("checkoutObj") || '{}');
  }

  // orderLists = [
  //   { tableno: 1 , menuList:[
  //     { id:1,itemName:'Chicken Tikka', itemPrice:229, quantity:0},
  //     { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //     { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //     { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //     { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //     { id:3,itemName:'Baby Corn Manchurian', itemPrice:240, quantity:0  }
  //     ]
  //   },
  //   { tableno:2,  menuList:[
  //       { id:4,itemName:'Phirni', itemPrice:60, quantity:0  },
  //       { id:5,itemName:'Kaddu Ki Kheer', itemPrice:70, quantity:0  },
  //       { id:6,itemName:'Qubani Ka Meetha', itemPrice:70, quantity:0  }
  //     ] },{ tableno: 1 , menuList:[
  //       { id:1,itemName:'Chicken Tikka', itemPrice:229, quantity:0},
  //       { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //       { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //       { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //       { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //       { id:3,itemName:'Baby Corn Manchurian', itemPrice:240, quantity:0  }
  //       ]
  //     },
  //     { tableno:2,  menuList:[
  //         { id:4,itemName:'Phirni', itemPrice:60, quantity:0  },
  //         { id:5,itemName:'Kaddu Ki Kheer', itemPrice:70, quantity:0  },
  //         { id:6,itemName:'Qubani Ka Meetha', itemPrice:70, quantity:0  }
  //       ] },{ tableno: 1 , menuList:[
  //         { id:1,itemName:'Chicken Tikka', itemPrice:229, quantity:0},
  //         { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //         { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //         { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //         { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //         { id:3,itemName:'Baby Corn Manchurian', itemPrice:240, quantity:0  }
  //         ]
  //       },
  //       { tableno:2,  menuList:[
  //           { id:4,itemName:'Phirni', itemPrice:60, quantity:0  },
  //           { id:5,itemName:'Kaddu Ki Kheer', itemPrice:70, quantity:0  },
  //           { id:6,itemName:'Qubani Ka Meetha', itemPrice:70, quantity:0  }
  //         ] },{ tableno: 1 , menuList:[
  //           { id:1,itemName:'Chicken Tikka', itemPrice:229, quantity:0},
  //           { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //           { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //           { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //           { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //           { id:3,itemName:'Baby Corn Manchurian', itemPrice:240, quantity:0  }
  //           ]
  //         },
  //         { tableno:2,  menuList:[
  //             { id:4,itemName:'Phirni', itemPrice:60, quantity:0  },
  //             { id:5,itemName:'Kaddu Ki Kheer', itemPrice:70, quantity:0  },
  //             { id:6,itemName:'Qubani Ka Meetha', itemPrice:70, quantity:0  }
  //           ] },{ tableno: 1 , menuList:[
  //             { id:1,itemName:'Chicken Tikka', itemPrice:229, quantity:0},
  //             { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //             { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //             { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //             { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //             { id:3,itemName:'Baby Corn Manchurian', itemPrice:240, quantity:0  }
  //             ]
  //           },
  //           { tableno:2,  menuList:[
  //               { id:4,itemName:'Phirni', itemPrice:60, quantity:0  },
  //               { id:5,itemName:'Kaddu Ki Kheer', itemPrice:70, quantity:0  },
  //               { id:6,itemName:'Qubani Ka Meetha', itemPrice:70, quantity:0  }
  //             ] },{ tableno: 1 , menuList:[
  //               { id:1,itemName:'Chicken Tikka', itemPrice:229, quantity:0},
  //               { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //               { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //               { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //               { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
  //               { id:3,itemName:'Baby Corn Manchurian', itemPrice:240, quantity:0  }
  //               ]
  //             },
  //             { tableno:2,  menuList:[
  //                 { id:4,itemName:'Phirni', itemPrice:60, quantity:0  },
  //                 { id:5,itemName:'Kaddu Ki Kheer', itemPrice:70, quantity:0  },
  //                 { id:6,itemName:'Qubani Ka Meetha', itemPrice:70, quantity:0  }
  //               ] },
  // ];


  openModal(template: TemplateRef<any>, tableno: any) {
    this.modalRef = this.modalService.show(template);
    this.selectedItemTableNumber = tableno;
    this.selectedItem = this.orderLists;
  }

  ngOnInit(): void {
    this.http_.get('http://localhost:3041').subscribe(res => {
      // this.orderLists = this.checkedOutList.menuList;
      // this.tableno = this.checkedOutList.tableno;
      // this.totalItemsSelected = this.checkedOutList.totalItemsSelected;
      // this.subTotalVal = this.checkedOutList.subTotalVal;
      console.log(res);
    })

  }

}
