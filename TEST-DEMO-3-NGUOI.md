# 🎯 TEST DEMO CHO 3 NGƯỜI

## ✅ CÁC FILE ĐÃ TẠO

```
lovely/
├── celebration-nguyen-thuc-uyen.html   (70KB)
├── celebration-nguyen-my-hien.html     (70KB)
├── celebration-nguyen-hien-minh.html   (70KB)
└── celebration.html                     (71KB - file gốc)
```

---

## 🚀 CÁCH CHẠY DEMO

### Bước 1: Chạy Web Server

```bash
cd lovely
./chay-web.sh
```

hoặc:

```bash
python3 -m http.server 8080
```

### Bước 2: Mở Trình Duyệt

Truy cập: **http://localhost:8080/start.html**

---

## 🧪 TEST CASE

### Test 1: Nguyễn Thục Uyên

1. Nhập tên: `Nguyễn Thục Uyên`
2. Bấm nút YES (nút NO sẽ nhảy và mờ dần)
3. Sẽ hiển thị trang: **celebration-nguyen-thuc-uyen.html**
4. Xem nội dung:
   - Title: "💖 Nguyễn Thục Uyên 💖"
   - Tên: "Nguyễn Thục Uyên!"
   - Lời chúc: "Chúc bạn ngày 8/3 tràn đầy niềm vui..."
   - Hug message: "Gửi bạn Thục Uyên một cái ôm ấm áp!"

---

### Test 2: Nguyễn Mỹ Hiền

1. Nhập tên: `Nguyễn Mỹ Hiền`
2. Bấm nút YES
3. Sẽ hiển thị trang: **celebration-nguyen-my-hien.html**
4. Xem nội dung:
   - Title: "💖 Nguyễn Mỹ Hiền 💖"
   - Tên: "Nguyễn Mỹ Hiền!"
   - Lời chúc: "Chúc bạn một ngày 8/3 thật ý nghĩa..."
   - Hug message: "Gửi bạn Mỹ Hiền một cái ôm thật chặt!"

---

### Test 3: Nguyễn Hiền Minh

1. Nhập tên: `Nguyễn Hiền Minh`
2. Bấm nút YES
3. Sẽ hiển thị trang: **celebration-nguyen-hien-minh.html**
4. Xem nội dung:
   - Title: "💖 Nguyễn Hiền Minh 💖"
   - Tên: "Nguyễn Hiền Minh!"
   - Lời chúc: "Chúc mừng ngày 8/3! Bạn là người phụ nữ tài năng..."
   - Hug message: "Gửi bạn Hiền Minh những lời chúc tốt đẹp nhất!"

---

### Test 4: Tên Khác (Fallback)

1. Nhập tên: `Nguyễn Văn A`
2. Bấm nút YES
3. Sẽ hiển thị trang: **celebration.html** (file gốc với nội dung Khushi)

---

## 📋 CHECKLIST KIỂM TRA

- [ ] Web server chạy thành công
- [ ] Trang start.html hiển thị đẹp
- [ ] Ô nhập tên hoạt động
- [ ] Nút NO nhảy tránh chuột (không biến mất)
- [ ] Nút NO mờ dần khi di chuột nhiều lần (opacity = 70%)
- [ ] Nút NO không nhảy ra ngoài màn hình mobile
- [ ] Routing đến đúng trang cho 3 người
- [ ] Hiển thị đúng tên người được chúc
- [ ] Lời chúc khác nhau cho mỗi người
- [ ] Hug message personalized
- [ ] Confetti animation chạy
- [ ] Nhạc phát (nếu có)
- [ ] Responsive trên mobile

---

## 🎨 TÙY CHỈNH THÊM

### Thay đổi ảnh cho mỗi người:

1. Tạo thư mục `images/`
2. Thêm ảnh: `nguyen-thuc-uyen.jpg`, `nguyen-my-hien.jpg`, etc.
3. Sửa dòng trong file celebration:

```html
<img src="images/nguyen-thuc-uyen.jpg" alt="Virtual Hug" class="hug-gif">
```

### Thay đổi nhạc cho mỗi người:

1. Tạo thư mục `music/`
2. Thêm file nhạc: `song-1.mp3`, `song-2.mp3`, etc.
3. Sửa dòng trong file celebration:

```html
<source src="music/song-1.mp3" type="audio/mpeg">
```

---

## 🔧 TROUBLESHOOTING

### Nếu routing không hoạt động:

Kiểm tra file `confirm.html` dòng 360-375:

```javascript
const nameToFile = {
    'Nguyễn Thục Uyên': 'nguyen-thuc-uyen',
    'Nguyễn Mỹ Hiền': 'nguyen-my-hien',
    'Nguyễn Hiền Minh': 'nguyen-hien-minh',
};
```

### Nếu tên không match:

JavaScript **PHÂN BIỆT HOA THƯỜNG và dấu**. Phải nhập CHÍNH XÁC:
- ✅ `Nguyễn Thục Uyên`
- ❌ `nguyen thuc uyen`
- ❌ `Nguyen Thuc Uyen`

---

## 📝 TIẾP THEO: LÀM CHO 50 NGƯỜI

### Quy trình:

1. **Chuẩn bị danh sách 50 tên** (xem `list-50-nguoi.js`)
2. **Copy file**: Tạo 47 file celebration nữa
3. **Tùy chỉnh nội dung**: Thay tên, lời chúc, ảnh, nhạc
4. **Cập nhật routing**: Thêm 47 entries vào `nameToFile` mapping
5. **Test từng người**: Checklist như trên

### Lệnh tạo file nhanh:

```bash
cp celebration.html celebration-ten-nguoi.html
```

### Template code tùy chỉnh:

Xem file `tu-chinh-code.js` để có code mẫu thay thế.

---

## 🌸 KẾT LUẬN

Demo 3 người đã hoàn thành! 

Kiểm tra kỹ routing và nội dung trước khi làm thêm 47 người nữa.

**Chúc bạn thành công!** 🎉
