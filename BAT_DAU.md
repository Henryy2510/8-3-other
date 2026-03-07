# 🌸 HƯỚNG DẪN NHANH - WEB CHÚC MỪNG 8/3 🌸

## 🚀 CÁCH CHẠY WEB (3 BƯỚC)

### Bước 1: Mở Terminal
```bash
cd /media/armon/minhquan/E_DRIVE/PL-learning/lovely
```

### Bước 2: Chạy lệnh
```bash
python3 -m http.server 8080
```

### Bước 3: Mở trình duyệt
Truy cập: **http://localhost:8080/start.html**

---

## 📂 CẤU TRÚC FILE

```
lovely/
├── start.html          ← Trang 1: Nhập tên
├── confirm.html        ← Trang 2: Yes/No
├── celebration.html    ← Trang 3: Chúc mừng
├── bear-hug2.webp      ← Ảnh mặc định
├── Cupid.mp3           ← Nhạc mặc định
└── HUONG_DAN.md        ← Hướng dẫn chi tiết
```

---

## 🎨 TÙY CHỈNH CHO 50 NGƯỜI

### 1. Tạo thư mục chứa ảnh và nhạc
```bash
mkdir images music
```

### 2. Copy file ảnh/nhạc vào
```
images/huong.jpg
images/lan.jpg
images/mai.jpg
...

music/song1.mp3
music/song2.mp3
music/song3.mp3
...
```

### 3. Sửa file celebration.html

Mở file `celebration.html`, tìm dòng có `<script>`, thêm code sau **NGAY SAU** dòng `<script>`:

```javascript
const userName = localStorage.getItem('userName') || 'Bạn';

const personData = {
    'Hương': { image: 'images/huong.jpg', music: 'music/song1.mp3' },
    'Lan': { image: 'images/lan.jpg', music: 'music/song2.mp3' },
    'Mai': { image: 'images/mai.jpg', music: 'music/song3.mp3' },
    // Thêm 47 người nữa...
    'default': { image: 'bear-hug2.webp', music: 'Cupid.mp3' }
};

const currentPerson = personData[userName] || personData['default'];

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hug-gif').src = currentPerson.image;
    const music = document.getElementById('bgMusic');
    music.innerHTML = '<source src="' + currentPerson.music + '" type="audio/mpeg">';
    music.load();
});
```

---

## ✅ KIỂM TRA

1. ✅ Terminal hiển thị: "Serving HTTP on..."
2. ✅ Mở http://localhost:8080/start.html
3. ✅ Nhập tên → Bấm "Tiếp tục"
4. ✅ Trang Yes/No → Nút "Không" không bấm được!
5. ✅ Bấm "Có" → Ra trang chúc mừng với ảnh + nhạc

---

## 🐛 LỖI THƯỜNG GẶP

| Lỗi | Nguyên nhân | Giải pháp |
|-----|------------|----------|
| Ảnh không hiện | Đường dẫn sai | Kiểm tra tên file ảnh |
| Nhạc không chạy | File mp3 lỗi | Thử file mp3 khác |
| Trang trắng | Lỗi code | Mở F12 xem Console |
| CORS error | Mở trực tiếp file | Dùng Python server |

---

## 💡 MẸO HAY

1. **Test trước**: Thử với 3-5 người trước khi làm 50 người
2. **Đặt tên dễ nhớ**: huong.jpg, lan.jpg thay vì IMG_001.jpg
3. **Backup**: Copy toàn bộ thư mục lovely trước khi sửa
4. **Kiểm tra kỹ**: Tên người dùng nhập = tên trong code

---

## 📞 CẦN TRỢ GIÚP?

Xem file: **HUONG_DAN.md** (hướng dẫn chi tiết)

Hoặc xem file: **tu-chinh-code.js** (code mẫu sẵn)

---

🌸 **Chúc bạn thành công với web 8/3!** 🌸
