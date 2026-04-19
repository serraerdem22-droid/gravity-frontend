# Gravity Frontend

Bu proje, modern bir React uygulaması için temel klasör mimarisini içermektedir. Her klasör belirli bir sorumluluğa sahip olup projenin büyüdükçe düzenli kalmasını sağlar.

## Proje Hakkında

Bu uygulama yapısı, frontend geliştirme sürecini daha anlaşılır ve sürdürülebilir kılmak amacıyla oluşturulmuştur. Bileşenler, sayfalar, servisler ve stiller birbirinden bağımsız klasörlerde tutulur.

## Klasör Yapısı

Public klasörü, sitenin tarayıcı tarafından ilk görülen kısmıdır. Favicon ve ana HTML dosyası burada bulunur.

Assets klasörü, projede kullanılan tüm görseller, videolar ve özel yazı tiplerinin saklandığı yerdir.

Components klasörü, tekrar kullanılabilir arayüz parçalarını barındırır. Örneğin bir buton ya da kart bileşeni bir kez yazılır ve projenin her yerine eklenir.

Pages klasörü, bileşenlerin bir araya gelerek oluşturduğu tam sayfa görünümlerini içerir. Her ekran buradan yönetilir.

Services klasörü, uygulamanın sunucu tarafıyla iletişim kurduğu fonksiyonları tutar. Veri çekme ve gönderme işlemleri buradan yapılır.

Styles klasörü, uygulamanın görsel tasarımını belirleyen renk, yazı tipi ve düzen kurallarını içerir.

App.js dosyası, tüm sayfaları ve yönlendirmeleri yöneten ana bileşendir.

Index.js dosyası ise uygulamanın başladığı giriş noktasıdır.

## Kurulum

Projeyi çalıştırmak için önce bağımlılıkların yüklenmesi, ardından geliştirme sunucusunun başlatılması gerekir. Uygulama açıldığında yerel sunucu üzerinden erişilebilir hale gelir.
