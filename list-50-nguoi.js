// ========================================
// MẪU DANH SÁCH 50 NGƯỜI - COPY VÀO celebration.html
// ========================================

const personData = {
    // ===== 50 NGƯỜI MẪU - THAY TÊN, ẢNH, NHẠC THEO Ý BẠN =====
    
    'Hương': { image: 'images/huong.jpg', music: 'music/song1.mp3', message: 'Chúc Hương luôn xinh đẹp!' },
    'Lan': { image: 'images/lan.jpg', music: 'music/song2.mp3', message: 'Chúc Lan mãi tươi trẻ!' },
    'Mai': { image: 'images/mai.jpg', music: 'music/song3.mp3', message: 'Chúc Mai ngày càng thành công!' },
    'Nga': { image: 'images/nga.jpg', music: 'music/song4.mp3', message: 'Chúc Nga luôn vui vẻ!' },
    'Linh': { image: 'images/linh.jpg', music: 'music/song5.mp3', message: 'Chúc Linh mãi hạnh phúc!' },
    
    'Phương': { image: 'images/phuong.jpg', music: 'music/song6.mp3', message: 'Chúc Phương luôn rạng rỡ!' },
    'Thảo': { image: 'images/thao.jpg', music: 'music/song7.mp3', message: 'Chúc Thảo ngày càng xinh!' },
    'Trang': { image: 'images/trang.jpg', music: 'music/song8.mp3', message: 'Chúc Trang tỏa sáng!' },
    'Vy': { image: 'images/vy.jpg', music: 'music/song9.mp3', message: 'Chúc Vy luôn yêu đời!' },
    'Yến': { image: 'images/yen.jpg', music: 'music/song10.mp3', message: 'Chúc Yến mãi trẻ trung!' },
    
    'An': { image: 'images/an.jpg', music: 'music/song11.mp3', message: 'Chúc An luôn bình an!' },
    'Ánh': { image: 'images/anh.jpg', music: 'music/song12.mp3', message: 'Chúc Ánh tỏa sáng!' },
    'Châu': { image: 'images/chau.jpg', music: 'music/song13.mp3', message: 'Chúc Châu xinh đẹp!' },
    'Chi': { image: 'images/chi.jpg', music: 'music/song14.mp3', message: 'Chúc Chi thành công!' },
    'Dung': { image: 'images/dung.jpg', music: 'music/song15.mp3', message: 'Chúc Dung vui vẻ!' },
    
    'Giang': { image: 'images/giang.jpg', music: 'music/song16.mp3', message: 'Chúc Giang hạnh phúc!' },
    'Hà': { image: 'images/ha.jpg', music: 'music/song17.mp3', message: 'Chúc Hà luôn xinh!' },
    'Hạnh': { image: 'images/hanh.jpg', music: 'music/song18.mp3', message: 'Chúc Hạnh may mắn!' },
    'Hiền': { image: 'images/hien.jpg', music: 'music/song19.mp3', message: 'Chúc Hiền dễ thương!' },
    'Hoa': { image: 'images/hoa.jpg', music: 'music/song20.mp3', message: 'Chúc Hoa tươi đẹp!' },
    
    'Hồng': { image: 'images/hong.jpg', music: 'music/song21.mp3', message: 'Chúc Hồng rạng rỡ!' },
    'Huệ': { image: 'images/hue.jpg', music: 'music/song22.mp3', message: 'Chúc Huệ thơm ngát!' },
    'Huyền': { image: 'images/huyen.jpg', music: 'music/song23.mp3', message: 'Chúc Huyền bí ẩn!' },
    'Khánh': { image: 'images/khanh.jpg', music: 'music/song24.mp3', message: 'Chúc Khánh vui vẻ!' },
    'Khoa': { image: 'images/khoa.jpg', music: 'music/song25.mp3', message: 'Chúc Khoa xinh đẹp!' },
    
    'Kim': { image: 'images/kim.jpg', music: 'music/song26.mp3', message: 'Chúc Kim lung linh!' },
    'Ly': { image: 'images/ly.jpg', music: 'music/song27.mp3', message: 'Chúc Ly xinh xắn!' },
    'Minh': { image: 'images/minh.jpg', music: 'music/song28.mp3', message: 'Chúc Minh sáng sủa!' },
    'My': { image: 'images/my.jpg', music: 'music/song29.mp3', message: 'Chúc My đẹp mãi!' },
    'Ngân': { image: 'images/ngan.jpg', music: 'music/song30.mp3', message: 'Chúc Ngân giàu có!' },
    
    'Ngọc': { image: 'images/ngoc.jpg', music: 'music/song31.mp3', message: 'Chúc Ngọc quý giá!' },
    'Như': { image: 'images/nhu.jpg', music: 'music/song32.mp3', message: 'Chúc Như dịu dàng!' },
    'Phượng': { image: 'images/phuong2.jpg', music: 'music/song33.mp3', message: 'Chúc Phượng bay cao!' },
    'Quỳnh': { image: 'images/quynh.jpg', music: 'music/song34.mp3', message: 'Chúc Quỳnh tươi tắn!' },
    'San': { image: 'images/san.jpg', music: 'music/song35.mp3', message: 'Chúc San xinh đẹp!' },
    
    'Thơ': { image: 'images/tho.jpg', music: 'music/song36.mp3', message: 'Chúc Thơ điệu đà!' },
    'Thu': { image: 'images/thu.jpg', music: 'music/song37.mp3', message: 'Chúc Thu trong trẻo!' },
    'Thủy': { image: 'images/thuy.jpg', music: 'music/song38.mp3', message: 'Chúc Thủy mát lành!' },
    'Trang': { image: 'images/trang2.jpg', music: 'music/song39.mp3', message: 'Chúc Trang duyên dáng!' },
    'Trâm': { image: 'images/tram.jpg', music: 'music/song40.mp3', message: 'Chúc Trâm sang trọng!' },
    
    'Tú': { image: 'images/tu.jpg', music: 'music/song41.mp3', message: 'Chúc Tú tài năng!' },
    'Tuyết': { image: 'images/tuyet.jpg', music: 'music/song42.mp3', message: 'Chúc Tuyết trắng ngần!' },
    'Uyên': { image: 'images/uyen.jpg', music: 'music/song43.mp3', message: 'Chúc Uyên dịu dàng!' },
    'Vân': { image: 'images/van.jpg', music: 'music/song44.mp3', message: 'Chúc Vân bay bổng!' },
    'Xuân': { image: 'images/xuan.jpg', music: 'music/song45.mp3', message: 'Chúc Xuân tươi mới!' },
    
    'Yến Nhi': { image: 'images/yennhi.jpg', music: 'music/song46.mp3', message: 'Chúc Yến Nhi xinh đẹp!' },
    'Thanh': { image: 'images/thanh.jpg', music: 'music/song47.mp3', message: 'Chúc Thanh trong sáng!' },
    'Bảo': { image: 'images/bao.jpg', music: 'music/song48.mp3', message: 'Chúc Bảo quý báu!' },
    'Diệu': { image: 'images/dieu.jpg', music: 'music/song49.mp3', message: 'Chúc Diệu kỳ diệu!' },
    'Trinh': { image: 'images/trinh.jpg', music: 'music/song50.mp3', message: 'Chúc Trinh trong trẻo!' },
    
    // Mặc định
    'default': {
        image: 'bear-hug2.webp',
        music: 'Cupid.mp3',
        message: 'Chúc bạn luôn xinh đẹp và hạnh phúc!'
    }
};

// ========================================
// HƯỚNG DẪN SỬ DỤNG:
// ========================================
// 1. Copy toàn bộ object personData này
// 2. Mở file celebration.html
// 3. Tìm dòng <script> (khoảng dòng 1170)
// 4. Paste code từ file tu-chinh-code.js vào ngay sau <script>
// 5. Thay thế danh sách personData bằng danh sách này
// 6. Lưu file
// 7. Chạy web và test!
