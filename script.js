// 1. Gezegen Verileri (JSON Obje Yapısı) - YEREL DOSYA YOLU: "images/" KLASÖRÜ KALDIRILDI
const planets = {
    gunes: {
        name: "GÜNEŞ",
        desc: "Güneş Sistemi'nin kütle merkezidir ve enerji kaynağıdır. Yüksek ısıda plazmadan oluşur.",
        temp: "5500°C", 
        gravity: 27.9, 
        img: "gunes.jpg" // Düzeltildi: images/gunes.jpg -> gunes.jpg
    },
    merkur: {
        name: "MERKÜR",
        desc: "Güneş'e en yakın ve en küçük gezegendir. Uydusu yoktur ve yüzeyi kraterlerle doludur.",
        temp: "167°C",
        gravity: 0.38,
        img: "merkur.jpg" // Düzeltildi
    },
    venus: {
        name: "VENÜS",
        desc: "Karbondioksitli yoğun atmosferi nedeniyle en sıcak gezegendir. Sabah ve Akşam Yıldızı olarak da bilinir.",
        temp: "464°C",
        gravity: 0.91,
        img: "venus.jpg" // Düzeltildi
    },
    dunya: {
        name: "DÜNYA",
        desc: "Üzerinde yaşam olduğu bilinen tek gezegendir. %71'i sularla kaplıdır.",
        temp: "14°C",
        gravity: 1, 
        img: "dunya.jpg" // Düzeltildi
    },
    ay: {
        name: "AY",
        desc: "Dünya'nın doğal uydusu. Dünya'daki gelgit olaylarında büyük rol oynar.",
        temp: "-20°C",
        gravity: 0.166,
        img: "ay.jpg" // Düzeltildi
    },
    mars: {
        name: "MARS",
        desc: "Kızıl Gezegen olarak bilinir. İnce atmosferi ve devasa volkanları vardır.",
        temp: "-63°C",
        gravity: 0.38,
        img: "mars.jpg" // Düzeltildi
    },
    jupiter: {
        name: "JÜPİTER",
        desc: "Güneş sisteminin en büyük gaz devi. Büyük Kırmızı Leke adı verilen kalıcı bir fırtınaya sahiptir.",
        temp: "-108°C",
        gravity: 2.4,
        img: "jupiter.jpg" // Düzeltildi
    },
    saturn: {
        name: "SATÜRN",
        desc: "Buz ve kayalardan oluşan devasa halka sistemiyle ünlüdür. Yoğunluğu sudan düşüktür.",
        temp: "-139°C",
        gravity: 1.06,
        img: "saturn.jpg" // Düzeltildi
    },
    uranus: {
        name: "URANÜS",
        desc: "Buz devidir ve ekseni neredeyse yan yatmış durumdadır. Mavi-yeşil rengini metan gazına borçludur.",
        temp: "-195°C",
        gravity: 0.9,
        img: "uranus.jpg" // Düzeltildi
    },
    neptun: {
        name: "NEPTÜN",
        desc: "Güneş'e en uzak gezegendir. Güneş Sistemindeki en hızlı rüzgarlara sahiptir.",
        temp: "-201°C",
        gravity: 1.14,
        img: "neptun.jpg" // Düzeltildi
    }
};

let currentGravity = planets.gunes.gravity;

// 2. Gezegeni Değiştiren Fonksiyon (changePlanet)
function changePlanet(planetKey) {
    const data = planets[planetKey];

    // HTML elementlerini güncelle (DOM Manipülasyonu)
    document.getElementById("planet-name").innerText = data.name;
    document.getElementById("planet-desc").innerText = data.desc;
    document.getElementById("planet-temp").innerText = data.temp;
    document.getElementById("planet-gravity").innerText = data.gravity;

    // Resmi Animasyonlu Değiştir
    const img = document.getElementById("planet-img");
    img.style.transform = "scale(0.8)"; 
    img.style.opacity = "0"; 
    
    // Kısa bir bekleme süresi ile geçiş efekti sağlanır
    setTimeout(() => {
        img.src = data.img;
        img.style.transform = "scale(1)"; 
        img.style.opacity = "1"; 
    }, 300);

    // Yerçekimi değerini hesaplama için güncelle
    currentGravity = data.gravity;
    calculateWeight();
    updateActiveButton(planetKey);
}

// 3. Kilo Hesaplama Fonksiyonu (calculateWeight)
function calculateWeight() {
    const weight = document.getElementById("user-weight").value;
    const resultBox = document.getElementById("result");

    if (weight) {
        // Formül: Kilo * Yerçekimi Katsayısı
        const finalWeight = (weight * currentGravity).toFixed(1);
        resultBox.innerText = `Bu gök cismindeki kilonuz: ${finalWeight} kg`;
    } else {
        resultBox.innerText = "Bu gök cismindeki kilonuz: -- kg";
    }
}

// 4. Aktif Buton Güncelleme (updateActiveButton)
function updateActiveButton(activeKey) {
    // Tüm butonlardan 'active' sınıfını kaldır
    const buttons = document.querySelectorAll('.planet-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Tıklanan butonu bul ve 'active' sınıfını ekle
    const activeBtn = Array.from(buttons).find(btn => 
        btn.getAttribute('onclick').includes(`'${activeKey}'`)
    );
    
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}
