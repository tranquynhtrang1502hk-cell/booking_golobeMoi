# Booking-Golobe

## 1. Giới thiệu

Booking-Golobe là một website du lịch được xây dựng nhằm cung cấp
giao diện cho người dùng tìm kiếm và tham khảo thông tin về chuyến bay,
khách sạn và các địa điểm du lịch.

Website được xây dựng bằng HTML5, CSS3 và JavaScript. Project bao gồm
nhiều trang HTML được liên kết với nhau, phục vụ các chức năng như
xem chuyến bay, xem khách sạn, xem địa điểm du lịch, đăng nhập,
đăng ký, thanh toán, mã khuyến mãi và đánh giá.

---

## 2. Mục tiêu của project

Project được thực hiện với các mục tiêu:

- Xây dựng một website du lịch có giao diện trực quan và dễ sử dụng.
- Xây dựng nhiều trang HTML có liên kết với nhau.
- Sử dụng HTML5 để xây dựng cấu trúc website.
- Sử dụng CSS3 để thiết kế và định dạng giao diện.
- Sử dụng JavaScript để tạo các chức năng tương tác.
- Sắp xếp mã nguồn và hình ảnh thành các thư mục riêng.
- Sử dụng Git và GitHub để quản lý mã nguồn.

---

## 3. Công nghệ sử dụng

### HTML5

HTML5 được sử dụng để xây dựng cấu trúc và nội dung của website.

Các trang HTML được chia thành nhiều nhóm chức năng như:

- Trang chủ.
- Trang chuyến bay.
- Trang khách sạn.
- Trang địa điểm du lịch.
- Trang đăng nhập và đăng ký.
- Trang thanh toán.
- Trang mã khuyến mãi.
- Trang đánh giá.

### CSS3

CSS3 được sử dụng để thiết kế giao diện và bố cục của website.

Các file CSS được sử dụng trong project gồm:

- `style.css`
- `flight.css`
- `login.css`
- `page2.css`
- `page4.css`
- `page6.css`

Các file CSS dùng để định dạng màu sắc, kích thước, khoảng cách,
bố cục, hình ảnh, nút bấm và các thành phần khác trên website.

### JavaScript

Website sử dụng JavaScript thông qua file:

`script.js`

JavaScript được sử dụng để xử lý các thao tác và chức năng tương tác
trên website.

### Git và GitHub

Git và GitHub được sử dụng để quản lý và lưu trữ mã nguồn của project,
đồng thời hỗ trợ theo dõi các thay đổi trong quá trình phát triển.

---

## 4. Cấu trúc project

```tree
booking-Golobe/
│
├── css/                        # Thư mục chứa các tệp định dạng CSS chung
│   └── login.css                # Giao diện cho trang đăng nhập
│
├── image/                      # Thư mục chứa hình ảnh và tài nguyên truyền thông
│   ├── arab-hotel.jpg
│   ├── baku-hotel.jpg
│   ├── baku-tour.jpg
│   ├── center.jpg
│   ├── central-park-towers.webp
│   ├── dubai.jpg
│   ├── Eiffelower-Suites.jpg
│   ├── Hotel-Istanbul.jpg
│   ├── istanbul.avif
│   ├── Maldives.avif
│   ├── nature.jpg
│   ├── Paris.jpg
│   ├── rome-italy-colosseum.jpeg
│   ├── rydges-sydney-harbour.jpg
│   ├── Sydney.jpg
│   ├── Tokyo_Tower_Afterglow.JPG
│   └── verwater-Paradise-Resort.jpg
│
├── pages/                      # Các trang giao diện chính của dự án
│   ├── account.html
│   ├── baku-detail.html
│   ├── destination-detail.html
│   ├── dubai-detail.html
│   ├── flight-detail-emirates-1.html
│   ├── flight-detail-flydubai-1.html
│   ├── flight-detail-qatar-1.html
│   ├── flight-detail.html                       # Thông tin chi tiết của một chuyến bay
│   ├── flight.css                               # Giao diện cho các trang liên quan đến thông tin chuyến bay
│   ├── flights.html                             # Hiện thị các thông tin chuyến bay
│   ├── forgot-password.html
│   ├── hotel-detail.html                        # Thông tin chi tiết của một khách sạn
│   ├── hotel.html                 
│   ├── hotels.html                              # Hiện thị các thông tin của khách sạn
│   ├── index.html                               # Trang chính của dự án
│   ├── login.html                               # Trang đăng nhập
│   ├── male-detail.html
│   ├── newyork-detail.html
│   ├── paris-detail.html
│   ├── payment.html                             # Trang hiện thị thanh toán
│   ├── places.html                              # Trang hiện thị các địa điểm
│   ├── promo-code.html                          # Trang mã khuyến mãi
│   ├── reset-password.html                      # Trang đặt lại mật khẩu
│   ├── reviews.html                             # Trang đánh giá từ khách hàng
│   ├── rome-detail.html
│   ├── script.js                                # File JavaScript xử lý logic chính
│   ├── signup-payment.html                      # Trang đăng nhập khi thanh toán
│   ├── signup.html                              # Trang đăng kí
│   ├── style.css                                # File CSS chính cho giao diện
│   ├── sydney-detail.html
│   ├── tokyo-detail.html
│   └── verify-code.html
│
├── pages 2/                    # Các phiên bản/mô-đun trang phát triển bổ sung
├── pages 3/
│   ├── flight-detail.html
│   ├── flight-search.html
│   ├── page2.css
│   └── page3.css
│
├── pages 4/
│   ├── page4.css
│   └── payment-confirmation.html
│
├── page 5/
│   ├── page4.css
│   └── payment-confirmation.html
│
├── pages 6/
│   ├── index.html                               # Dùng để trỏ trang chính bên trong
│   ├── login.html                               # Trang đăng nhập
│   └── page6.css
│
└── README.md                   # Tệp tài liệu hướng dẫn dự án
