import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  @ViewChild('tableResvr') tableResvr: ElementRef | any;

  constructor() { }

  orderLists = [
    { tableno: 1 , menuList:[
      { id:1,itemName:'Chicken Tikka', itemPrice:229, quantity:0},
      { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
      { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
      { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
      { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
      { id:3,itemName:'Baby Corn Manchurian', itemPrice:240, quantity:0  }
      ]
    },
    { tableno:2,  menuList:[
        { id:4,itemName:'Phirni', itemPrice:60, quantity:0  },
        { id:5,itemName:'Kaddu Ki Kheer', itemPrice:70, quantity:0  },
        { id:6,itemName:'Qubani Ka Meetha', itemPrice:70, quantity:0  }
      ] },{ tableno: 1 , menuList:[
        { id:1,itemName:'Chicken Tikka', itemPrice:229, quantity:0},
        { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
        { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
        { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
        { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
        { id:3,itemName:'Baby Corn Manchurian', itemPrice:240, quantity:0  }
        ]
      },
      { tableno:2,  menuList:[
          { id:4,itemName:'Phirni', itemPrice:60, quantity:0  },
          { id:5,itemName:'Kaddu Ki Kheer', itemPrice:70, quantity:0  },
          { id:6,itemName:'Qubani Ka Meetha', itemPrice:70, quantity:0  }
        ] },{ tableno: 1 , menuList:[
          { id:1,itemName:'Chicken Tikka', itemPrice:229, quantity:0},
          { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
          { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
          { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
          { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
          { id:3,itemName:'Baby Corn Manchurian', itemPrice:240, quantity:0  }
          ]
        },
        { tableno:2,  menuList:[
            { id:4,itemName:'Phirni', itemPrice:60, quantity:0  },
            { id:5,itemName:'Kaddu Ki Kheer', itemPrice:70, quantity:0  },
            { id:6,itemName:'Qubani Ka Meetha', itemPrice:70, quantity:0  }
          ] },{ tableno: 1 , menuList:[
            { id:1,itemName:'Chicken Tikka', itemPrice:229, quantity:0},
            { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
            { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
            { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
            { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
            { id:3,itemName:'Baby Corn Manchurian', itemPrice:240, quantity:0  }
            ]
          },
          { tableno:2,  menuList:[
              { id:4,itemName:'Phirni', itemPrice:60, quantity:0  },
              { id:5,itemName:'Kaddu Ki Kheer', itemPrice:70, quantity:0  },
              { id:6,itemName:'Qubani Ka Meetha', itemPrice:70, quantity:0  }
            ] },{ tableno: 1 , menuList:[
              { id:1,itemName:'Chicken Tikka', itemPrice:229, quantity:0},
              { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
              { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
              { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
              { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
              { id:3,itemName:'Baby Corn Manchurian', itemPrice:240, quantity:0  }
              ]
            },
            { tableno:2,  menuList:[
                { id:4,itemName:'Phirni', itemPrice:60, quantity:0  },
                { id:5,itemName:'Kaddu Ki Kheer', itemPrice:70, quantity:0  },
                { id:6,itemName:'Qubani Ka Meetha', itemPrice:70, quantity:0  }
              ] },{ tableno: 1 , menuList:[
                { id:1,itemName:'Chicken Tikka', itemPrice:229, quantity:0},
                { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
                { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
                { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
                { id:2,itemName:'Chicken 555 Full', itemPrice:299, quantity:0  },
                { id:3,itemName:'Baby Corn Manchurian', itemPrice:240, quantity:0  }
                ]
              },
              { tableno:2,  menuList:[
                  { id:4,itemName:'Phirni', itemPrice:60, quantity:0  },
                  { id:5,itemName:'Kaddu Ki Kheer', itemPrice:70, quantity:0  },
                  { id:6,itemName:'Qubani Ka Meetha', itemPrice:70, quantity:0  }
                ] },
  ];

  hoverItems() {
    alert( this.tableResvr.nativeElement);
  }

  ngOnInit(): void {
  }

}
