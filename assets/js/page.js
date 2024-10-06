let kullaniciAdi = prompt('Kullanıcı adını giriniz: ');
let sifre = prompt('Şifrenizi giriniz');

if((kullaniciAdi === 'admin') && (sifre === '1234')){
  alert('Giriş başarılı');
}else {
  alert('Kullanıcı adı veya şifre hatalı.');
}