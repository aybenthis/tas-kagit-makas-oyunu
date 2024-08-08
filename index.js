function tasKagitMakas(kullaniciSecimi) {
  const bilgisayarSecimi = ['taş', 'kağıt', 'makas'][
    Math.floor(Math.random() * 3)
  ];

  if (kullaniciSecimi === 'taş' && bilgisayarSecimi === 'taş') {
    return 'Senin seçimin: taş. Bilgisayarın seçimi: taş. Beraberlik!';
  } else if (kullaniciSecimi === 'kağıt' && bilgisayarSecimi === 'kağıt') {
    return 'Senin seçimin: kağıt. Bilgisayarın seçimi: kağıt. Beraberlik!';
  } else if (kullaniciSecimi === 'makas' && bilgisayarSecimi === 'makas') {
    return 'Senin seçimin: makas. Bilgisayarın seçimi: makas. Beraberlik!';
  } else if (kullaniciSecimi === 'taş' && bilgisayarSecimi === 'kağıt') {
    return 'Senin seçimin: taş. Bilgisayarın seçimi: kağıt. Kaybettin!';
  } else if (kullaniciSecimi === 'kağıt' && bilgisayarSecimi === 'makas') {
    return 'Senin seçimin: kağıt. Bilgisayarın seçimi: makas. Kaybettin!';
  } else if (kullaniciSecimi === 'makas' && bilgisayarSecimi === 'taş') {
    return 'Senin seçimin: makas. Bilgisayarın seçimi: taş. Kaybettin!';
  } else if (kullaniciSecimi === 'taş' && bilgisayarSecimi === 'makas') {
    return 'Senin seçimin: taş. Bilgisayarın seçimi: makas. Kazandın!';
  } else if (kullaniciSecimi === 'kağıt' && bilgisayarSecimi === 'taş') {
    return 'Senin seçimin: kağıt. Bilgisayarın seçimi: taş. Kazandın!';
  } else if (kullaniciSecimi === 'makas' && bilgisayarSecimi === 'kağıt') {
    return 'Senin seçimin: makas. Bilgisayarın seçimi: kağıt. Kazandın!';
  }
}
console.log(tasKagitMakas('taş'));
console.log(tasKagitMakas('kağıt'));
console.log(tasKagitMakas('makas'));
