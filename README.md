# Hizmetgo Araştırma Verileri — Türkiye Hizmet Ekonomisi

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.22068892.svg)](https://doi.org/10.5281/zenodo.22068892)

**[Açık veri kataloğunu görüntüle](https://selimmarslann-cyber.github.io/hizmetgo-research-data/)**

Bu depo, Hizmetgo'nun Türkiye hizmet ekonomisine ilişkin açık ve kaynak gösterilebilir veri paketlerini içerir. Pazar Nabzı platform taleplerini; Hizmet Takvimi ise Google Trends göreli arama ilgisini ayrı veri setleri olarak yayımlar.


## Yeni: Kış Hazırlığının Arama Takvimi — 11 Ekim 2026

2022–2025'in dört tamamlanmış sonbaharında Ekim/Eylül göreli arama ilgisi oranlarının medyanı kombi bakımında 2,10, petek temizliğinde 2,84 kat. Google Trends, Türkiye / Web Search, 1 Ekim 2021–30 Eylül 2026 örnek çekimi. 104 sonbahar haftalık terim gözlemi; bu ölçüm kişi, sipariş, fiyat değişimi veya 2026 Ekim gerçekleşmesi değildir.

- [Araştırma ve yöntem](https://www.hizmetgo.app/arastirmalar/kis-hazirligi-arama-takvimi)
- [Haber, PDF ve grafik dosyaları](https://selimmarslann-cyber.github.io/hizmetgo-research-data/press/2026-10-11/)
- [Yıllık hesap CSV'si](docs/press/2026-10-11/autumn-paired-years.csv)
- [Kaynak örnek çekimi](docs/press/2026-10-11/autumn-trends-raw-safe.json)
- [Tekrar hesaplama betiği](docs/press/2026-10-11/analyze-autumn.cjs)

Hizmetgo'nun özgün analiz ve grafikleri CC BY 4.0; Google kaynak verisi kendi koşullarına tabidir. Üstteki DOI 23 Ağustos 2026 paketine aittir; yeni Ekim çalışmasına DOI atanmamıştır.

## Kaynak

Güncel metodoloji, görselleştirmeler ve indirilebilir veri için:

- [Türkiye Hizmet Talep Haritası — Hizmetgo Pazar Nabzı](https://www.hizmetgo.app/arastirmalar/pazar-nabzi)
- [Türkiye'nin Hizmet Takvimi — Google Trends analizi](https://www.hizmetgo.app/arastirmalar/hizmet-takvimi)
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

## Türkiye'nin Hizmet Takvimi — Google Trends

23 Ağustos 2021–23 Ağustos 2026 döneminde Türkiye için 14 hizmet sorgusunun aylık göreli arama ilgisi, zirve ayı, mevsimsellik katsayısı ve klima montajı il endeksi yayımlanır.

- [Hizmet bazında zirve ayı ve mevsimsellik](data/hizmetgo-hizmet-takvimi-2026-08.csv)
- [Hizmet bazında aylık göreli ilgi](data/hizmetgo-hizmet-takvimi-aylik-2026-08.csv)
- [Klima montajı il endeksi](data/hizmetgo-klima-montaji-il-endeksi-2026-08.csv)

Google Trends değerleri 0–100 göreli ilgidir; mutlak arama hacmi değildir. Her sorgu bağımsız normalize edildiği için farklı terimler birbirine karşı “daha çok aranıyor” biçiminde sıralanamaz. Düşük sezon tabanına duyarlı uzun dönem yüzde değişimleri bu açık veri sürümünde yayımlanmaz.

Önerilen atıf:

> Hizmetgo (2026), _Türkiye'nin Hizmet Takvimi — Google Trends Analizi_, 23 Ağustos 2021–23 Ağustos 2026. https://www.hizmetgo.app/arastirmalar/hizmet-takvimi

## Pazar Nabzı kapsamı

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
