let judul1 = ("Jawaban soal nomor 5")
document.write(judul1)
document.write('<br><br>')

const jualbaju = {
    jualanbaju: false,
    promosi: function () {
        document.write(`baju ini mereknya ${this.merek},dengan ukuran  ${this.ukuran}, dan warna nya ${this.warna}`)
    }
};

const saya = Object.create(jualbaju);

saya.jualanbaju = true
saya.merek = "second"
saya.ukuran = "xl"
saya.warna = "putih"
saya.promosi();