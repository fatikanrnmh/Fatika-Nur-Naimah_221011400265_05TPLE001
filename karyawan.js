
    // Event listener untuk tombol Simpan di modal Tambah Karyawan
    document.getElementById("simpan").addEventListener("click", function () {
        // Ambil data dari form
        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const alamat = document.getElementById("alamat").value;
        const jabatan = document.getElementById("jabatan-select").value;

        // Validasi sederhana
        if (nama && email && alamat && jabatan) {
            // Ambil tbody dari tabel untuk menambahkan baris baru
            const tbody = document.querySelector("table tbody");
            
            // Buat baris baru
            const row = document.createElement("tr");

            // Tentukan nomor urut (baris terakhir + 1)
            const no = tbody.rows.length + 1;

            // Isi baris dengan data dan tombol hapus
            row.innerHTML = `
                <td>${no}</td>
                <td>K00${no}</td>
                <td>${nama}</td>
                <td>${email}</td>
                <td>${alamat}</td>
                <td>${jabatan}</td>
                <td><button class="btn btn-danger btn-sm btn-hapus"><i class="bi bi-trash"></i> Hapus</button></td>
            `;

            // Tambahkan baris ke dalam tabel
            tbody.appendChild(row);

            // Bersihkan form
            document.getElementById("karyawanForm").reset();

            // Tutup modal
            document.getElementById("close").click();

            // Tambahkan event listener ke tombol hapus yang baru
            addDeleteEvent();
        } else {
            alert("Semua kolom harus diisi!");
        }
    });

    // Fungsi untuk menambahkan event listener ke semua tombol hapus
    function addDeleteEvent() {
        // Ambil semua tombol hapus
        const deleteButtons = document.querySelectorAll(".btn-hapus");

        // Tambah event listener untuk setiap tombol
        deleteButtons.forEach((button) => {
            button.addEventListener("click", function () {
                // Hapus baris saat tombol hapus diklik
                const row = this.closest("tr");
                row.remove();

                // Update nomor urut
                updateRowNumbers();
            });
        });
    }

    // Fungsi untuk memperbarui nomor urut setelah ada penghapusan
    function updateRowNumbers() {
        const rows = document.querySelectorAll("table tbody tr");
        rows.forEach((row, index) => {
            row.children[0].textContent = index + 1; // Update nomor urut
            row.children[1].textContent = `K00${index + 1}`; // Update kode karyawan
        });
    }

    // Inisialisasi awal untuk menambahkan event listener ke tombol hapus yang ada
    addDeleteEvent();
