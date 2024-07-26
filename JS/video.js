// Membuat fungsi untuk menampilkan makanan yang nama makanannya dimulai dengan huruf 't'
function tampilMenuT() {
    // Mengambil data makanan dari API yang nama makanannya dimulai dengan huruf 't'
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=t')
        // Mengubah respons API menjadi format JSON
        .then(response => response.json())
        // Untuk memproses data 
        .then(data => {
            // Mengambil elemen HTML dengan id 'meal-video' (sbg wadah) untuk menampung hasil
            const mealContainerT = document.getElementById('meal-video');

            // mengakses setiap makanan dalam array data.meals menggunakan for loop
            for (let i = 0; i < data.meals.length; i++) {
                // Mengambil objek makanan pada indeks i
                const meal = data.meals[i];

                // Membuat elemen div untuk setiap makanan
                const mealDiv = document.createElement('div');
                mealDiv.className = 'menu';

                // Membuat elemen gambar
                const mealImage = document.createElement('img');
                // Mengatur sumber gambar dari URL thumbnail
                mealImage.src = meal.strMealThumb;
                // Mengatur teks alternatif gambar (berdasarkan nama makanan)
                mealImage.alt = meal.strMeal;
                // Memasukkan elemen gambar ke dalam mealDiv
                mealDiv.appendChild(mealImage);

                // Membuat elemen judul untuk nama makanan
                const mealTitle = document.createElement('h4');
                mealTitle.textContent = meal.strMeal;
                // Memasukkan judul ke dalam mealDiv
                mealDiv.appendChild(mealTitle);

                // Membuat tautan ke YouTube untuk video resep makanan
                const youtubeLink = document.createElement('a');
                // Mengatur URL tautan ke video YouTube
                youtubeLink.href = meal.strYoutube;
                // Mengatur teks tautan
                youtubeLink.textContent = 'Watch on YouTube';
                // Menetapkan kelas CSS 'youtube-link' untuk gaya
                youtubeLink.className = 'youtube-link';
                // Memasukkan tautan ke dalam mealDiv
                mealDiv.appendChild(youtubeLink);


                // Memasukkan elemen div yg berisi detail makanan(mealDiv) ke dlm kontainer utama(mealContainerT)
                mealContainerT.appendChild(mealDiv);
            }
        })
        .catch(error => {
            // Menangani error jika ada masalah selama proses pengambilan data
            console.error('Kesalahan saat mengambil data makanan:', error);
        });
}
// Memanggil fungsi tampilMenuT untuk menampilkan makanan
tampilMenuT();