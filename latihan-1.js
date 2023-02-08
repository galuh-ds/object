let judul = ("Jawaban soal nomor 4")
document.write(judul)
document.write('<br><br>')
//--------1-------
let HP = {
    vivo: false,
     promosi:function (){
        document.write(`1.saya menjual hp ${this.merk},warnanya ${this.warna}.`);
     }  
};
let jual = Object.create(HP);

jual.merk = "vivo"
jual.warna = "biru"
jual.vivo = true
jual.promosi();
document.write('<br><br>')

//------------2------
    let Sate = {
        jualansate: false,
         info:function (){
            document.write(`2.saya membeli  ${this.sate} ini,<br>
            rasanya ${this.rasa},
            khas ${this.khas}.`);
         } 
    };
    let ane = Object.create(Sate);
    
    ane.sate = "sate"
    ane.rasa = "pedas"
    ane.khas = "padang"
    ane.jualansate = true
    ane.info();
document.write('<br><br>')

// //--------3--------
let santri = {
    sedangberpendidikan: false,
     info1:function (){
        document.write(`3.saya sedang mejalani masa ${this.pendidikan},di pesantren ${this.pesantren}.`);
     }  
};
let ana = Object.create(santri);
ana.pendidikan = "Pendidikan"
ana.pesantren = "Pondok IT"
ana.sedangberpendidikan = true
ana.info1();
document.write('<br><br>')

// //-------4-------
let membuat = {
    projek: false,
     info2:function (){
        document.write(`4.Santri Pondok IT angkatan ${this.angkatan}, sedang membuat ${this.sedang}.`);
     }  
};
let buat = Object.create(membuat);
buat.sedang = "Mini Projek"
buat.angkatan = "15"
buat.projek = true
buat.info2();
document.write('<br><br>')

// //-------5---------
let sayur = {
    wortel: false,
     info3:function (){
        document.write(`5.Ibu Membeli ${this.membeli}, dengan harga ${this.harga},dan beratnya ${this.beratnya}`);
     }  
};
let ibu = Object.create(sayur);
ibu.membeli = "Sayur Wortel"
ibu.harga = "Rp.5.000,00"
ibu.beratnya = "1/2 kg"
ibu.wortel = true
ibu.info3();

document.write('<hr>')
document.write('<br><br>')









