// for (var i = 0 ; i<3; i++)
// {
//     console.log(i);
// }


// var i = 0;
// while (i <3)
// {
//     console.log("Hello Word");
//     i++;
// }


// var i =1;
// while (i <11)
// {
//     console.log(i+10);
//     i++;
// }

// var s = "";
// for (var i=0;i<5;i++)
// {
//     // console.log(i);
//     for( var k = 0 ; k< i+1; k++)
//     {
//         // console.log(k+1);
//         s = s + String(k+1);
//     }
//     console.log(s);
//     s ="";
// }

// var t = "fulstack";

// for (var i = 0 ; i < t.length ; i++)
// {
//     console.log(i);
// }

// var i = 10;
// for (i =0; i < 10; i++)
// {
//     if ( i % 2 === 0){
//         console.log(i + "= Bilangan Genap");
//     }
//     else{
//         console.log (i + "=Bilangan ganijil")
//     }
// }

var voucher = "FreeOngkir";
var pembelian = 30000;

switch (voucher) {
    case "FreeOngkir":
        // free ongkir
        if (pembelian >=50000){
            console.log("Pembelian = "+ (pembelian));
            console.log("potongan 10% sebesar = "+ (pembelian*0.1));
            console.log("yang harus di bayar = "+ (pembelian - (pembelian*0.1)));
        }
        else if ( (pembelian >= 30000) && (pembelian < 50000) )
        {
            // console.log("Potongan 5%");
            console.log("Pembelian = "+ (pembelian));
            console.log("potongan 5% sebesar = "+ (pembelian*0.05));
            console.log("yang harus di bayar = "+ (pembelian - (pembelian*0.05)));
        }
        else
        {
            console.log("Potongan 2.5%");
        }
        break;
    case "Free15%":
        // ........
        if (pembelian >= 30000)
        {
            console.log("Potongan 15%");
        }
        else {
            console.log("potongan 0%")
        }
        break;
    default:
        console.log("tidak ada vouceher");
}
