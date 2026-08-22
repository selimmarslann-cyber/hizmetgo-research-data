# Hizmetgo Pazar Nabzı — Türkiye Hizmet Talep Haritası

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.21886502.svg)](https://doi.org/10.5281/zenodo.21886502)

Bu depo, Hizmetgo platformunda oluşan hizmet taleplerinin anonimleştirilmiş ve toplulaştırılmış 2026-08 veri sürümünü içerir.

## Kaynak

Güncel metodoloji, görselleştirmeler ve indirilebilir veri için:

- [Türkiye Hizmet Talep Haritası — Hizmetgo Pazar Nabzı](https://www.hizmetgo.app/arastirmalar/pazar-nabzi)
- [Hizmetgo Araştırmaları](https://www.hizmetgo.app/arastirmalar)

Makinece okunabilir veri paketi tanımı: [`datapackage.json`](datapackage.json)

17 kategoriye ait kalıcı tüketici kaynakları ve güncel iş akışları ayrıca
[`hizmetgo-kategori-kaynaklari-2026-08.csv`](data/hizmetgo-kategori-kaynaklari-2026-08.csv)
dosyasında makinece okunabilir biçimde yayımlanır. Bu eşleme, geçici tekil
ilanları değil, güncelliğini koruyan kategori köklerini kullanır.

Türkçe arama niyetlerini sınıflandırma, yönlendirme ve bilgi erişimi
çalışmalarında kullanılabilecek 51 etiketli niyet terimi ise
[`turkish-local-service-intents-17.csv`](data/turkish-local-service-intents-17.csv)
dosyasında yer alır. Her kayıt bir çekirdek kategoriyi, üç gerçek arama
niyetini ve doğrulama için kalıcı tüketici/hizmetveren kaynaklarını içerir.
Kişisel veri, kullanıcı mesajı veya sentetik talep hacmi içermez.

## Kapsam

- Dönem: 11 Mayıs–9 Ağustos 2026
- Coğrafya: Türkiye
- Boyutlar: şehir, kategori ve saat
- Veri türü: anonimleştirilmiş, eşik uygulanmış ve toplulaştırılmış talep sayıları
- Kişisel veri: yok

## Kategori kaynakları ve açık iş fırsatları

Aşağıdaki sayfalar veri setindeki kategori adlarını Hizmetgo'nun güncel tüketici
rehberleri ve hizmetveren iş fırsatı akışlarıyla eşleştirir. İş fırsatı sayfaları
geçici tekil ilanlara değil, ilgili kategorideki güncel ilan akışına yönlenir.

| Kategori            | Tüketici / fiyat kaynağı                                                                | Hizmetveren iş fırsatları                                                                  |
| ------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Ev temizliği        | [Ev temizliği fiyatları](https://www.hizmetgo.app/fiyatlari/ev-temizligi)               | [Ev temizliği iş ilanları](https://www.hizmetgo.app/hizmet-ver/ev-temizligi)               |
| Elektrik            | [Elektrikçi fiyatları](https://www.hizmetgo.app/fiyatlari/elektrikci)                   | [Elektrikçi iş ilanları](https://www.hizmetgo.app/hizmet-ver/elektrik)                     |
| Su tesisatı         | [Su tesisatı fiyatları](https://www.hizmetgo.app/fiyatlari/su-tesisati)                 | [Su tesisatı iş ilanları](https://www.hizmetgo.app/hizmet-ver/su-tesisati)                 |
| Boya badana         | [Boya badana hizmetleri](https://www.hizmetgo.app/hizmetler/boya-badana)                | [Boya badana iş ilanları](https://www.hizmetgo.app/hizmet-ver/boya-badana)                 |
| Çilingir            | [Çilingir fiyatları](https://www.hizmetgo.app/fiyatlari/cilingir)                       | [Çilingir iş ilanları](https://www.hizmetgo.app/hizmet-ver/cilingir)                       |
| Nakliyat            | [Nakliyat fiyatları](https://www.hizmetgo.app/fiyatlari/nakliyat)                       | [Nakliyat iş ilanları](https://www.hizmetgo.app/hizmet-ver/nakliyat)                       |
| Beyaz eşya tamiri   | [Beyaz eşya tamiri fiyatları](https://www.hizmetgo.app/fiyatlari/beyaz-esya-tamiri)     | [Beyaz eşya tamiri iş ilanları](https://www.hizmetgo.app/hizmet-ver/beyaz-esya-tamiri)     |
| Klima servisi       | [Klima servisi fiyatları](https://www.hizmetgo.app/fiyatlari/klima-servisi)             | [Klima servisi iş ilanları](https://www.hizmetgo.app/hizmet-ver/klima-servisi)             |
| Marangoz            | [Marangoz fiyatları](https://www.hizmetgo.app/fiyatlari/marangoz)                       | [Marangoz iş ilanları](https://www.hizmetgo.app/hizmet-ver/marangoz)                       |
| Halı yıkama         | [Halı yıkama fiyatları](https://www.hizmetgo.app/fiyatlari/hali-yikama)                 | [Halı yıkama iş ilanları](https://www.hizmetgo.app/hizmet-ver/hali-yikama)                 |
| Çatı işleri         | [Çatı işleri fiyatları](https://www.hizmetgo.app/fiyatlari/cati-isleri)                 | [Çatı ustası iş ilanları](https://www.hizmetgo.app/hizmet-ver/cati-isleri)                 |
| Bahçıvan            | [Bahçıvan hizmetleri](https://www.hizmetgo.app/hizmetler/bahcivan)                      | [Bahçıvan iş ilanları](https://www.hizmetgo.app/hizmet-ver/bahcivan)                       |
| Cam balkon          | [Cam balkon fiyatları](https://www.hizmetgo.app/fiyatlari/cam-balkon)                   | [Cam balkon iş ilanları](https://www.hizmetgo.app/hizmet-ver/cam-balkon)                   |
| Güvenlik sistemleri | [Güvenlik sistemleri fiyatları](https://www.hizmetgo.app/fiyatlari/guvenlik-sistemleri) | [Güvenlik sistemleri iş ilanları](https://www.hizmetgo.app/hizmet-ver/guvenlik-sistemleri) |
| Tadilat             | [Tadilat fiyatları](https://www.hizmetgo.app/fiyatlari/tadilat)                         | [Tadilat iş ilanları](https://www.hizmetgo.app/hizmet-ver/tadilat)                         |
| Fotoğrafçı          | [Fotoğrafçı fiyatları](https://www.hizmetgo.app/fiyatlari/fotografci)                   | [Fotoğrafçı iş ilanları](https://www.hizmetgo.app/hizmet-ver/fotografci)                   |
| Kombi servisi       | [Kombi servisi fiyatları](https://www.hizmetgo.app/fiyatlari/kombi-servisi)             | [Kombi servisi iş ilanları](https://www.hizmetgo.app/hizmet-ver/kombi-servisi)             |

## Atıf

> Hizmetgo (2026), _Türkiye Hizmet Talep Haritası — Hizmetgo Pazar Nabzı_, 11 Mayıs–9 Ağustos 2026. https://www.hizmetgo.app/arastirmalar/pazar-nabzi

## Lisans

Veri ve dokümantasyon [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/) kapsamında yayımlanır. Kullanımda Hizmetgo Pazar Nabzı kaynak sayfasına bağlantı verilmelidir.
