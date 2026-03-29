// DATABASE CHỈ DÀNH CHO NHƯ TRANG

const celebrationData = {
    'Như Trang': {
        name: 'Như Trang',
        title: '💖 Như Trang 💖',
        subtitle: 'Chúc mừng ngày Quốc tế Phụ nữ 8/3! 💕',
        question: 'Bạn có muốn nhận lời chúc đặc biệt ngày 8/3 không? 🎉',
        message: {
            greeting: 'Gửi Như Trang',
            paragraph1: 'Chúc mừng ngày 8/3! Cậu là người phụ nữ tài năng với cách làm việc chuyên nghiệp, với những hoài bão lớn.',
            paragraph2: 'Mong shop sẽ đạt được những <span class="highlight">cột mốc đáng nhớ</span> trong hành trình phía trước. 💫',
            paragraph3: 'Chúc bạn luôn tự tin, rạng rỡ và đạt được mọi ước mơ! 💕'
        },
        hug: 'Gửi bạn một cái ôm! 🤗💖',
        image: './bear-hug2.webp',
        music: 'music/Cupid.mp3'
    }
};

const defaultData = celebrationData['Như Trang'];

function normalizeName(name) {
    const from = "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷÀÁÃẢẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆĐÙÚỦŨỤƯỪỨỬỮỰÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÌÍỈĨỊÄËÏÎÖÜÛÑÇ";
    const to   = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyyaaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouunc";
    
    let result = name.trim().toLowerCase();
    for (let i = 0; i < from.length; i++) {
        result = result.replace(new RegExp(from[i], 'g'), to[i]);
    }
    
    return result.replace(/\s+/g, '_');
}

function getCelebrationData(userName) {
    const normalizedInput = normalizeName(userName);
    
    for (const key in celebrationData) {
        if (normalizeName(key) === normalizedInput) {
            return celebrationData[key];
        }
    }
    
    return defaultData;
}
