# Ms Ngân English — Quản lý lớp học

**Ngày:** Thứ Bảy, 12 tháng 9, 2026  
**Trang:** Tổng quan

---

## Cấu trúc layout

```
+------------------+---------------------------------------------------------------+
| SIDEBAR          | HEADER + GREETING                                             |
| Logo + brand     | Xin chào, Lâm Phạm  ✓  👑 Quản trị                            |
| Menu quản lý     | Actions: Thêm học sinh | Tạo lớp học | Điểm danh              |
| User card        | Filter: Tháng 9/2026                                          |
+------------------+---------------------------------------------------------------+
|                  | KPI CARDS (4 cột)                                             |
|                  | 180 HS | 7.035.000đ | 0đ đã thu | 0% tỷ lệ                    |
+------------------+-------------------------------+-------------------------------+
|                  | Lịch dạy sắp tới              | Doanh thu dự kiến hôm nay     |
|                  | - Điểm danh hôm nay           | 595.000đ + mini chart         |
|                  | - Hôm nay 12/09               |                               |
|                  | - Ngày mai 13/09              | Doanh thu 12 tháng            |
|                  |                               | 44.730.000đ + bar chart       |
+------------------+-------------------------------+-------------------------------+
```

---

## Sidebar trái

### Brand
- Logo: `M` (badge cam)
- **Ms Ngân English**
- Phụ đề: Quản lý lớp học

### Menu — QUẢN LÝ

| Icon | Mục        | Trạng thái   |
|------|------------|--------------|
| ▦    | Tổng quan  | **Active**   |
| 📅   | Lịch dạy   | Default      |
| ☑    | Điểm danh  | Default      |
| 🎓   | Lớp học    | Default      |
| 👤   | Học sinh   | Default      |
| ③    | Học phí    | Default      |

### Footer sidebar
- Nút **Thu gọn**
- User card:
  - Avatar
  - **Lâm Phạm**
  - 👑 Quản trị

---

## Header chính

### Greeting
**XIN CHÀO, LÂM PHẠM** ✓  👑 Quản trị

> Bảng điều khiển học tập và lịch dạy cá nhân.

### Quick actions
- `👤 Thêm học sinh`
- `+ Tạo lớp học`
- `📋 Điểm danh`

### Bộ lọc thời gian
- Tháng: **Tháng 9/2026** ▾

---

## KPI cards

| Metric | Giá trị | Mô tả | Accent |
|--------|---------|-------|--------|
| Học sinh đang theo học | **180** | Học sinh đang theo học | Cam + ring |
| Tổng học phí phát sinh | **7.035.000 đ** | Tổng học phí phát sinh | Cam + ring xanh lá |
| Tổng học phí đã thu | **0 đ** | Tổng học phí đã thu | Xanh mint + ring xanh |
| Tỷ lệ thu học phí | **0%** | Tỷ lệ thu học phí | Cam + ring hồng |

---

## Cột trái — Lịch dạy sắp tới

Nút phụ: `Xem toàn bộ thời khoá biểu`

### Lớp đã điểm danh hôm nay
Tổng hợp theo lượt buổi đã phát sinh điểm danh. Badge: **1 lớp**

| Lớp       | Giờ   | Có mặt | Vắng | Có phép |
|-----------|-------|--------|------|---------|
| Eng 4 NC  | 07:30 | 17     | 0    | 0       |

### Hôm nay — Thứ 7 — 12/09

| Giờ         | Lớp      | Ghi chú                 | Action     |
|-------------|----------|-------------------------|------------|
| 09:00–10:30 | Eng 3A   | Chưa có nội dung        | Điểm danh  |
| 14:00–15:30 | Eng 3B   | Chưa có nội dung        | Điểm danh  |
| 15:30–17:00 | Eng 4 NC | Lớp tiếng Anh 4 Nâng Cao | Điểm danh |

### Ngày mai — Chủ nhật — 13/09

| Giờ         | Lớp    | Ghi chú          | Action    |
|-------------|--------|------------------|-----------|
| 07:30–09:00 | Eng 2  | Chưa có nội dung | Điểm danh |
| 09:00–10:30 | Eng 9B | Chưa có nội dung | Điểm danh |
| 14:00–15:30 | Eng 7A | Chưa có nội dung | Điểm danh |

---

## Cột phải — Doanh thu

### Doanh thu dự kiến hôm nay
Tính theo lượt học sinh có mặt và học phí từng lớp.

**595.000 đ**

| Lớp      | Chi tiết                         | Số tiền     |
|----------|----------------------------------|-------------|
| Eng 4 NC | 07:30 — 17 có mặt · 0 vắng · 0 có phép | 595.000 đ |

Mini chart (cột): ngày xem **12/09/2026**  
Ghi chú: *17 lượt có mặt — 1 lớp — 1 buổi*

### Doanh thu 12 tháng
**44.730.000 đ**

Bộ lọc:
- Kỳ: **12 tháng** ▾
- Loại biểu đồ: **Biểu đồ cột** ▾
- Năm: **2026** ▾

Trục X: 12 tháng  
Một số cột nổi bật trên UI: `37.7tr`, `7.0tr` (các tháng còn lại hiển thị `0đ` hoặc cột thấp).

---

## Hệ thống màu (gợi ý)

| Token            | Màu gần đúng      | Dùng cho              |
|------------------|-------------------|-----------------------|
| Background       | `#F7F8FB`         | Nền trang             |
| Surface          | `#FFFFFF`         | Card                  |
| Text primary     | `#1B1F2A`         | Tiêu đề               |
| Text muted       | `#8A90A0`         | Phụ đề                |
| Accent orange    | `#FF7A45`         | KPI học sinh / tỷ lệ  |
| Accent mint      | `#3DDC97`         | Có mặt / ring xanh    |
| Accent purple    | `#7B6CFF`         | Chart cột             |
| Accent pink      | `#FF5CA8`         | Checkmark / ring      |
| Badge present    | xanh nhạt         | Có mặt                |
| Badge absent     | tím nhạt          | Vắng                  |
| Badge excused    | vàng nhạt         | Có phép               |

---

## Component notes (để implement)

1. **Sidebar** cố định trái, width ~240px, item active có nền gradient tím nhạt.
2. **KPI** 4 card ngang, mỗi card có số lớn bên trái + circular progress bên phải.
3. **Lịch dạy** dùng card nhóm theo ngày; mỗi buổi là mini-card 3 cột.
4. **Doanh thu hôm nay** kết hợp số lớn + 1 dòng breakdown + spark/bar nhỏ.
5. **Doanh thu 12 tháng** bar chart nhiều màu (tím / xanh / hồng).
6. Nút hành động dạng pill, viền nhẹ, icon + text.
7. Badge trạng thái (`Có mặt`, `Vắng`, `Có phép`, `Điểm danh`) dùng pill pastel.
8. User footer sidebar có avatar tròn + role crown.
