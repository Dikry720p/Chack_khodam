document.getElementById('namaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nama = document.getElementById('nama').value.trim();
    const hasilElement = document.getElementById('hasil');
    
    if (nama === "") {
        hasilElement.textContent = "Silakan masukkan nama Anda.";
        return;
    }

    const kataAcak = generateKataAcak(nama);
    hasilElement.textContent = `Hasil: ${kataAcak}`;
});

function generateKataAcak(nama) {
    const kata = [
        "maung chongkok", "kuda laut", "kupu-kupu", "papatong", "monyet bodas",
        "maung bodas", "kadal hejo", "kadal kodomo", "oray sanca", "oray kobra",
        "belut listrik", "belut kasur", "naga emas", "laler hejo"
    ];

    // Seed based on the name
    let seed = 0;
    for (let i = 0; i < nama.length; i++) {
        seed += nama.charCodeAt(i);
    }

    const randomIndex = seed % kata.length;
    return kata[randomIndex];
}
