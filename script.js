const namaInput = document.getElementById('nama');
const mulaiButton = document.getElementById('mulai');
const hasilDiv = document.getElementById('hasil');
const loadingDiv = document.getElementById('loading');
let clickCount = 0;
let namaSebelumnya = ""; // Variabel untuk menyimpan nama sebelumnya

const loreOptions = [
  { teks: "Esempeh", gambar: "esempeh.jpg", deskripsi: "Bocah puber yang suka jokes politik padahal ngerti aja enggak😂. Selain itu lore ini juga penikmat konten brainrot. seperti skipidi toilet, gyatt, sigma, dll." },
  { teks: "Penyelam Handal", gambar: "penyelam.jpg", deskripsi: "Menyelam akun media sosial seseorang sampai inti bumi." },
  // ... tambahkan opsi lore lainnya
];

mulaiButton.addEventListener('click', () => {
  const nama = namaInput.value.trim(); 

  if (!nama) {
    alert("Masukkan nama kamu dulu!");
    return;
  }

  // Reset clickCount jika nama berbeda dari sebelumnya
  if (nama !== namaSebelumnya) {
    clickCount = 0;
  }

  if (clickCount >= 1) {
    alert("Kamu sudah mencoba sekali kali! Gunakan nama lain");
    return;
  }

  loadingDiv.style.display = 'block';
  hasilDiv.style.display = 'none';

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * loreOptions.length);
    const lore = loreOptions[randomIndex];

    // Tampilkan nama user dalam hasil
    hasilDiv.innerHTML = `
      <h2>${nama}, kamu adalah ${lore.teks}</h2>
      <img src="${lore.gambar}" alt="${lore.teks}">
      <p>${lore.deskripsi}</p>
    `;

    loadingDiv.style.display = 'none';
    hasilDiv.style.display = 'block';
    clickCount++;
    namaSebelumnya = nama; // Simpan nama yang baru saja digunakan
  }, 1000); 
});

// Tambahkan event listener untuk mereset clickCount saat nama diubah
namaInput.addEventListener('input', () => {
  clickCount = 0; // Reset clickCount setiap kali input nama berubah
});
