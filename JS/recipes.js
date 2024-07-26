// Fungsi untuk mengambil makanan dari kategori Beef
function ambilMakanan() {
    // Mengambil makanan dari kategori Beef menggunakan fetch API
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
        // Mengubah respons API menjadi format JSON
        .then(response => response.json())
        // Untuk memproses data 
        .then(data => {
            // Menyimpan bagian dari data yang disebut meals ke dalam variabel meals
            const meals = data.meals;
            // Untuk memproses setiap item makanan satu per satu
            for (let i = 0; i < meals.length; i++) {
                // panggil fungsi untuk membuat elemen dan menampilkan informasi tentang makanan tersebut
                buatElemenMakanan(meals[i]);
            }
        })
        // Menangani error jika ada masalah selama proses pengambilan data
        .catch(error => {
            // Menangani error jika ada masalah selama proses pengambilan data
            console.error('Kesalahan saat mengambil data makanan kategori beef:', error);
        });
}

// Fungsi untuk membuat elemen makanan
function buatElemenMakanan(makanan) {
    // Membuat elemen div untuk menampung informasi makanan
    const makananDiv = document.createElement('div');
    makananDiv.className = 'meal';

    // Membuat elemen gambar untuk makanan
    const makananImg = document.createElement('img');
    makananImg.src = makanan.strMealThumb;
    makananImg.alt = makanan.strMeal;
    makananDiv.appendChild(makananImg);

    // Membuat elemen judul untuk makanan
    const makananJudul = document.createElement('h3');
    makananJudul.textContent = makanan.strMeal; // Nama makanan
    makananDiv.appendChild(makananJudul);

    // Membuat tombol untuk melihat detail makanan
    const tombolLihat = document.createElement('button');
    tombolLihat.textContent = 'Lihat Detail'; // Teks tombol
    // Menambahkan event klik pada tombol 
    tombolLihat.addEventListener('click', () => {
        // Memanggil fungsi untuk mengambil detail makanan
        ambilDetailMakanan(makanan.idMeal);
    });
    makananDiv.appendChild(tombolLihat);

    // Menambahkan elemen makanan yang sudah dibuat ke dalam 'makanan-list'
    document.getElementById('makanan-list').appendChild(makananDiv);
}

// Fungsi untuk mengambil detail makanan berdasarkan ID makanan yang dipilih
function ambilDetailMakanan(mealID) {
    // Mengambil detail untuk makanan yang dipilih menggunakan fetch API
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealID)
        // Mengubah respons API menjadi format JSON
        .then(response => response.json())
        // Untuk memproses data (respons yang sudah diubah menjadi objek JSON dari server API.)
        .then(data => {
            // Mengambil Objek Makanan dari Data
            const meal = data.meals[0];

            const mealInfo = document.getElementById('makanan-info');
            // untuk menampilkan data detail makanan terbaru 
            while (mealInfo.firstChild) {
                // Menghapus elemen anak pertama dari mealInfo. elemen anak berikutnya menjadi anak pertama baru
                mealInfo.removeChild(mealInfo.firstChild);
            }

            // Menambahkan gambar makanan
            const mealImg = document.createElement('img');
            mealImg.src = meal.strMealThumb; 
            mealImg.alt = meal.strMeal; 
            mealInfo.appendChild(mealImg);

            // Menambahkan judul makanan
            const mealJudul = document.createElement('h3');
            mealJudul.textContent = meal.strMeal; // Nama makanan
            mealInfo.appendChild(mealJudul);

            // Menambahkan area makanan
            const mealArea = document.createElement('p');
            mealArea.textContent = 'Area: ' + meal.strArea; // Area makanan
            mealInfo.appendChild(mealArea);

            // Menambahkan instruksi memasak
            const mealInstruksi = document.createElement('p');
            mealInstruksi.textContent = 'Instruksi: ' + meal.strInstructions; // Instruksi memasak
            mealInfo.appendChild(mealInstruksi);

            // Menambahkan judul untuk bahan
            const judulBahan = document.createElement('h4');
            judulBahan.textContent = 'Bahan:'; // Judul bahan
            mealInfo.appendChild(judulBahan);

            // Membuat elemen daftar bahan
            const daftarBahan = document.createElement('ul');
            mealInfo.appendChild(daftarBahan);
            // Mengambil bahan dari objek meal (Objek meal dihasilkan dalam fungsi ambilDetailMakanan )
            const bahan = ambilBahan(meal);
            for (let i = 0; i < bahan.length; i++) {
                // Membuat dan menambahkan elemen bahan ke dalam daftar bahan
                buatElemenBahan(bahan[i]);
            }
        })
        // Menangani error jika ada masalah selama proses pengambilan data
        .catch(error => {
            console.error('Kesalahan saat mengambil detail makanan:', error);
        });
}

// Fungsi untuk mengambil bahan dari objek makanan
function ambilBahan(meal) {
    // Inisialisasi array kosong untuk menyimpan bahan dan takarannya 
    const bahan = []; 
    // perulangan bahan dan takaran dari 1 hingga 20
    for (let i = 1; i <= 20; i++) { 
        // Mendapatkan nama bahan
        const ingredient = meal['strIngredient' + i]; 
        // Mendapatkan takaran bahan
        const measure = meal['strMeasure' + i]; 

        // Mengecek apakah variabel ingredient berisi nilai yang valid atau tidak (tidak null, undefined, atau string kosong)
        if (ingredient) { // Jika bahan ada
            // Menambahkannya ke array bahan
            bahan.push(ingredient + ' - ' + measure); 
        } 
        else {
            // Hentikan loop jika tidak ada bahan lagi
            break; 
        }
    }
    return bahan; 
}

// Fungsi untuk membuat elemen bahan dan menambahkannya ke dalam daftar bahan
function buatElemenBahan(bahan) {
    // Membuat elemen list item untuk bahan
    const bahanLi = document.createElement('li');
    // Mengatur teks list item yang baru saja dibuat dengan bahan
    bahanLi.textContent = bahan; 
    document.querySelector('#makanan-info ul').appendChild(bahanLi);
}

// Memanggil ambilMakanan untuk memuat makanan dari kategori Beef saat halaman dimuat
ambilMakanan(); 