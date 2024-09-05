# Nes-Transform-Case
 ## Proje Açıklaması
Bu proje, çeşitli Ant Design Select bileşenlerini özelleştirilmiş seçeneklerle ve farklı kullanım senaryolarıyla sunan bir React uygulamasıdır. Select bileşenleri üzerinde asenkron veri arama, çoklu seçim, özel stillendirme ve seçenek sıralama gibi işlevler sunar. Tanstack Query kullanarak JSONPlaceholder API üzerinden veri çekimi ve bu verileri bileşenler üzerinde gösterme işlevleri yer almaktadır.

## Özellikler
- AsyncSearchSelect: Asenkron veri arama ve yükleme desteği.
- AutoFocusSelect: Sayfa yüklendiğinde otomatik olarak odaklanan select.
- ClearableSearchableSelect: Aranabilir ve temizlenebilir select.
- ColorTagSelect: Seçenekler için renkli etiketler içeren select.
- CustomDropdownRenderSelect: Açılır menü seçenekleri için özel render.
- CustomDropdownStyledSelect: Özel stillendirilmiş açılır menü.
- CustomOptionLabelRender: Seçenek etiketleri için özel render.
- CustomSelectedLabelRender: Seçilen etiketler için özel render.
- CustomSuffixIcon: Select için özel son ek simgesi.
- FieldNameMapping: Dinamik alan adı eşleme.
- LabelInValue: Seçimlerde hem değer hem de etiket döndürür.
- LoadingStateSelectWithDisabledOptions: Yükleme sırasında veri durumu gösterir ve devre dışı seçenekler içerir.
- MultiSelectWithLimitedSelection: Seçim limiti ile çoklu seçim.
- PlacementCustomization: Açılır menü yerleşimini özelleştirir.
- PopupStyledSelect: Stil verilmiş popup select.
- SelectableWithCount: Seçilebilir seçeneklerin sayısını gösterir.
- SortedSelect: Sıralı select bileşeni.
- StatusIndicator: Seçeneklerin durumunu gösterir.
- VirtualScroll: Sanal kaydırmayı devre dışı bırakır.
- VariantsSelectWithCustomIcon: Özel simgeye sahip varyant seçimi.

## Kurulum
Projeyi yerel ortamınıza klonlamak için şu adımları izleyin:



   - Öncelikle, projeyi yerel makinenize klonlayın:
 ```
git clone https://github.com/YusraSenimAydin/nes-transfrom-case.git
 ```

- Proje dizinine gidin:

 ```
cd nes-transform-case
 ```
- Gerekli bağımlılıkları yükleyin:

```
npm install
```

- Geliştirme sunucusunu başlatın:

```
npm run dev
```
Uygulamayı tarayıcınızda görüntülemek için http://localhost:5173'u ziyaret edin.

## Kullanılan Teknolojiler
- **React:** Kullanıcı arayüzü oluşturmak için.
- **Ant Design:** UI bileşenleri için.
- **Tanstack Query:** Veri çekimi ve yönetimi için.
- **Axios:** HTTP istekleri yapmak için.
- **Tailwind CSS:** Stil yönetimi ve responsive tasarım için.
- **Lodash:** JavaScript yardımcı fonksiyonları.
- **React Router:** Sayfa yönlendirmesi için.


## Klasör Yapısı
- **src/components:** Tüm özel bileşenler burada bulunur.
- **src/hooks:** Özel hook'lar burada yer alır (örn: usePosts).
- **src/pages:** Uygulamanın sayfaları burada bulunur.


## Geliştirici Notları

> Proje, `popupClassName` ve `popupMatchSelectWidth` gibi Ant Design `Select` bileşeninin ileri seviye özelliklerini kullanır.

> `FetchingWrapper` bileşeni, veri yüklenirken hata veya yüklenme durumu için kullanıcı dostu bir arayüz sunar.


# Geliştirme

Geliştirme katkıları memnuniyetle karşılanır. Önerileriniz veya iyileştirmeleriniz varsa, lütfen bir sorun açın veya bir pull request gönderin.

# Lisans

Bu proje MIT Lisansı altında lisanslanmıştır.
