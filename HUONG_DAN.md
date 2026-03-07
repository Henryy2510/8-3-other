# 🌸 Web Chúc Mừng 8/3 - Hướng Dẫn Sử Dụng

## 📋 Cấu trúc web
1. **start.html** - Trang nhập tên (trang đầu tiên)
2. **confirm.html** - Trang xác nhận Yes/No (No không bấm được)
3. **celebration.html** - Trang chúc mừng cá nhân hóa

## 🚀 Cách chạy web local

### Cách 1: Dùng Python (Khuyên dùng)
```bash
# Mở terminal, cd vào thư mục lovely
cd /media/armon/minhquan/E_DRIVE/PL-learning/lovely

# Chạy lệnh sau:
python3 -m http.server 8080

# Mở trình duyệt và truy cập:
http://localhost:8080/start.html
```

### Cách 2: Dùng Node.js
```bash
# Nếu máy có Node.js, chạy:
npx serve .

# Sau đó mở trình duyệt:
http://localhost:3000/start.html
```

### Cách 3: Mở trực tiếp (Đơn giản nhất)
- Click đúp vào file `start.html`
- Web sẽ mở trong trình duyệt

## 🎨 Cách tùy  chỉnh cho 50 người

### 1. Tùy chỉnh ảnh và nhạc cho từng người
Mở file `celebration.html`, tìm đoạn code sau (khoảng dòng 1150):

```javascript
// Thêm đoạn code này vào đầu script của celebration.html
const userName = localStorage.getItem('userName') || 'Bạn';

// Tạo object chứa thông tin từng người
const personData = {
    'Hương': {
        image: 'bear-hug2.webp',  // Ảnh cho Hương
        music: 'Cupid.mp3'         // Nhạc cho Hương
    },
    'Lan': {
        image: 'flower.jpg',       // Ảnh cho Lan
        music: 'song2.mp3'         // Nhạc cho Lan
    },
    'Mai': {
        image: 'rose.png',         // Ảnh cho Mai
        music: 'song3.mp3'         // Nhạc cho Mai
    },
    // Thêm 47 người còn lại tương tự...
    'default': {                   // Mặc định nếu không tìm thấy tên
        image: 'bear-hug2.webp',
        music: 'Cupid.mp3'
    }
};

// Lấy thông tin của người dùng hiện tại
const currentPerson = personData[userName] || personData['default'];

// Thay đổi ảnh
document.querySelector('.hug-gif').src = currentPerson.image;

// Thay đổi nhạc
const musicElement = document.getElementById('bgMusic');
musicElement.innerHTML = `<source src="${currentPerson.music}" type="audio/mpeg">`;
musicElement.load();
```

### 2. Chuẩn bị file ảnh và nhạc
```
lovely/
├── start.html
├── confirm.html
├── celebration.html
├── images/           <- Tạo thư mục này
│   ├── person1.jpg
│   ├── person2.jpg
│   └── ...
└── music/            <- Tạo thư mục này
    ├── song1.mp3
    ├── song2.mp3
    └── ...
```

### 3. Cập nhật đường dẫn
Trong file `celebration.html`, tìm dòng:
```html
<img src="bear-hug2.webp" alt="Virtual Hug" class="hug-gif">
```

Thay bằng:
```html
<img src="images/default.jpg" alt="Virtual Hug" class="hug-gif" id="personImage">
```

Tìm dòng:
```html
<audio id="bgMusic" loop preload="metadata" crossorigin="anonymous">
    <source src="./Cupid.mp3" type="audio/mpeg">
```

Thay bằng:
```html
<audio id="bg Music" loop preload="metadata" crossorigin="anonymous">
    <source src="music/default.mp3" type="audio/mpeg">
```

## 📝 Ví dụ cho 5 người

```javascript
const personData = {
    'Hương': { image: 'images/huong.jpg', music: 'music/song1.mp3' },
    'Lan': { image: 'images/lan.jpg', music: 'music/song2.mp3' },
    'Mai': { image: 'images/mai.jpg', music: 'music/song3.mp3' },
    'Nga': { image: 'images/nga.jpg', music: 'music/song4.mp3' },
    'Linh': { image: 'images/linh.jpg', music: 'music/song5.mp3' },
    'default': { image: 'images/default.jpg', music: 'music/default.mp3' }
};
```

## 🎯 Flow hoạt động
1. Người dùng vào **start.html** → Nhập tên
2. Hệ thống lưu tên vào localStorage
3. Chuyển sang **confirm.html** → Hiển thị tên, hỏi Yes/No
4. Nút No không bấm được (nó sẽ chạy lung tung! 😄)
5. Bấm Yes → Chuyển sang **celebration.html**
6. Trang chúc mừng hiển thị ảnh + nhạc riêng dựa vào tên

## 💡 Tips
- Đặt tên file ảnh và nhạc theo tên người để dễ quản lý
- Kiểm tra kỹ tên file (có dấu, viết hoa/thường)
- Test với vài người trước khi deploy cho 50 người
- Nên dùng ảnh định dạng: jpg, png, webp
- Nên dùng nhạc định dạng: mp3

## ❓ Troubleshooting
- **Web không mở**: Kiểm tra đường dẫn file
- **Ảnh không hiện**: Kiểm tra tên file ảnh trong code
- **Nhạc không chạy**: Kiểm tra định dạng mp3, đường dẫn file
- **Lỗi CORS**: Dùng Python server thay vì mở file trực tiếp

## 📞 Cần trợ giúp?
Nếu gặp vấn đề, hãy kiểm tra:
1. Console của trình duyệt (F12 → Console)
2. Đường dẫn file có đúng không
3. Tên người dùng nhập có khớp với tên trong code không

Chúc bạn thành công với web 8/3! 🌸💖
