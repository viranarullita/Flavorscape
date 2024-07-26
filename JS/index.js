// Menambahkan event klik menggunakan addEventListener() pada tombol dengan id 'see-recipe-button'
document.getElementById('see-recipe-button').addEventListener('click', function () {
    // Membuat elemen <a>
    const link = document.createElement('a');
    // Menetapkan atribut href untuk menunjuk ke halaman 'recipes.html'
    link.href = 'recipes.html';
    // Memicu event klik pada <a> yang baru dibuat
    link.click();
});


// Membuat fungsi untuk menampilkan Szechuan Beef
function tampil1() {
    // Mengambil data dari API menggunakan fetch
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Szechuan%20Beef")
        // Mengubah respons API menjadi format JSON
        .then(response => response.json())
        // Untuk memproses data 
        .then(data => {
            // menyimpan elemen pertama dari array meals ke dalam variabel mealData.
            const mealData = data.meals[0];

            // Membuat elemen div dengan class 'container'
            const container = document.createElement("div");
            container.className = "container";

            // Membuat elemen gambar
            const img = document.createElement("img");
            img.src = mealData.strMealThumb;
            img.className = "image";
            container.appendChild(img);

            // Membuat elemen judul
            const title = document.createElement("h3");
            title.textContent = mealData.strMeal;
            container.appendChild(title);

            // Membuat tautan "View More"
            const viewMoreLink = document.createElement("a");
            viewMoreLink.href = mealData.strYoutube; // Tautan ke YouTube
            viewMoreLink.textContent = "View More";
            viewMoreLink.target = "_blank"; // Buka tautan di tab baru
            container.appendChild(viewMoreLink);

            // Menambahkan Elemen container ke dalam div menu-1
            const menuDiv = document.getElementById("menu-1");
            menuDiv.appendChild(container);
        })
        // Menangani error jika ada masalah selama proses pengambilan data
        .catch(error => {
            console.error('Terjadi kesalahan saat mengambil data makanan', error);
        });
}
// Memanggil fungsi tampil1
tampil1();


// Membuat fungsi untuk menampilkan Honey Teriyaki Salmon
function tampil2() {
    // Mengambil data dari API menggunakan fetch
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Honey%20Teriyaki%20Salmon")
        // Mengubah respons API menjadi format JSON
        .then(response => response.json())
        // Untuk memproses data 
        .then(data => {
            // menyimpan elemen pertama dari array meals ke dalam variabel mealData.
            const mealData = data.meals[0];

            // Membuat elemen div dengan class 'container'
            const container = document.createElement("div");
            container.className = "container";

            // Membuat elemen gambar
            const img = document.createElement("img");
            img.src = mealData.strMealThumb;
            img.className = "image";
            container.appendChild(img);

            // Membuat elemen judul
            const title = document.createElement("h3");
            title.textContent = mealData.strMeal;
            container.appendChild(title);

            // Membuat tautan "View More"
            const viewMoreLink = document.createElement("a");
            viewMoreLink.href = mealData.strYoutube; // Tautan ke YouTube
            viewMoreLink.textContent = "View More";
            viewMoreLink.target = "_blank"; // Buka tautan di tab baru
            container.appendChild(viewMoreLink);

            // Menambahkan Elemen container ke dalam div menu-2
            const menuDiv = document.getElementById("menu-2");
            menuDiv.appendChild(container);
        })
        // Menangani error jika ada masalah selama proses pengambilan data
        .catch(error => {
            console.error('Terjadi kesalahan saat mengambil data makanan', error);
        });
}
// Memanggil fungsi tampil2
tampil2();


// Membuat fungsi untuk menampilkan Peanut Butter Cheesecake
function tampil3() {
    // Mengambil data dari API menggunakan fetch
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Peanut%20Butter%20Cheesecake")
        // Mengubah respons API menjadi format JSON
        .then(response => response.json())
        // Untuk memproses data 
        .then(data => {
            // menyimpan elemen pertama dari array meals ke dalam variabel mealData.
            const mealData = data.meals[0];

            // Membuat elemen div dengan class 'container'
            const container = document.createElement("div");
            container.className = "container";

            // Membuat elemen gambar
            const img = document.createElement("img");
            img.src = mealData.strMealThumb;
            img.className = "image";
            container.appendChild(img);

            // Membuat elemen judul
            const title = document.createElement("h3");
            title.textContent = mealData.strMeal;
            container.appendChild(title);

            // Membuat tautan "View More"
            const viewMoreLink = document.createElement("a");
            viewMoreLink.href = mealData.strYoutube; // Tautan ke YouTube
            viewMoreLink.textContent = "View More";
            viewMoreLink.target = "_blank"; // Buka tautan di tab baru
            container.appendChild(viewMoreLink);

            // Menambahkan Elemen container ke dalam div menu-3
            const menuDiv = document.getElementById("menu-3");
            menuDiv.appendChild(container);
        })
        // Menangani error jika ada masalah selama proses pengambilan data
        .catch(error => {
            console.error('Terjadi kesalahan saat mengambil data makanan', error);
        });
}
// Memanggil fungsi tampil3
tampil3();


// Membuat fungsi untuk menampilkan Blackberry Fool
function tampil4() {
    // Mengambil data dari API menggunakan fetch
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Blackberry%20Fool")
        // Mengubah respons API menjadi format JSON
        .then(response => response.json())
        // Untuk memproses data 
        .then(data => {
            // menyimpan elemen pertama dari array meals ke dalam variabel mealData.
            const mealData = data.meals[0];

            // Membuat elemen div dengan class 'container'
            const container = document.createElement("div");
            container.className = "container";

            // Membuat elemen gambar
            const img = document.createElement("img");
            img.src = mealData.strMealThumb;
            img.className = "image";
            container.appendChild(img);

            // Membuat elemen judul
            const title = document.createElement("h3");
            title.textContent = mealData.strMeal;
            container.appendChild(title);

            // Membuat tautan "More Info"
            const sourceLink = document.createElement("a");
            sourceLink.href = mealData.strSource; // Tautan ke sumber
            sourceLink.textContent = "More Info";
            sourceLink.target = "_blank"; // Buka tautan di tab baru
            container.appendChild(sourceLink);

            // Menambahkan Elemen container ke dalam div menu-4
            const menuDiv = document.getElementById("menu-4");
            menuDiv.appendChild(container);
        })
        // Menangani error jika ada masalah selama proses pengambilan data
        .catch(error => {
            console.error('Terjadi kesalahan saat mengambil data hidangan:', error);
        });
}
// Memanggil fungsi tampil4
tampil4();