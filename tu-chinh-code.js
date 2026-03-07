// ========== THÊM CODE NÀY VÀO ĐẦU PHẦN <script> CỦA celebration.html ==========

// Lấy tên người dùng từ localStorage
const userName = localStorage.getItem('userName') || 'Bạn';

// Object chứa thông tin ảnh + nhạc cho từng người
const personData = {
    // ===== MẪU CHO 10 NGƯỜI - BẠN CÓ THỂ THÊM 40 NGƯỜI NỮA =====
    
    'Hương': {
        image: 'images/huong.jpg',
        music: 'music/song1.mp3',
        message: 'Chúc Hương luôn xinh đẹp và hạnh phúc!'
    },
    
    'Lan': {
        image: 'images/lan.jpg',
        music: 'music/song2.mp3',
        message: 'Chúc Lan ngày càng thành công!'
    },
    
    'Mai': {
        image: 'images/mai.jpg',
        music: 'music/song3.mp3',
        message: 'Chúc Mai luôn rạng rỡ!'
    },
    
    'Nga': {
        image: 'images/nga.jpg',
        music: 'music/song4.mp3',
        message: 'Chúc Nga mãi tươi trẻ!'
    },
    
    'Linh': {
        image: 'images/linh.jpg',
        music: 'music/song5.mp3',
        message: 'Chúc Linh luôn vui vẻ!'
    },
    
    'Phương': {
        image: 'images/phuong.jpg',
        music: 'music/song6.mp3',
        message: 'Chúc Phương ngày càng xinh!'
    },
    
    'Thảo': {
        image: 'images/thao.jpg',
        music: 'music/song7.mp3',
        message: 'Chúc Thảo luôn hạnh phúc!'
    },
    
    'Trang': {
        image: 'images/trang.jpg',
        music: 'music/song8.mp3',
        message: 'Chúc Trang ngày càng đẹp!'
    },
    
    'Vy': {
        image: 'images/vy.jpg',
        music: 'music/song9.mp3',
        message: 'Chúc Vy luôn tỏa sáng!'
    },
    
    'Yến': {
        image: 'images/yen.jpg',
        music: 'music/song10.mp3',
        message: 'Chúc Yến mãi yêu đời!'
    },
    
    // ===== THÊM 40 NGƯỜI NỮA TƯƠNG TỰ =====
    // Copy và thay đổi tên, ảnh, nhạc
    
    // Mặc định nếu không tìm thấy tên
    'default': {
        image: 'bear-hug2.webp',
        music: 'Cupid.mp3',
        message: 'Chúc bạn ngày 8/3 thật vui vẻ và hạnh phúc!'
    }
};

// ========== ÁP DỤNG THÔNG TIN CỦA NGƯỜI DÙNG ==========

// Lấy thông tin của người dùng hiện tại
const currentPerson = personData[userName] || personData['default'];

// Đợi trang load xong
window.addEventListener('DOMContentLoaded', function() {
    
    // 1. Thay đổi ảnh
    const imageElement = document.querySelector('.hug-gif');
    if (imageElement) {
        imageElement.src = currentPerson.image;
        imageElement.alt = `Hình ảnh của ${userName}`;
    }
    
    // 2. Thay đổi nhạc
    const musicElement = document.getElementById('bgMusic');
    if (musicElement) {
        musicElement.innerHTML = `<source src="${currentPerson.music}" type="audio/mpeg">`;
        musicElement.load();
    }
    
    // 3. Thay đổi tên trong message (nếu có)
    const nameElements = document.querySelectorAll('.name-celebrate');
    nameElements.forEach(el => {
        el.textContent = userName;
    });
    
    // 4. Thay đổi message cá nhân hóa (tùy chọn)
    const messageElement = document.querySelector('.love-text');
    if (messageElement && currentPerson.message) {
        const customMessage = document.createElement('p');
        customMessage.textContent = currentPerson.message;
        customMessage.style.color = '#ffd700';
        customMessage.style.fontWeight = 'bold';
        customMessage.style.fontSize = '1.3rem';
        messageElement.insertBefore(customMessage, messageElement.firstChild);
    }
    
    console.log(`✨ Đã load thông tin cho ${userName}:`, currentPerson);
});

// ========== HẾT PHẦN CODE CẦN THÊM ==========
