/* ========================================
   SCRIPT.JS - GOLOBE
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // 1. QUẢN LÝ GIỎ HÀNG
    // ========================================
    function updateCartIcon() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountEl = document.getElementById('cart-item-count');
        if (cartCountEl) {
            cartCountEl.textContent = cart.length;
            cartCountEl.style.display = cart.length > 0 ? 'flex' : 'none';
        }
    }
    updateCartIcon();

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

    // ========================================
    // 2. QUẢN LÝ TÀI KHOẢN
    // ========================================
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const authButtons = document.getElementById('auth-buttons');
    const userInfo = document.getElementById('user-info');
    const userNameEl = document.getElementById('user-name');
    const dropdownFullNameEl = document.getElementById('dropdown-user-fullname');
    const logoutBtn = document.getElementById('logout-btn');

    if (currentUser) {
        if (authButtons) authButtons.style.display = 'none';
        if (userInfo) {
            userInfo.style.display = 'flex';
            const fullName = currentUser.name || (currentUser.email ? currentUser.email.split('@')[0] : 'User');

            // Rút gọn tên
            const nameParts = fullName.trim().split(' ');
            let shortName = fullName;
            if (nameParts.length > 1) {
                const lastName = nameParts[0];
                const firstNameInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
                shortName = `${lastName} ${firstNameInitial}.`;
            }

            if (userNameEl) userNameEl.textContent = shortName;
            if (dropdownFullNameEl) dropdownFullNameEl.textContent = fullName;
        }
    } else {
        if (authButtons) authButtons.style.display = 'flex';
        if (userInfo) userInfo.style.display = 'none';
    }

    // ========================================
    // 3. DROPDOWN PROFILE MENU
    // ========================================
    const profileTrigger = document.getElementById("profile-trigger");
    const dropdownMenu = document.getElementById("profile-dropdown");

    if (profileTrigger && dropdownMenu) {
        profileTrigger.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle("active");
        });

        document.addEventListener("click", (e) => {
            if (!dropdownMenu.contains(e.target) && !profileTrigger.contains(e.target)) {
                dropdownMenu.classList.remove("active");
            }
        });
    }

    // ========================================
    // 4. ĐĂNG XUẤT
    // ========================================
    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("currentUser");
            alert("Bạn đã đăng xuất.");
            window.location.href = "index.html";
        });
    }

    // ========================================
    // 5. XỬ LÝ TÌM KIẾM FLIGHT / HOTEL
    // ========================================

    // ---- 5a. Lấy các element ----
    const tabFlights = document.getElementById('tab-flights');
    const tabStays = document.getElementById('tab-stays');
    const flightForm = document.getElementById('flight-search-form');
    const hotelForm = document.getElementById('hotel-search-form');
    const tripType = document.getElementById('trip-type');
    const returnDateGroup = document.getElementById('return-date-group');
    const returnDateInput = document.getElementById('return-date');
    const departDate = document.getElementById('depart-date');
    const swapBtn = document.querySelector('.swap-btn');
    const fromToInput = document.getElementById('from-to');

    // ---- 5b. Hàm ẩn/hiện Return Date ----
    function toggleReturnDate() {
        if (!tripType || !returnDateGroup || !returnDateInput) return;

        if (tripType.value === 'oneway') {
            // Ẩn Return Date
            returnDateGroup.classList.add('hidden');
            returnDateGroup.style.display = 'none';
            returnDateInput.removeAttribute('required');
            returnDateInput.value = '';
        } else {
            // Hiện Return Date
            returnDateGroup.classList.remove('hidden');
            returnDateGroup.style.display = 'block';
            returnDateInput.setAttribute('required', 'required');
            if (!returnDateInput.value) {
                const today = new Date();
                const returnDate = new Date(today);
                returnDate.setDate(today.getDate() + 19);
                returnDateInput.value = returnDate.toISOString().split('T')[0];
            }
        }
    }

    // ---- 5c. Set default dates ----
    const today = new Date();
    if (departDate) {
        const d = new Date(today);
        d.setDate(today.getDate() + 14);
        departDate.value = d.toISOString().split('T')[0];
    }

    // ---- 5d. Lắng nghe sự kiện đổi Trip Type ----
    if (tripType) {
        tripType.addEventListener('change', toggleReturnDate);
        // Chạy lần đầu
        toggleReturnDate();
    }

    // ---- 5e. Chuyển đổi Tab Flights / Stays ----
    if (tabFlights && tabStays && flightForm && hotelForm) {
        tabFlights.addEventListener('click', function() {
            tabFlights.classList.add('active');
            tabStays.classList.remove('active');
            flightForm.style.display = 'block';
            hotelForm.style.display = 'none';
        });

        tabStays.addEventListener('click', function() {
            tabStays.classList.add('active');
            tabFlights.classList.remove('active');
            hotelForm.style.display = 'block';
            flightForm.style.display = 'none';
        });
    }

    // ---- 5f. Submit Flight Form ----
    if (flightForm) {
        flightForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const fromTo = document.getElementById('from-to').value;
            const depart = document.getElementById('depart-date').value;
            const returnDateVal = document.getElementById('return-date').value;
            const passengers = document.getElementById('passenger-class').value;
            const trip = document.getElementById('trip-type').value;

            let url = `flight-search.html?from=${encodeURIComponent(fromTo)}&depart=${depart}&passengers=${encodeURIComponent(passengers)}&trip=${trip}`;
            if (trip === 'return' && returnDateVal) {
                url += `&return=${returnDateVal}`;
            }

            window.location.href = url;
        });
    }

    // ---- 5g. Submit Hotel Form ----
    if (hotelForm) {
        hotelForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const destination = document.getElementById('hotel-destination').value;
            const checkin = document.getElementById('hotel-checkin').value;
            const checkout = document.getElementById('hotel-checkout').value;
            const guests = document.getElementById('hotel-guests').value;

            window.location.href = `hotel-search.html?destination=${encodeURIComponent(destination)}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`;
        });
    }

    // ---- 5h. Nút hoán đổi (Swap) ----
    if (swapBtn && fromToInput) {
        swapBtn.addEventListener('click', function() {
            const parts = fromToInput.value.split(' - ');
            if (parts.length === 2) {
                fromToInput.value = parts[1] + ' - ' + parts[0];
            } else {
                const words = fromToInput.value.trim().split(' ');
                if (words.length >= 2) {
                    const first = words[0];
                    const last = words[words.length - 1];
                    words[0] = last;
                    words[words.length - 1] = first;
                    fromToInput.value = words.join(' ');
                }
            }
            // Hiệu ứng xoay
            this.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 300);
        });
    }

    // ========================================
    // 6. NEWSLETTER
    // ========================================
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            alert(`Thanks for subscribing with: ${email}!`);
            newsletterForm.reset();
        });
    }

    // ========================================
    // 7. SHOW MORE FLIGHTS
    // ========================================
    const showMoreBtn = document.getElementById('show-more-btn');
    const extraFlights = document.getElementById('extra-flights');

    if (showMoreBtn && extraFlights) {
        showMoreBtn.addEventListener('click', () => {
            extraFlights.classList.remove('hidden');
            showMoreBtn.style.display = 'none';
        });
    }

    // ========================================
    // 8. BOOKING FORM (Hotel)
    // ========================================
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

    // ========================================
    // 9. QUẢN LÝ TABS (Account)
    // ========================================
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    function activateTab(tabId) {
        tabBtns.forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
        });
        tabContents.forEach(content => {
            content.classList.toggle("active", content.id === tabId);
        });
    }

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

    // ========================================
    // 10. MODAL ADD CARD
    // ========================================
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

    // ========================================
    // 11. HISTORY TABS (Flights / Stays)
    // ========================================
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

    // ========================================
    // 12. DOWNLOAD TICKET
    // ========================================
    document.querySelectorAll(".btn-download-ticket").forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Đang tải xuống vé PDF...");
        });
    });

    // ========================================
    // 13. CẬP NHẬT THÔNG TIN ACCOUNT
    // ========================================
    const accountHeroName = document.querySelector('.account-user-details h2');
    if (accountHeroName && currentUser) {
        const fullName = currentUser.name || (currentUser.email ? currentUser.email.split('@')[0] : 'User');
        const email = currentUser.email || 'Chưa có email';
        const dynamicAvatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=random&color=fff&size=300`;

        document.querySelectorAll('.nav-avatar, .card-avatar, .account-avatar').forEach(img => {
            img.src = dynamicAvatarUrl;
        });

        const heroEmail = document.querySelector('.account-user-details p');
        if (accountHeroName) accountHeroName.textContent = fullName;
        if (heroEmail) heroEmail.textContent = email;

        const accountValues = document.querySelectorAll('.account-tab-content .value-text');
        if (accountValues.length >= 2) {
            accountValues[0].textContent = fullName;
            accountValues[1].textContent = email;
        }
    }

}); // End DOMContentLoaded
