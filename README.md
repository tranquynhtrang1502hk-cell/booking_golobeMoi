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
- Trang chính sách và điều khoản.
- Trang giới thiệu.

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
│   └── account.css                        # Giao diện cho trang tài khoản
│   └── flight.css                         # Giao diện cho trang chuyến bay
│   └── flight-detail.css                  # Giao diện cho trang đặt chuyến bay
│   └── hotel.css                          # Giao diện cho trang khách sạn
│   └── hotel-detail.css                   # Giao diện cho trang khách sạn
│   └── hotels.css                         # Giao diện cho trang danh sách khách sạn
│   └── login.css                          # Giao diện cho trang đăng nhập
│   └── privacy.css                        # Giao diện cho trang chính sách bảo mật
│   └── promo-code.css                     # Giao diện cho trang mã khuyến mãi
│   └── reviews.css                        # Giao diện cho trang đánh giá
│   └── signup.css                         # Giao diện cho trang đăng ký
│   └── style.css                          # Giao diện chung cho trang web
│   └── terms.css                          # Giao diện cho trang điều khoản
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
pages/
│
├──  Trang chính
│   └── index.html                 # Trang chủ của website
│
├──  Tài khoản & xác thực
│   ├── account.html               # Quản lý thông tin tài khoản
│   ├── login.html                 # Đăng nhập
│   ├── signup.html                # Đăng ký tài khoản
│   ├── forgot-password.html       # Quên mật khẩu
│   ├── reset-password.html        # Đặt lại mật khẩu
│   └── verify-code.html            # Xác thực mã OTP/email
│
├──  Chuyến bay
│   ├── flights.html               # Danh sách và tìm kiếm chuyến bay
│   ├── flight-detail.html         # Chi tiết chuyến bay
│   ├── flight-detail-emirates-1.html  # Chi tiết chuyến bay Emirates
│   ├── flight-detail-flydubai-1.html  # Chi tiết chuyến bay Flydubai
│   └── flight-detail-qatar-1.html     # Chi tiết chuyến bay Qatar
│
├──  Khách sạn
│   ├── hotel.html                 # Tìm kiếm khách sạn
│   ├── hotels.html                # Danh sách khách sạn
│   └── hotel-detail.html          # Chi tiết khách sạn
│
├──  Địa điểm & du lịch
│   ├── places.html                # Danh sách các địa điểm nổi bật
│   ├── destination-detail.html   # Chi tiết điểm đến
│   │
│   ├──  Chi tiết địa điểm
│   │   ├── baku-detail.html       # Chi tiết địa điểm Baku
│   │   ├── dubai-detail.html      # Chi tiết địa điểm Dubai
│   │   ├── newyork-detail.html    # Chi tiết địa điểm New York
│   │   ├── paris-detail.html      # Chi tiết địa điểm Paris
│   │   ├── rome-detail.html       # Chi tiết địa điểm Rome
│   │   ├── sydney-detail.html     # Chi tiết địa điểm Sydney
│   │   ├── tokyo-detail.html      # Chi tiết địa điểm Tokyo
│   │   └── male-detail.html       # Chi tiết địa điểm Malé
│   │
│   ├──  Hoạt động
│   │   ├── activities-adventure.html   # Các hoạt động phiêu lưu
│   │   ├── activities-culture.html     # Các hoạt động văn hóa
│   │   └── activities-relaxation.html  # Các hoạt động thư giãn
│   │
│   └──  Hướng dẫn du lịch
│       ├── guide-maldives.html    # Hướng dẫn du lịch Maldives
│       ├── guide-paris.html       # Hướng dẫn du lịch Paris
│       └── guide-rome.html        # Hướng dẫn du lịch Rome
│
├──  Thanh toán
│   ├── payment.html               # Trang thanh toán
│   ├── signup-payment.html        # Đăng ký kết hợp thanh toán
│   └── promo-code.html            # Nhập và áp dụng mã khuyến mãi
│
├──  Đánh giá
│   └── reviews.html               # Hiển thị đánh giá từ khách hàng
│
├──  Thông tin website
│   ├── our-story.html             # Giới thiệu về website / câu chuyện thương hiệu
│   ├── work-with-us.html          # Tuyển dụng / hợp tác
│   ├── terms.html                 # Điều khoản sử dụng
│   └── privacy.html               # Chính sách bảo mật
│
└──  JavaScript
    └── script.js                  # Xử lý các chức năng tương tác của website
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
