document.addEventListener('DOMContentLoaded', () => {
    // --- QUẢN LÝ GIỎ HÀNG ---
    function updateCartIcon() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountEl = document.getElementById('cart-item-count');
        if (cartCountEl) {
            cartCountEl.textContent = cart.length;
            cartCountEl.style.display = cart.length > 0 ? 'flex' : 'none';
        }
    }

    function addToCart(item) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(cartItem => cartItem.name === item.name && cartItem.type === item.type);
        if (existingItem) {
            alert(`${item.name} is already in your cart.`);
            return;
        }
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartIcon();
        alert(`Added ${item.name} to your cart!`);
    }

    // Cập nhật icon giỏ hàng khi tải trang
    updateCartIcon();

    // Gán sự kiện click cho các nút "Add to Cart"
    document.body.addEventListener('click', function(e) {
        if (e.target && e.target.matches('.add-to-cart-btn')) {
            e.preventDefault();
            const item = {
                type: e.target.dataset.type,
                name: e.target.dataset.name,
                route: e.target.dataset.route,
                price: parseFloat(e.target.dataset.price),
                img: e.target.dataset.img,
            };
            addToCart(item);
        }
    });

    // --- QUẢN LÝ TÀI KHOẢN ---
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const authButtons = document.getElementById('auth-buttons');
    const userInfo = document.getElementById('user-info');
    
    // 1. Lấy đúng 2 ID từ HTML
    const userNameEl = document.getElementById('user-name'); // Thẻ <span id="user-name">John D.</span>
    const dropdownFullNameEl = document.getElementById('dropdown-user-fullname'); // Thẻ <h4 id="dropdown-user-fullname">John Doe.</h4>
    const logoutBtn = document.getElementById('logout-btn');

    if (currentUser) {
        // Nếu người dùng đã đăng nhập
        if (authButtons) authButtons.style.display = 'none';
        if (userInfo) {
            userInfo.style.display = 'flex';
            
            // Lấy tên đầy đủ (Ví dụ: "Nguyen Van Thang" hoặc email "thang")
            const fullName = currentUser.name || (currentUser.email ? currentUser.email.split('@')[0] : 'User');
            
            // Hàm rút gọn tên kiểu "John D." (Lấy Họ + chữ cái đầu của Tên)
            const nameParts = fullName.trim().split(' ');
            let shortName = fullName;
            if (nameParts.length > 1) {
                const lastName = nameParts[0];
                const firstNameInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
                shortName = `${lastName} ${firstNameInitial}.`;
            }

            // 2. Cập nhật tên ngắn cho Header (John D.)
            if (userNameEl) {
                const welcomeText = userNameEl.classList.contains('header-link') ? '' : '';
                userNameEl.textContent = `${welcomeText}${shortName}`;
            }

            // 3. Cập nhật tên đầy đủ bên trong Dropdown Card (John Doe.)
            if (dropdownFullNameEl) {
                dropdownFullNameEl.textContent = fullName;
            }
        }
    } else {
        // Nếu người dùng chưa đăng nhập
        if (authButtons) authButtons.style.display = 'flex';
        if (userInfo) userInfo.style.display = 'none';
    }

    // --- LOGIC TRANG CHI TIẾT CHUYẾN BAY ---
    const bookingActionCard = document.getElementById('booking-action-card');
    if (bookingActionCard && currentUser) {
        // Lấy thông tin chuyến bay từ trang
        const price = document.querySelector('.detail-summary-price h4')?.textContent.replace('$', '');
        const name = document.querySelector('.detail-summary-route h5')?.textContent;
        const route = document.querySelector('.detail-summary-route p')?.textContent.split('•')[0].trim();
        const image = document.querySelector('.detail-summary-info img')?.src;
        bookingActionCard.innerHTML = `
            <button class="btn btn-primary add-to-cart-btn" style="width: 100%; font-size: 18px; padding: 16px;"
                data-type="Flight" data-name="${name}" data-route="${route}" data-price="${price}" data-img="${image}">
                <i class="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
        `;
    }

    // Add Promo Code button
    const promoBtn = document.getElementById('add-promo-btn');
    if (promoBtn) {
        promoBtn.addEventListener('click', () => {
            alert('Promo code input field would appear here.');
        });
    }

    // Search form submission
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // 1. Lấy giá trị từ các ô input / select trong Form
            const locationInput = document.getElementById('from-to')?.value.toLowerCase().trim() || '';
            const tripType = document.getElementById('trip-type')?.value.toLowerCase() || '';
            const departReturn = document.getElementById('depart-return')?.value.toLowerCase() || '';
            const passengerClass = document.getElementById('passenger-class')?.value.toLowerCase() || '';

            // 2. Kiểm tra các điều kiện để quyết định chuyển sang file nào
            if (locationInput.includes('emirates') || locationInput.includes('lahore')) {
                window.location.href = 'flight-detail-emirates-1.html';
            } 
            else if (locationInput.includes('dubai') || locationInput.includes('flydubai')) {
                window.location.href = 'flight-detail-flydubai-1.html';
            } 
            else if (locationInput.includes('qatar') || locationInput.includes('doha')) {
                window.location.href = 'flight-detail-qatar-1.html';
            } 
            else if (passengerClass.includes('first class') || passengerClass.includes('business')) {
                window.location.href = 'flight-detail-emirates-1.html';
            } 
            else if (passengerClass.includes('economy')) {
                window.location.href = 'flight-detail-flydubai-1.html';
            } 
            else if (tripType.includes('one way')) {
                window.location.href = 'flight-detail-qatar-1.html';
            } 
            else {
                window.location.href = 'flight-detail-emirates-1.html';
            }
        });
    }

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            alert(`Thanks for subscribing with: ${email}!`);
            newsletterForm.reset();
        });
    }

    // "Show more" functionality on flights page
    const showMoreBtn = document.getElementById('show-more-btn');
    const extraFlights = document.getElementById('extra-flights');

    if (showMoreBtn && extraFlights) {
        showMoreBtn.addEventListener('click', () => {
            extraFlights.classList.remove('hidden');
            showMoreBtn.style.display = 'none';
        });
    }

    // Booking Form (Book Now)
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const checkin = document.getElementById('checkin-date').value;
            const checkout = document.getElementById('checkout-date').value;
            const guests = document.getElementById('booking-guests').value;
            const room = document.getElementById('room-type').value;
            const hotel = document.getElementById('hotel-name').textContent;
            const total = document.getElementById('total-price').textContent;

            alert(
                `✅ Booking Confirmed!\n\n` +
                `🏨 Hotel: ${hotel}\n` +
                `📅 Check-in: ${checkin}\n` +
                `📅 Check-out: ${checkout}\n` +
                `👤 Guests: ${guests}\n` +
                `🛏️ Room: ${room}\n` +
                `💰 Total: ${total}\n\n` +
                `Thank you for choosing Golobe! We'll send your confirmation email shortly.`
            );
        });
    }

    // Bọc kiểm tra cho phần thanh toán
    const fareSummary = document.getElementById('fare-summary');
    if (typeof totalPrice !== 'undefined' && fareSummary) {
        fareSummary.innerHTML = `
            <li class="total" style="display: flex; justify-content: space-between; font-weight: bold; font-size: 18px; margin-top: 16px;">
                <span>Total Payment</span> 
                <span class="total-price">$${totalPrice.toFixed(2)}</span>
            </li>
        `;
    }

    const payButton = document.getElementById('pay-button');
    if (typeof totalPrice !== 'undefined' && payButton) {
        payButton.innerHTML = `<i class="fa-solid fa-lock"></i> Pay $${totalPrice.toFixed(2)}`;
    }

    // --- DROPDOWN PROFILE MENU ---
    const profileTrigger = document.getElementById("profile-trigger");
    const dropdownMenu = document.getElementById("profile-dropdown");

    // Bật / Tắt Dropdown Menu khi bấm vào Avatar
    if (profileTrigger && dropdownMenu) {
        profileTrigger.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle("active");
        });

        // Tự động đóng menu nếu người dùng click ra ngoài vùng dropdown
        document.addEventListener("click", (e) => {
            if (!dropdownMenu.contains(e.target) && !profileTrigger.contains(e.target)) {
                dropdownMenu.classList.remove("active");
            }
        });
    }

    // Xử lý Đăng xuất (Đã tối ưu, không bị đè dữ liệu)
    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("currentUser");
            alert("Bạn đã đăng xuất.");
            window.location.href = "index.html";
        });
    }

    // --- QUẢN LÝ TABS ---
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    // Hàm kích hoạt Tab
    function activateTab(tabId) {
        tabBtns.forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
        });

        tabContents.forEach(content => {
            content.classList.toggle("active", content.id === tabId);
        });
    }

    // Event listener cho click Tab
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");
            if (targetTab) activateTab(targetTab);
        });
    });

    // Tự động nhận diện hashtag trên URL
    const hash = window.location.hash;
    if (hash === "#payments") {
        activateTab("payment-tab");
    } else if (hash === "#history") {
        activateTab("history-tab");
    }

    // Open/Close Modal Add Card
    const modal = document.getElementById("card-modal");
    const openModalBtn = document.getElementById("open-add-card-modal");
    const closeModalBtn = document.getElementById("close-card-modal");

    if (openModalBtn && modal) {
        openModalBtn.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    }

    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Xử lý chuyển đổi giữa Flights và Stays trong tab History
    const btnFlights = document.getElementById("btn-subtab-flights");
    const btnStays = document.getElementById("btn-subtab-stays");
    const flightsList = document.getElementById("history-flights-list");
    const staysList = document.getElementById("history-stays-list");

    if (btnFlights && btnStays) {
        btnFlights.addEventListener("click", () => {
            btnFlights.classList.add("active");
            btnStays.classList.remove("active");
            if (flightsList) flightsList.style.display = "block";
            if (staysList) staysList.style.display = "none";
        });

        btnStays.addEventListener("click", () => {
            btnStays.classList.add("active");
            btnFlights.classList.remove("active");
            if (flightsList) flightsList.style.display = "none";
            if (staysList) staysList.style.display = "block";
        });
    }

    // Demo click nút Download Ticket
    document.querySelectorAll(".btn-download-ticket").forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Đang tải xuống vé PDF...");
        });
    });


    // --- TỰ ĐỘNG CẬP NHẬT THÔNG TIN TRANG ACCOUNT ---
    const accountHeroName = document.querySelector('.account-user-details h2');
    if (accountHeroName && currentUser) {
        const fullName = currentUser.name || (currentUser.email ? currentUser.email.split('@')[0] : 'User');
        const email = currentUser.email || 'Chưa có email';
        const dynamicAvatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=random&color=fff&size=300`;

        // 1. Đồng bộ Avatar trên trang account
        document.querySelectorAll('.nav-avatar, .card-avatar, .account-avatar').forEach(img => {
            img.src = dynamicAvatarUrl;
        });

        // 2. Cập nhật tên & email ở phần Hero bìa tài khoản
        const heroEmail = document.querySelector('.account-user-details p');
        if (accountHeroName) accountHeroName.textContent = fullName;
        if (heroEmail) heroEmail.textContent = email;

        // 3. Cập nhật tên & email trong danh sách Account Details
        const accountValues = document.querySelectorAll('.account-tab-content .value-text');
        if (accountValues.length >= 2) {
            accountValues[0].textContent = fullName;
            accountValues[1].textContent = email;
        }
    }
});
