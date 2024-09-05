import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Select Bileşenleri Kütüphanesine Hoşgeldiniz</h2>
      <p>Başlıktan bir kategori seçerek mevcut bileşenleri görebilirsiniz.</p>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Bileşenler Genel Bakış:</h3>
        <div className="space-y-4">
          <div>
            <ul className="list-decimal ml-5 space-y-2">
              <li><Link to="/selects1">AsyncSearchSelect</Link> - Asenkron veri arama ve yükleme desteği.</li>
              <li><Link to="/selects1">AutoFocusSelect</Link> - Sayfa yüklendiğinde otomatik olarak odaklanan select.</li>
              <li><Link to="/selects1">ClearableSearchableSelect</Link> - Aranabilir ve temizlenebilir select.</li>
              <li><Link to="/selects1">ColorTagSelect</Link> - Seçenekler için renkli etiketler içeren select.</li>
              <li><Link to="/selects1">CustomDropdownRenderSelect</Link> - Açılır menü seçenekleri için özel render.</li>
              <li><Link to="/selects1">CustomDropdownStyledSelect</Link> - Özel stillendirilmiş açılır menü.</li>
              <li><Link to="/selects1">CustomOptionLabelRender</Link> - Seçenek etiketleri için özel render.</li>
              <li><Link to="/selects1">CustomSelectedLabelRender</Link> - Seçilen etiketler için özel render.</li>
              <li><Link to="/selects2">CustomSuffixIcon</Link> - Select için özel son ek simgesi.</li>
              <li><Link to="/selects2">FieldNameMapping</Link> - Dinamik alan adı eşleme.</li>
              <li><Link to="/selects2">LabelInValue</Link> - Seçimlerde hem değer hem de etiket döndürür.</li>
              <li><Link to="/selects2">LoadingStateSelectWithDisabledOptions</Link> - Veri yüklenirken yükleme durumunu gösterir ve devre dışı seçenekler içerir.</li>
              <li><Link to="/selects2">MultiSelectWithLimitedSelection</Link> - Seçim limiti ile çoklu seçim.</li>
              <li><Link to="/selects2">PlacementCustomization</Link> - Açılır menü yerleşimini özelleştirir.</li>
              <li><Link to="/selects2">PopupStyledSelect</Link> - Stil verilmiş popup select.</li> 
              <li><Link to="/selects3">SelectableWithCount</Link> - Seçilebilir seçeneklerin sayısını gösterir.</li>
              <li><Link to="/selects3">SortedSelect</Link> - Sıralı select bileşeni.</li>
              <li><Link to="/selects3">StatusIndicator</Link> - Seçeneklerin durumunu gösterir.</li>
              <li><Link to="/selects3">VirtualScroll</Link> - Sanal kaydırmayı devre dışı bırakır.</li>
              <li><Link to="/selects3">VariantsSelectWithCustomIcon</Link> - Özel simgeye sahip varyant seçimi.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
