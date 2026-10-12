# Đề K21 KTYT

Website trắc nghiệm tự ôn, chạy bằng HTML/CSS/JavaScript thuần. Không cần tài khoản, máy chủ, framework hay thư viện ngoài.

## Chạy trên máy tính

1. Tải hoặc giải nén thư mục dự án.
2. Mở `index.html` bằng Chrome, Edge hoặc Firefox.
3. Chọn số câu, bấm **Trộn đề & bắt đầu**.

Website hoạt động offline; không cần chạy lệnh cài đặt nào.

## Đưa lên GitHub Pages

1. Tạo một repository mới trên GitHub, ví dụ `de-k21-ktyt`.
2. Tải lên toàn bộ file trong thư mục dự án: `index.html`, `style.css`, `questions.js`, `app.js`, `README.md`, `LICENSE.txt` và `NGUON_THAM_CHIEU.md`.
3. Mở **Settings → Pages** trong repository.
4. Ở phần **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn branch `main`, folder `/(root)`, rồi bấm **Save**.
6. Đợi GitHub Pages xuất bản website. URL thường có dạng `https://TEN-TAI-KHOAN.github.io/de-k21-ktyt/`.

## Tính năng

- Tự động xáo trộn thứ tự câu hỏi và thứ tự phương án mỗi lượt.
- Chọn 10, 15, 20 hoặc tất cả câu có trong ngân hàng.
- Điều hướng trực tiếp bằng danh sách số câu.
- Giữ đáp án đã chọn khi chuyển qua lại giữa các câu.
- Chấm điểm, hiển thị đáp án đúng và giải thích sau khi nộp bài.
- Có thể bắt đầu lượt mới hoặc làm riêng các câu sai.
- Giao diện tương thích máy tính và điện thoại.

## Thêm hoặc sửa câu hỏi

Mở `questions.js`. Mỗi câu có cấu trúc tương tự:

```js
{
  id: "k21-23",               // ID duy nhất
  topic: "Chủ đề",            // ghi chú để quản lý ngân hàng
  question: "Nội dung câu hỏi?",
  options: [
    { id: "a", text: "Phương án A" },
    { id: "b", text: "Phương án B" },
    { id: "c", text: "Phương án C" },
    { id: "d", text: "Phương án D" }
  ],
  answer: "b",                // id của đáp án đúng; không phải chữ cái hiển thị
  explanation: "Giải thích đáp án.",
  source: "Đề / trang / slide tham chiếu"
}
```

Các phương án được trộn khi bắt đầu lượt, vì vậy `answer` phải giữ nguyên ID (`a`, `b`, `c`, `d`) tương ứng với phương án đúng, không đổi thành chữ cái vị trí sau khi trộn.

## Lưu ý về ngân hàng câu hỏi

Ngân hàng hiện có 50 câu, gồm câu được biên tập lại từ ảnh đề K21 (mã đề 001/002) và câu luyện tập bổ sung theo các nội dung trong bộ slide. Sau khi nộp bài, phần giải thích hiển thị mục “Tham chiếu” với tên file và số trang PDF. “PDF tr. X” nghĩa là vị trí trang trong chính file PDF, không nhất thiết là số in trên slide. Với nội dung không được trình bày trực tiếp trong sáu PDF bài giảng đã gửi, mục tham chiếu sẽ nói rõ điều đó thay vì gán nguồn không có căn cứ. Một số câu hỏi trong ảnh đề, đặc biệt ví dụ kiều hối/GNP, có cách diễn đạt chưa thật chặt; các ghi chú này được giữ trong lời giải để tránh học thuộc sai khái niệm.
