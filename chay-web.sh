#!/bin/bash
# Script chạy web local cho dự án 8/3

echo "🌸 ================================== 🌸"
echo "   CHẠY WEB CHÚC MỪNG 8/3"
echo "🌸 ================================== 🌸"
echo ""

# Kiểm tra xem có Python3 không
if command -v python3 &> /dev/null; then
    echo "✅ Đã tìm thấy Python 3"
    echo "🚀 Đang khởi động web server..."
    echo ""
    echo "📱 Mở trình duyệt và truy cập:"
    echo "   👉 http://localhost:8080/start.html"
    echo ""
    echo "⏹️  Nhấn Ctrl+C để dừng server"
    echo ""
    echo "🌸 ================================== 🌸"
    echo ""
    
    # Chạy server
    python3 -m http.server 8080
    
elif command -v python &> /dev/null; then
    echo "✅ Đã tìm thấy Python"
    echo "🚀 Đang khởi động web server..."
    echo ""
    echo "📱 Mở trình duyệt và truy cập:"
    echo "   👉 http://localhost:8080/start.html"
    echo ""
    echo "⏹️  Nhấn Ctrl+C để dừng server"
    echo ""
    echo "🌸 ================================== 🌸"
    echo ""
    
    # Chạy server
    python -m http.server 8080
    
else
    echo "❌ Không tìm thấy Python!"
    echo ""
    echo "📋 Vui lòng cài đặt Python:"
    echo "   👉 https://www.python.org/downloads/"
    echo ""
    echo "Hoặc mở file start.html trực tiếp bằng trình duyệt"
    echo ""
    exit 1
fi
