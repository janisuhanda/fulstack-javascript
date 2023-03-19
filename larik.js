// var scores = [100,50,75];
// console.log(scores[0]);
// console.log(scores[1]);
// console.log(scores[2]);
// console.log(scores.length);

// var items = ["komputer","hp"];

// console.log(items);
// console.log(items[0]);
// items.push("mouse");
// console.log(items);
// items.pop();
// console.log(items);


// var scores = [
//     [10,20,30],
//     [15,25,35],
//     [1,3,5]
// ];

// // console.log(scores);
// // console.log(scores[0][0]);
// // console.log(scores[1][0]);

// console.log(scores.length);
// console.log(scores);

// Diketahui sepotong kode:
// var murid = [
//       [1, “Vincent”, 3.5],
//       [2, “Udin”, 3.0],
//       [3, “Mamang”, 2.1]
// ]

// Bikin kode yang hasilnya:
// 1. Vincent, IPK = 3.5, Lulus
// 2. Udin, IPK = 3.0, Lulus
// 3. Mamang, IPK = 2.1, Gagal

// (Syarat lulus IPK minimum 3,0)

var murid = [
      [1, "Vincent", 3.5],
      [2, "Udin", 3.0],
      [3, "Mamang", 2.1]
]

// (kondisi)?"nilai true":"nilai false";
// // 1
// console.log(murid[0][1] + ", IPK ="+ murid[0][2] , (murid[0][2] > 3 )?"Lulus":"gagal");

// if ( murid[0][2] > 3)
// {
//     console.log(murid[0][1] + ", IPK ="+ murid[0][2]+", Lulus");
// }
// else
// {
//     console.log(murid[0][1] + ", IPK ="+ murid[0][2]+", Gagal");
// }

// // 2

// //metode1
// console.log(murid[1][1] + ", IPK ="+ murid[1][2] , (murid[1][2] > 3 )?"Lulus":"gagal");

// // metode 2
// if ( murid[1][2] > 3)
// {
//     console.log(murid[1][1] + ", IPK ="+ murid[1][2]+", Lulus");
// }
// else
// {
//     console.log(murid[1][1] + ", IPK ="+ murid[1][2]+", Gagal");
// }

// // 3

// //metode1
// console.log(murid[2][1] + ", IPK ="+ murid[2][2] , (murid[2][2] > 3 )?"Lulus":"gagal");

// // metode 2
// if ( murid[2][2] > 3)
// {
//     console.log(murid[2][1] + ", IPK ="+ murid[2][2]+", Lulus");
// }
// else
// {
//     console.log(murid[2][1] + ", IPK ="+ murid[2][2]+", Gagal");
// }

// efektif 1
for (i=0; i < murid.length ; i++)
{
    console.log((i+1)+"."+murid[i][1]+" , IPK = "+ murid[i][2] + ((murid[i][2] >= 3)?"Lulus":"GAGAL") );
}

// efektif 2
for (i=0; i < murid.length ; i++)
{
    if (murid[i][2] >= 3)
    {
        console.log((i+1)+". "+murid[i][1] + ", IPK ="+ murid[i][2]+", Lulus");
    }
    else
    {
        console.log((i+1)+". "+murid[i][1] + ", IPK ="+ murid[i][2]+", gagal");
    }
}


var array1 = ["sesil","lone"];
var array2 = ["Emil","Tobius", "Limus"];
console.log(array1.concat(array2));

console.log(murid.concat(array1));


function hello(n){
    console.log("Selamat Siang"+n);
}
hello("PARA PESERTA");

// mencetak sebuah number bilangan ganjil apa genap?
function cekbilangan(x){
    // 
}
cekbilangan(5);


function cekbil(x){
    if (x %2 === 0){
        return "genap";
    }else
    {
        return "ganjil";
    }
}

var cek = cekbil(5);
console.log(cek);


function splittoarray(stringnya)
{
    var tmparraynya = stringnya.split(" ");
    return tmparraynya;
}

function jumlahkata(kalimat)
{
    var resultsplit = splittoarray(kalimat);
    var arraylength = resultsplit.length;
    return arraylength;
}

console.log(jumlahkata("Hello selamat pagi semua"));


