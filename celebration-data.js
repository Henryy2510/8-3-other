// 🎯 DATABASE CHO 50 NGƯỜI
// Mỗi người có thông tin riêng: tên, lời chúc, ảnh, nhạc
// ⚠️ Chỉ 3 người đầu tiên có meme (Huyền Trang, Nguyễn Minh Thu, Phạm Hồng Lý)
// ⚠️ Những người mới KHÔNG cần thêm meme nữa

const celebrationData = {
    'Huyền Trang': {
        name: 'Huyền Trang',
        title: '💖 Huyền Trang 💖',
        subtitle: 'Chúc mừng ngày Quốc tế Phụ nữ 8/3! 💕',
        question: 'Bạn có muốn nhận món quà đặc biệt ngày 8/3 không? 💝',
        message: {
            greeting: 'Gửi Huyền Trang',
              paragraph1: 'Chúc bạn ngày 8/3 thật tươi vui, luôn giữ vững niềm tin và sự nhiệt huyết trong cuộc sống!',
              paragraph2: 'Cảm ơn bạn đã luôn là nguồn động lực, truyền cảm hứng <span class="highlight">tích cực</span> đến mọi người. 💫',
              paragraph3: 'Chúc bạn mãi xinh đẹp, thành công và gặp nhiều điều tốt lành! 💕'
        },
        hug: 'Gửi bạn Huyền Trang một cái ôm ấm áp! 🤗💖',
        image: './bear-hug2.webp',
        music: 'music/Cupid.mp3'  // Nếu không có nhạc riêng, để null hoặc xóa dòng này
    },
    'Hồng Minh': {
        name: 'Hồng Minh',
        title: '💖 Hồng Minh 💖',
        subtitle: 'Chúc mừng ngày Quốc tế Phụ nữ 8/3! 💕',
        question: 'Bạn có muốn nhận món quà đặc biệt ngày 8/3 không? 💝',
        message: {
            greeting: 'Gửi Hồng Minh',
            paragraph1: 'Chúc bạn ngày 8/3 tràn đầy niềm vui và hạnh phúc! Bạn là người phụ nữ tuyệt vời với những nụ cười rạng rỡ và tâm hồn ấm áp.',
            paragraph2: 'Mỗi ngày được làm việc cùng bạn là một niềm vui. Cảm ơn bạn đã luôn mang đến <span class="highlight">năng lượng tích cực</span> cho mọi người xung quanh. 💫',
            paragraph3: 'Chúc bạn luôn xinh đẹp, thành công và hạnh phúc! 💕'
        },
        hug: 'Gửi bạn Hồng Minh một cái ôm ấm áp! 🤗💖',
        image: './bear-hug2.webp',
        music: 'music/Cupid.mp3'  // Nếu không có nhạc riêng, để null hoặc xóa dòng này
    },
    
    'Nguyễn Minh Thu': {
        name: 'Nguyễn Minh Thu',
        title: '💖 Nguyễn Minh Thu 💖',
        subtitle: 'Chúc mừng ngày Quốc tế Phụ nữ 8/3! 💕',
        question: 'Bạn có muốn nhận lời chúc đặc biệt ngày 8/3 không? 🎉',
        message: {
            greeting: 'Gửi Nguyễn Minh Thu',
            paragraph1: 'Chúc bạn một ngày 8/3 thật ý nghĩa và đáng nhớ! Bạn là người phụ nữ xinh đẹp với trái tim nhân hậu và nụ cười tươi tắn.',
            paragraph2: 'Cảm ơn bạn đã luôn là người đồng nghiệp tuyệt vời, lan tỏa <span class="highlight">sự quan tâm và yêu thương</span> đến mọi người. 💫',
            paragraph3: 'Chúc bạn luôn vui vẻ, mạnh khỏe và thành công rực rỡ! 💕'
        },
        hug: 'Gửi bạn Minh Thu một cái ôm thật chặt! 🤗💖',
        image: './bear-hug2.webp',
        music: 'music/Cupid.mp3'  // Nếu không có nhạc riêng, để null hoặc xóa dòng này
    },
    
    'Phạm Hồng Lý': {
        name: 'Phạm Hồng Lý',
        title: '💖 Phạm Hồng Lý 💖',
        subtitle: 'Chúc mừng ngày Quốc tế Phụ nữ 8/3! 💕',
        question: 'Mẹ muốn xem lời chúc không? 🎁',
        message: {
            greeting: 'Gửi Phạm Hồng Lý',
            paragraph1: 'Chúc mừng ngày 8/3! Bạn là người phụ nữ tài năng với phong cách làm việc chuyên nghiệp và tâm hồn nhiệt huyết.',
            paragraph2: 'Cảm ơn bạn đã luôn đồng hành và chia sẻ những <span class="highlight">khoảnh khắc đáng nhớ</span> trong công việc. 💫',
            paragraph3: 'Chúc bạn luôn tự tin, rạng rỡ và đạt được mọi ước mơ! 💕'
        },
        hug: 'Gửi mẹ những lời chúc tốt đẹp nhất! 🤗💖',
        image: './bear-hug2.webp',
        music: 'music/Cupid.mp3'  // Nếu không có nhạc riêng, để null hoặc xóa dòng này
    },
    
    'Như Trang': {
        name: 'Như Trang',
        title: '💖 Như Trang 💖',
        subtitle: 'Chúc mừng ngày Quốc tế Phụ nữ 8/3! 💕',
        question: 'Bạn có muốn nhận lời chúc đặc biệt ngày 8/3 không? 🎉',  // Câu hỏi hiển thị trên trang confirm.html
        message: {
            greeting: 'Gửi  Như Trang',
            paragraph1: 'Chúc mừng ngày 8/3! Cậu là người phụ nư tài năng với cách làm việc chuyển nghiệp, với những hoài bão lớn.',
            paragraph2: 'Mong shop sẽ đạt được những <span class="highlight">cột mốc đáng nhớ</span> trong hành trình phía trước. 💫',
            paragraph3: 'Chúc bạn luôn tự tin, rạng rỡ và đạt được mọi ước mơ! 💕'
        },
        hug: 'Gửi bạn một cái ôm! 🤗💖',
        image: './bear-hug2.webp',
        music: 'music/Cupid.mp3'  // Nếu không có nhạc riêng, để null hoặc xóa dòng này
    },
    // ========================================
    // 📝 TEMPLATE CHO 46 NGƯỜI CÒN LẠI:
    // ⚠️ KHÔNG thêm meme cho người mới!
    // ========================================
    
    'Quản Thu Thảo': {
        name: 'Quản Thu Thảo',
        title: '💖 Quản Thu Thảo 💖',
        subtitle: 'Chúc mừng ngày Quốc tế Phụ nữ 8/3! 💕',
        question: 'Bạn có muốn nhận món quà đặc biệt ngày 8/3 không? 💝',  // Câu hỏi hiển thị trên trang confirm.html
        message: {
            greeting: 'Gửi Quản Thu Thảo',
              paragraph1: 'Chúc chị ngày 8/3 thật rạng rỡ, luôn giữ nụ cười tươi và trái tim ấm áp!',
              paragraph2: 'Cảm ơn chị đã lan tỏa <span class="highlight">yêu thương và năng lượng tích cực</span> đến mọi người. 💫',
              paragraph3: 'Chúc chị luôn hạnh phúc, thành công và gặp nhiều may mắn trong cuộc sống! 💕'
        },
        image: './bear-hug2.webp',
        music: 'music/Cupid.mp3'  // Nếu không có nhạc riêng, để null hoặc xóa dòng này
    },
    
    // ... Thêm 45 người nữa...
};

// Default data khi không tìm thấy tên
const defaultData = {
    name: 'You',
    title: '💖 Special Celebration 💖',
    subtitle: 'Chúc mừng ngày Quốc tế Phụ nữ 8/3! 💕',
    question: 'Bạn có muốn nhận món quà đặc biệt ngày 8/3 không? 💝',
    message: {
        greeting: 'Gửi bạn',
        paragraph1: 'Chúc mừng ngày 8/3! Bạn là người phụ nữ tuyệt vời.',
        paragraph2: 'Cảm ơn bạn đã luôn là nguồn cảm hứng cho mọi người xung quanh. 💫',
        paragraph3: 'Chúc bạn luôn hạnh phúc và thành công! 💕'
    },
    hug: 'Gửi bạn những lời chúc tốt đẹp nhất! 🤗💖',
    image: 'bear-hug2.webp',  // Ảnh mặc định
    music: 'Cupid.mp3'        // Nhạc mặc định
};

// Hàm chuẩn hóa tên: loại bỏ khoảng trắng thừa, chuyển thường, thay khoảng trắng bằng _, loại bỏ dấu
function normalizeName(name) {
    // Remove Vietnamese diacritics (lowercase and uppercase)
    const from = "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷÀÁÃẢẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆĐÙÚỦŨỤƯỪỨỬỮỰÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÌÍỈĨỊÄËÏÎÖÜÛÑÇ";
    const to   = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyyaaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouunc";
    
    let result = name.trim().toLowerCase();
    for (let i = 0; i < from.length; i++) {
        result = result.replace(new RegExp(from[i], 'g'), to[i]);
    }
    
    return result.replace(/\s+/g, '_');
}

// Hàm lấy data cho người dùng với tên chuẩn hóa
function getCelebrationData(userName) {
    // Chuẩn hóa tên input
    const normalizedInput = normalizeName(userName);
    
    // Tìm key phù hợp trong celebrationData
    for (const key in celebrationData) {
        if (normalizeName(key) === normalizedInput) {
            return celebrationData[key];
        }
    }
    
    // Không tìm thấy, trả về default
    return defaultData;
}
