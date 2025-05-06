import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Data artikel yang sama dengan Articles.tsx
const articles = [
    {
        id: 1,
        title: "Perkembangan E-Wallet di Indonesia: Tren dan Masa Depan",
        excerpt: "Melihat bagaimana e-wallet telah mengubah lanskap pembayaran digital di Indonesia dan kemana arah perkembangannya di masa depan.",
        date: "10 Mei 2025",
        author: "Dewi Ratih",
        readTime: "5 menit",
        imageUrl: "bg-gradient-to-br from-blue-500 to-purple-600",
        content: `
      <p class="mb-4">Perkembangan e-wallet di Indonesia telah mengalami pertumbuhan yang signifikan dalam beberapa tahun terakhir. Dengan populasi digital yang besar dan adopsi teknologi yang cepat, Indonesia menjadi pasar yang menjanjikan untuk layanan pembayaran digital. Menurut data Bank Indonesia, volume transaksi e-wallet di Indonesia telah mencapai Rp 35 triliun pada tahun 2024, menunjukkan pertumbuhan yang luar biasa dibandingkan tahun-tahun sebelumnya.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Tren Pertumbuhan E-Wallet</h2>
      <p class="mb-4">Berdasarkan data terbaru, transaksi e-wallet di Indonesia telah mencapai triliunan rupiah per tahun. Beberapa faktor yang mendorong pertumbuhan ini meliputi:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Peningkatan penetrasi smartphone yang mencapai 70% dari total populasi</li>
        <li>Kemudahan dalam bertransaksi tanpa perlu membawa uang tunai</li>
        <li>Berbagai promo dan cashback yang menarik dari provider e-wallet</li>
        <li>Integrasi dengan berbagai layanan seperti transportasi online, e-commerce, dan pembayaran tagihan</li>
        <li>Dukungan pemerintah dalam program cashless society</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Dominasi Provider E-Wallet</h2>
      <p class="mb-4">Pasar e-wallet di Indonesia saat ini didominasi oleh beberapa provider utama:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>GoPay dengan pangsa pasar 35%</li>
        <li>OVO dengan pangsa pasar 25%</li>
        <li>DANA dengan pangsa pasar 20%</li>
        <li>LinkAja dengan pangsa pasar 15%</li>
        <li>Provider lainnya dengan pangsa pasar 5%</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Inovasi dalam Layanan E-Wallet</h2>
      <p class="mb-4">Provider e-wallet terus berinovasi untuk memberikan layanan yang lebih baik kepada pengguna:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Integrasi dengan sistem pembayaran internasional</li>
        <li>Pengembangan fitur investasi dan asuransi mikro</li>
        <li>Layanan pinjaman digital dengan proses yang cepat</li>
        <li>Program loyalitas yang lebih menarik</li>
        <li>Fitur keamanan yang semakin canggih</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Masa Depan E-Wallet di Indonesia</h2>
      <p class="mb-4">Masa depan e-wallet di Indonesia diprediksi akan semakin cerah dengan beberapa perkembangan berikut:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Integrasi dengan teknologi AI dan machine learning untuk personalisasi layanan</li>
        <li>Pengembangan fitur keamanan yang lebih canggih dengan biometrik</li>
        <li>Ekspansi ke sektor-sektor baru seperti pendidikan dan kesehatan</li>
        <li>Kolaborasi dengan berbagai industri untuk menciptakan ekosistem yang lebih terintegrasi</li>
        <li>Pengembangan teknologi blockchain untuk transaksi yang lebih aman</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Tantangan dan Solusi</h2>
      <p class="mb-4">Meskipun pertumbuhannya pesat, industri e-wallet masih menghadapi beberapa tantangan:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Kesenjangan digital antara perkotaan dan pedesaan</li>
        <li>Kekhawatiran masyarakat tentang keamanan data</li>
        <li>Regulasi yang terus berkembang</li>
        <li>Persaingan yang semakin ketat antar provider</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Kesimpulan</h2>
      <p class="mb-4">E-wallet telah menjadi bagian tak terpisahkan dari kehidupan digital masyarakat Indonesia. Dengan berbagai inovasi dan pengembangan yang terus dilakukan, masa depan e-wallet di Indonesia akan semakin menjanjikan. Provider e-wallet perlu terus berinovasi dan meningkatkan keamanan untuk mempertahankan kepercayaan pengguna dan mengatasi berbagai tantangan yang ada.</p>
    `
    },
    {
        id: 2,
        title: "Keamanan E-Wallet: Tips Menjaga Akun Anda Tetap Aman",
        excerpt: "Kenali berbagai cara untuk melindungi akun e-wallet Anda dari upaya pencurian dan penipuan yang semakin canggih.",
        date: "5 Mei 2025",
        author: "Budi Pratama",
        category: "Keamanan",
        readTime: "7 menit",
        imageUrl: "bg-gradient-to-br from-green-500 to-blue-600",
        content: `
      <p class="mb-4">Keamanan akun e-wallet menjadi hal yang sangat penting di era digital saat ini. Dengan meningkatnya kasus penipuan dan pencurian data, pengguna perlu lebih waspada dalam melindungi akun mereka. Menurut data Otoritas Jasa Keuangan (OJK), kasus penipuan digital terkait e-wallet meningkat sebesar 45% pada tahun 2024 dibandingkan tahun sebelumnya.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Tips Keamanan Dasar</h2>
      <p class="mb-4">Berikut adalah beberapa tips dasar untuk menjaga keamanan akun e-wallet Anda:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Gunakan password yang kuat dan unik, minimal 8 karakter dengan kombinasi huruf, angka, dan simbol</li>
        <li>Aktifkan autentikasi dua faktor (2FA) untuk lapisan keamanan tambahan</li>
        <li>Jangan bagikan kode OTP kepada siapapun, termasuk pihak yang mengaku dari provider e-wallet</li>
        <li>Selalu periksa riwayat transaksi secara berkala</li>
        <li>Gunakan PIN yang berbeda dari PIN ATM atau kartu kredit</li>
        <li>Aktifkan notifikasi untuk setiap transaksi</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Mengenali Tanda-tanda Penipuan</h2>
      <p class="mb-4">Beberapa tanda yang perlu diwaspadai:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Pesan atau email yang mencurigakan dengan tawaran hadiah atau promo yang terlalu menggiurkan</li>
        <li>Link yang tidak dikenal atau mencurigakan</li>
        <li>Permintaan data pribadi seperti PIN, password, atau kode OTP</li>
        <li>Tawaran investasi dengan imbal hasil yang tidak masuk akal</li>
        <li>Pesan yang mengancam atau memaksa untuk melakukan tindakan tertentu</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Langkah-langkah Pencegahan</h2>
      <p class="mb-4">Untuk mencegah terjadinya penipuan, lakukan langkah-langkah berikut:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Selalu update aplikasi e-wallet ke versi terbaru</li>
        <li>Gunakan jaringan internet yang aman, hindari WiFi publik</li>
        <li>Logout setelah selesai menggunakan aplikasi</li>
        <li>Backup data penting secara berkala</li>
        <li>Gunakan antivirus dan anti-malware pada perangkat</li>
        <li>Aktifkan fitur keamanan tambahan seperti biometrik</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Kasus Penipuan Umum</h2>
      <p class="mb-4">Beberapa kasus penipuan yang sering terjadi:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Penipuan dengan modus hadiah atau giveaway</li>
        <li>Penipuan dengan modus investasi bodong</li>
        <li>Penipuan dengan modus jual beli online</li>
        <li>Penipuan dengan modus pinjaman online</li>
        <li>Penipuan dengan modus verifikasi akun</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Fitur Keamanan Provider E-Wallet</h2>
      <p class="mb-4">Provider e-wallet telah mengimplementasikan berbagai fitur keamanan:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Enkripsi end-to-end untuk setiap transaksi</li>
        <li>Tokenisasi data kartu</li>
        <li>Deteksi transaksi mencurigakan</li>
        <li>Limit transaksi yang dapat disesuaikan</li>
        <li>Fitur freeze akun sementara</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Apa yang Harus Dilakukan Jika Terjadi Penipuan</h2>
      <p class="mb-4">Jika Anda menjadi korban penipuan, segera lakukan langkah-langkah berikut:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Segera hubungi customer service provider e-wallet</li>
        <li>Blokir akun e-wallet Anda</li>
        <li>Laporkan ke pihak berwajib</li>
        <li>Ubah password dan PIN akun lain yang terkait</li>
        <li>Simpan bukti-bukti transaksi dan komunikasi</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Kesimpulan</h2>
      <p class="mb-4">Keamanan akun e-wallet adalah tanggung jawab bersama antara provider dan pengguna. Dengan menerapkan tips keamanan yang telah dijelaskan dan selalu waspada terhadap berbagai modus penipuan, Anda dapat menggunakan e-wallet dengan lebih aman dan nyaman. Ingat, keamanan digital adalah investasi jangka panjang yang perlu diperhatikan secara serius.</p>
    `
    },
    {
        id: 3,
        title: "Membandingkan 5 E-Wallet Terpopuler di Indonesia",
        excerpt: "Analisis mendalam tentang fitur, keunggulan, dan kelemahan dari lima layanan e-wallet yang paling banyak digunakan di Indonesia.",
        date: "1 Mei 2025",
        author: "Arya Satria",
        readTime: "10 menit",
        imageUrl: "bg-gradient-to-br from-purple-500 to-pink-600",
        content: `
      <p class="mb-4">Pemilihan e-wallet yang tepat sangat penting untuk memaksimalkan manfaat dan kemudahan dalam bertransaksi. Berikut adalah analisis komprehensif dari 5 e-wallet terpopuler di Indonesia berdasarkan berbagai aspek penting.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">1. GoPay</h2>
      <p class="mb-4">GoPay merupakan e-wallet yang terintegrasi dengan ekosistem Gojek:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Keunggulan:
          <ul class="list-disc pl-6 mt-2">
            <li>Integrasi sempurna dengan layanan Gojek</li>
            <li>Jaringan merchant yang sangat luas</li>
            <li>Fitur QRIS yang komprehensif</li>
            <li>Program cashback dan promo yang menarik</li>
          </ul>
        </li>
        <li>Kekurangan:
          <ul class="list-disc pl-6 mt-2">
            <li>Biaya top up yang relatif tinggi</li>
            <li>Limit transaksi yang terbatas</li>
            <li>Proses verifikasi yang cukup panjang</li>
          </ul>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">2. OVO</h2>
      <p class="mb-4">OVO adalah e-wallet yang dikembangkan oleh Lippo Group:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Keunggulan:
          <ul class="list-disc pl-6 mt-2">
            <li>Integrasi dengan Tokopedia</li>
            <li>Program rewards yang menguntungkan</li>
            <li>Fitur investasi dan asuransi</li>
            <li>Cashback yang kompetitif</li>
          </ul>
        </li>
        <li>Kekurangan:
          <ul class="list-disc pl-6 mt-2">
            <li>Jaringan merchant yang lebih terbatas</li>
            <li>Beberapa fitur premium berbayar</li>
            <li>Customer service yang perlu ditingkatkan</li>
          </ul>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">3. DANA</h2>
      <p class="mb-4">DANA adalah e-wallet yang fokus pada kemudahan transaksi:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Keunggulan:
          <ul class="list-disc pl-6 mt-2">
            <li>Biaya top up yang rendah</li>
            <li>Proses verifikasi yang cepat</li>
            <li>Fitur split bill yang praktis</li>
            <li>Integrasi dengan berbagai layanan</li>
          </ul>
        </li>
        <li>Kekurangan:
          <ul class="list-disc pl-6 mt-2">
            <li>Jaringan merchant yang masih berkembang</li>
            <li>Fitur tambahan yang terbatas</li>
            <li>Promo yang kurang menarik</li>
          </ul>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">4. LinkAja</h2>
      <p class="mb-4">LinkAja adalah e-wallet hasil kolaborasi BUMN:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Keunggulan:
          <ul class="list-disc pl-6 mt-2">
            <li>Dukungan dari BUMN</li>
            <li>Fitur pembayaran tagihan yang lengkap</li>
            <li>Keamanan yang terjamin</li>
            <li>Biaya transaksi yang kompetitif</li>
          </ul>
        </li>
        <li>Kekurangan:
          <ul class="list-disc pl-6 mt-2">
            <li>Jaringan merchant yang terbatas</li>
            <li>UI/UX yang perlu ditingkatkan</li>
            <li>Fitur tambahan yang masih minim</li>
          </ul>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">5. ShopeePay</h2>
      <p class="mb-4">ShopeePay adalah e-wallet dari ekosistem Shopee:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Keunggulan:
          <ul class="list-disc pl-6 mt-2">
            <li>Integrasi dengan Shopee</li>
            <li>Cashback yang besar</li>
            <li>Fitur games dan rewards</li>
            <li>Promo yang menarik</li>
          </ul>
        </li>
        <li>Kekurangan:
          <ul class="list-disc pl-6 mt-2">
            <li>Jaringan merchant offline yang terbatas</li>
            <li>Fitur keuangan yang masih terbatas</li>
            <li>Ketergantungan pada ekosistem Shopee</li>
          </ul>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Perbandingan Fitur Utama</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-gray-900 rounded-lg overflow-hidden">
          <thead>
            <tr class="bg-gray-800">
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Fitur</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">GoPay</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">OVO</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">DANA</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">LinkAja</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ShopeePay</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-800">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">QRIS</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">✓</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">✓</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">✓</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">✓</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">✓</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Investasi</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">✓</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">✓</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">-</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">-</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">-</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Asuransi</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">✓</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">✓</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">-</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">-</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">-</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Pinjaman</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">✓</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">✓</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">✓</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">-</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Kesimpulan</h2>
      <p class="mb-4">Pemilihan e-wallet terbaik tergantung pada kebutuhan dan preferensi pengguna. GoPay cocok untuk pengguna yang sering menggunakan layanan Gojek, OVO ideal untuk pengguna Tokopedia, DANA bagus untuk transaksi sehari-hari, LinkAja tepat untuk pembayaran tagihan, dan ShopeePay optimal untuk pengguna Shopee. Pertimbangkan fitur-fitur yang ditawarkan, biaya transaksi, dan jaringan merchant sebelum memilih e-wallet yang sesuai dengan kebutuhan Anda.</p>
    `
    },
    {
        id: 4,
        title: "Integrasi E-Wallet dengan Kehidupan Sehari-hari",
        excerpt: "Bagaimana e-wallet telah menjadi bagian tak terpisahkan dari kegiatan sehari-hari masyarakat modern di Indonesia.",
        date: "28 April 2025",
        author: "Siti Nurhaliza",
        readTime: "6 menit",
        imageUrl: "bg-gradient-to-br from-yellow-500 to-red-600",
        content: `
      <p class="mb-4">E-wallet telah mengubah cara masyarakat Indonesia dalam melakukan transaksi sehari-hari. Dari pembayaran transportasi hingga belanja kebutuhan pokok, e-wallet telah menjadi solusi praktis dan efisien untuk berbagai kebutuhan finansial.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Transportasi dan Mobilitas</h2>
      <p class="mb-4">E-wallet telah merevolusi cara masyarakat membayar transportasi:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Pembayaran ojek online yang cepat dan aman</li>
        <li>Transaksi parkir tanpa perlu uang tunai</li>
        <li>Pembayaran tiket transportasi umum</li>
        <li>Integrasi dengan sistem tol elektronik</li>
        <li>Cashback untuk pengguna transportasi online</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Belanja dan Retail</h2>
      <p class="mb-4">Perubahan dalam pola belanja masyarakat:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Pembayaran di minimarket dan supermarket</li>
        <li>Transaksi di warung dan toko kelontong</li>
        <li>Pembayaran di pasar tradisional</li>
        <li>Belanja online dengan berbagai promo</li>
        <li>Program loyalitas dan rewards</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Pembayaran Tagihan</h2>
      <p class="mb-4">Kemudahan dalam mengelola pembayaran rutin:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Pembayaran listrik dan air</li>
        <li>Pembelian pulsa dan paket data</li>
        <li>Pembayaran internet dan TV kabel</li>
        <li>Pembayaran asuransi</li>
        <li>Pembayaran BPJS</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Makanan dan Minuman</h2>
      <p class="mb-4">Transformasi dalam industri kuliner:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Pembayaran di restoran dan kafe</li>
        <li>Pemesanan makanan online</li>
        <li>Pembayaran di warung makan</li>
        <li>Program cashback untuk kuliner</li>
        <li>Integrasi dengan aplikasi delivery</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Kesehatan dan Kesejahteraan</h2>
      <p class="mb-4">Peran e-wallet dalam sektor kesehatan:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Pembayaran di apotek</li>
        <li>Transaksi di klinik dan rumah sakit</li>
        <li>Pembelian produk kesehatan</li>
        <li>Pembayaran asuransi kesehatan</li>
        <li>Donasi untuk kegiatan sosial</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Pendidikan</h2>
      <p class="mb-4">Integrasi e-wallet dalam sektor pendidikan:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Pembayaran SPP dan biaya sekolah</li>
        <li>Transaksi di koperasi sekolah</li>
        <li>Pembelian buku dan alat tulis</li>
        <li>Pembayaran kursus online</li>
        <li>Donasi pendidikan</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Dampak Sosial</h2>
      <p class="mb-4">Perubahan perilaku masyarakat:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Pengurangan penggunaan uang tunai</li>
        <li>Peningkatan literasi keuangan digital</li>
        <li>Perubahan pola konsumsi</li>
        <li>Peningkatan efisiensi transaksi</li>
        <li>Transformasi digital UMKM</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Kesimpulan</h2>
      <p class="mb-4">E-wallet telah menjadi bagian integral dari kehidupan modern di Indonesia. Dengan berbagai kemudahan dan manfaat yang ditawarkan, e-wallet tidak hanya mengubah cara bertransaksi, tetapi juga membentuk pola hidup masyarakat yang lebih efisien dan digital. Ke depannya, integrasi e-wallet akan semakin meluas ke berbagai aspek kehidupan, mendorong transformasi digital yang lebih komprehensif.</p>
    `
    },
    {
        id: 5,
        title: "Regulasi dan Hukum Seputar E-Wallet di Indonesia",
        excerpt: "Memahami kerangka hukum dan regulasi yang mengatur operasional layanan e-wallet di Indonesia.",
        date: "25 April 2025",
        author: "Hadi Purnomo",
        readTime: "8 menit",
        imageUrl: "bg-gradient-to-br from-teal-500 to-blue-600",
        content: `
      <p class="mb-4">Regulasi e-wallet di Indonesia terus berkembang seiring dengan pertumbuhan industri fintech. Bank Indonesia dan Otoritas Jasa Keuangan (OJK) telah menetapkan berbagai aturan untuk memastikan keamanan dan stabilitas sistem pembayaran digital.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Kerangka Regulasi</h2>
      <p class="mb-4">Landasan hukum utama untuk e-wallet di Indonesia:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Undang-Undang No. 7 Tahun 2011 tentang Mata Uang</li>
        <li>Peraturan Bank Indonesia No. 20/6/PBI/2018 tentang Penerapan Anti Pencucian Uang dan Pencegahan Pendanaan Terorisme</li>
        <li>Peraturan OJK No. 12/POJK.01/2017 tentang Penerapan Program Anti Pencucian Uang dan Pencegahan Pendanaan Terorisme</li>
        <li>Peraturan Bank Indonesia No. 19/10/PBI/2017 tentang Penerapan Anti Pencucian Uang dan Pencegahan Pendanaan Terorisme</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Persyaratan Lisensi</h2>
      <p class="mb-4">Persyaratan yang harus dipenuhi provider e-wallet:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Modal minimum yang ditentukan</li>
        <li>Struktur kepemilikan yang jelas</li>
        <li>Sistem manajemen risiko yang memadai</li>
        <li>Kepatuhan terhadap aturan KYC (Know Your Customer)</li>
        <li>Standar keamanan yang ditetapkan</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Kewajiban Provider</h2>
      <p class="mb-4">Kewajiban yang harus dipenuhi oleh penyelenggara e-wallet:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Pelaporan transaksi mencurigakan</li>
        <li>Pemeliharaan data transaksi</li>
        <li>Implementasi sistem keamanan</li>
        <li>Penyediaan layanan customer service</li>
        <li>Kepatuhan terhadap aturan privasi data</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Hak Pengguna</h2>
      <p class="mb-4">Hak-hak yang dilindungi oleh regulasi:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Keamanan data pribadi</li>
        <li>Transparansi biaya dan layanan</li>
        <li>Penyelesaian sengketa</li>
        <li>Perlindungan konsumen</li>
        <li>Akses informasi yang jelas</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Pembatasan dan Limitasi</h2>
      <p class="mb-4">Batasan yang diterapkan dalam penggunaan e-wallet:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Limit transaksi harian</li>
        <li>Limit saldo maksimum</li>
        <li>Pembatasan jenis transaksi</li>
        <li>Kewajiban verifikasi</li>
        <li>Pembatasan penggunaan untuk tujuan tertentu</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Sanksi dan Penegakan Hukum</h2>
      <p class="mb-4">Mekanisme penegakan regulasi:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Sanksi administratif</li>
        <li>Pencabutan izin operasional</li>
        <li>Denda administratif</li>
        <li>Pembatasan kegiatan usaha</li>
        <li>Penanganan pelanggaran</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Perkembangan Regulasi</h2>
      <p class="mb-4">Tren regulasi yang sedang berkembang:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Regulasi open banking</li>
        <li>Standar interoperabilitas</li>
        <li>Aturan privasi data</li>
        <li>Regulasi kripto dan aset digital</li>
        <li>Standar keamanan siber</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Kesimpulan</h2>
      <p class="mb-4">Regulasi e-wallet di Indonesia terus berkembang untuk mengakomodasi inovasi teknologi sambil memastikan keamanan dan perlindungan konsumen. Provider e-wallet harus memastikan kepatuhan terhadap regulasi yang ada, sementara pengguna perlu memahami hak dan kewajiban mereka dalam menggunakan layanan e-wallet. Dengan kerangka regulasi yang tepat, industri e-wallet dapat tumbuh secara berkelanjutan dan memberikan manfaat optimal bagi semua pihak.</p>
    `
    },
    {
        id: 6,
        title: "Prospek Karir di Industri E-Wallet dan Fintech",
        excerpt: "Menjelajahi berbagai peluang karir yang tersedia di industri e-wallet dan fintech yang terus berkembang.",
        date: "20 April 2025",
        author: "Maya Indira",
        readTime: "7 menit",
        imageUrl: "bg-gradient-to-br from-indigo-500 to-purple-600",
        content: `
      <p class="mb-4">Industri e-wallet dan fintech di Indonesia terus berkembang pesat, menciptakan berbagai peluang karir yang menarik. Dengan pertumbuhan yang signifikan, sektor ini membutuhkan talenta-talenta baru dengan berbagai keahlian.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Posisi Teknis</h2>
      <p class="mb-4">Peluang karir di bidang teknis:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Software Engineer
          <ul class="list-disc pl-6 mt-2">
            <li>Pengembangan aplikasi mobile</li>
            <li>Backend development</li>
            <li>Frontend development</li>
            <li>DevOps engineer</li>
          </ul>
        </li>
        <li>Data Scientist
          <ul class="list-disc pl-6 mt-2">
            <li>Analisis data transaksi</li>
            <li>Machine learning</li>
            <li>Fraud detection</li>
            <li>Predictive analytics</li>
          </ul>
        </li>
        <li>Security Engineer
          <ul class="list-disc pl-6 mt-2">
            <li>Cybersecurity</li>
            <li>Penetration testing</li>
            <li>Security architecture</li>
            <li>Compliance</li>
          </ul>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Posisi Bisnis</h2>
      <p class="mb-4">Peluang karir di bidang bisnis:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Product Manager
          <ul class="list-disc pl-6 mt-2">
            <li>Pengembangan produk</li>
            <li>Market research</li>
            <li>User experience</li>
            <li>Business strategy</li>
          </ul>
        </li>
        <li>Business Development
          <ul class="list-disc pl-6 mt-2">
            <li>Partnership</li>
            <li>Market expansion</li>
            <li>Sales strategy</li>
            <li>Merchant acquisition</li>
          </ul>
        </li>
        <li>Marketing
          <ul class="list-disc pl-6 mt-2">
            <li>Digital marketing</li>
            <li>Brand strategy</li>
            <li>Content creation</li>
            <li>Social media</li>
          </ul>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Posisi Operasional</h2>
      <p class="mb-4">Peluang karir di bidang operasional:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Customer Service
          <ul class="list-disc pl-6 mt-2">
            <li>User support</li>
            <li>Merchant support</li>
            <li>Complaint handling</li>
            <li>Quality assurance</li>
          </ul>
        </li>
        <li>Risk Management
          <ul class="list-disc pl-6 mt-2">
            <li>Fraud prevention</li>
            <li>Compliance</li>
            <li>Risk assessment</li>
            <li>Internal audit</li>
          </ul>
        </li>
        <li>Operations
          <ul class="list-disc pl-6 mt-2">
            <li>Process improvement</li>
            <li>Quality control</li>
            <li>Logistics</li>
            <li>Vendor management</li>
          </ul>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Kualifikasi yang Dibutuhkan</h2>
      <p class="mb-4">Persyaratan umum untuk karir di industri e-wallet:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Pendidikan minimal S1 di bidang terkait</li>
        <li>Pengalaman di industri fintech atau teknologi</li>
        <li>Pemahaman tentang produk keuangan digital</li>
        <li>Kemampuan analisis dan problem solving</li>
        <li>Komunikasi yang baik</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Tren Karir</h2>
      <p class="mb-4">Tren karir yang sedang berkembang:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>AI dan Machine Learning Specialist</li>
        <li>Blockchain Developer</li>
        <li>UX/UI Designer</li>
        <li>Data Analyst</li>
        <li>Compliance Officer</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Tips Memulai Karir</h2>
      <p class="mb-4">Langkah-langkah untuk memulai karir di industri e-wallet:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Pelajari dasar-dasar fintech dan e-wallet</li>
        <li>Ikuti kursus dan sertifikasi terkait</li>
        <li>Bangun portfolio dan pengalaman</li>
        <li>Bergabung dengan komunitas fintech</li>
        <li>Jaga update dengan tren industri</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Kesimpulan</h2>
      <p class="mb-4">Industri e-wallet dan fintech menawarkan berbagai peluang karir yang menarik dengan prospek pertumbuhan yang baik. Dengan persiapan yang tepat dan pemahaman yang mendalam tentang industri, Anda dapat membangun karir yang sukses di sektor yang terus berkembang ini. Penting untuk terus mengembangkan keterampilan dan mengikuti perkembangan teknologi untuk tetap kompetitif di industri ini.</p>
    `
    }
];

export default function ArticleDetail() {
    const [, setLocation] = useLocation();
    const articleId = parseInt(window.location.pathname.split('/').pop() || '1');
    const article = articles.find(a => a.id === articleId);

    if (!article) {
        return (
            <div className="min-h-screen bg-black text-white">
                <div className="container max-w-4xl mx-auto px-4 py-12">
                    <h1 className="text-2xl font-bold text-red-500">Artikel tidak ditemukan</h1>
                    <Button
                        className="mt-4"
                        onClick={() => setLocation('/articles')}
                    >
                        Kembali ke Daftar Artikel
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="container max-w-4xl mx-auto px-4 py-12">
                {/* Back Button */}
                <Button
                    variant="ghost"
                    className="mb-8 text-gray-400 hover:text-white"
                    onClick={() => setLocation('/articles')}
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Kembali ke Daftar Artikel
                </Button>

                {/* Article Header */}
                <div className={`${article.imageUrl} rounded-xl p-8 mb-8`}>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">{article.title}</h1>
                        <div className="flex items-center justify-center space-x-4 text-gray-300">
                            <span>{article.date}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                            {article.category && (
                                <>
                                    <span>•</span>
                                    <span className="text-blue-400">{article.category}</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center mb-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-lg font-bold mr-4">
                        {article.author.split(' ').map(name => name[0]).join('')}
                    </div>
                    <div>
                        <h3 className="text-white font-medium">{article.author}</h3>
                        <p className="text-gray-400 text-sm">Penulis</p>
                    </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <h3 className="text-xl font-semibold text-white mb-4">Bagikan Artikel</h3>
                    <div className="flex space-x-4">
                        <Button variant="outline" className="text-blue-400 border-blue-400/30 hover:bg-blue-400/10">
                            Twitter
                        </Button>
                        <Button variant="outline" className="text-blue-600 border-blue-600/30 hover:bg-blue-600/10">
                            Facebook
                        </Button>
                        <Button variant="outline" className="text-green-500 border-green-500/30 hover:bg-green-500/10">
                            WhatsApp
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
} 