//********************************************* */ 控制Banner左右滑動****************************
let currentSlide = 0; // 初始幻燈片索引
const slides = document.querySelectorAll('.slide'); // 獲取所有幻燈片
const totalSlides = slides.length; // 總幻燈片數量

// 顯示指定索引的幻燈片
function showSlide(index) {
    // 如果索引超過幻燈片數量，重置為第一張
    if (index >= totalSlides) {
        currentSlide = 0;
    } 
    // 如果索引小於0，重置為最後一張
    else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // 隱藏所有幻燈片
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // 顯示當前幻燈片
    slides[currentSlide].style.display = 'block';
}

// 切換幻燈片
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// 初始化顯示第一張幻燈片
showSlide(currentSlide);

// 綁定左右按鈕的事件
document.querySelector('.banner_prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.banner_next').addEventListener('click', () => changeSlide(1));

                                
/***********************************************控制 書籤左右滑動*****************************************************/
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.book-gallery'); // 書籍展示區
    const books = document.querySelectorAll('.book'); // 所有書籍
    const bookWidth = books[0].offsetWidth + 20; // 每本書的寬度加上間距
    let scrollPosition = 0; // 當前滾動位置

    // 滾動書籍畫廊的函數
    function scrollGallery(direction) {
        // 計算畫廊的最大滾動寬度
        const maxScroll = gallery.scrollWidth - gallery.clientWidth;
        scrollPosition += direction * bookWidth; // 更新滾動位置

        // 限制滾動位置在範圍內
        if (scrollPosition < 0) {
            scrollPosition = 0;
        } else if (scrollPosition > maxScroll) {
            scrollPosition = maxScroll;
        }

        // 滾動畫廊
        gallery.style.transform = `translateX(-${scrollPosition}px)`;
    }

    // 綁定按鈕點擊事件
    document.querySelector('.book_carousel_prev').addEventListener('click', () => scrollGallery(-1));
    document.querySelector('.book_carousel_next').addEventListener('click', () => scrollGallery(1));
});

document.querySelector('.search-btn').addEventListener('click', function() {
    alert('Search button clicked!');
});

document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const books = document.querySelectorAll(".book");
    const totalBooks = books.length;
    const bookGallery = document.querySelector(".book-gallery");

    // 計算書籍的寬度加上間距
    const bookWidth = books[0].offsetWidth + 20; // 書籍寬度 + 間距
    const visibleBooks = Math.floor(bookGallery.parentElement.offsetWidth / bookWidth);
    const maxIndex = totalBooks - visibleBooks;

    function scrollGallery(direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;

        bookGallery.style.transform = `translateX(-${currentIndex * bookWidth}px)`;
    }

    // 綁定按鈕點擊事件
    document.querySelector(".book_carousel_prev").addEventListener("click", () => scrollGallery(-1));
    document.querySelector(".book_carousel_next").addEventListener("click", () => scrollGallery(1));
});

//-------------------------------------------------三個欄位---------------------------------------------------
// document.addEventListener("DOMContentLoaded", function () {
//     const moreLink = document.querySelector(".more-link");
    
//     moreLink.addEventListener("click", function (e) {
//         e.preventDefault();
//         alert("More link clicked! Display more content here.");
//     });
// });

// -----------------------------------------------示例：更新瀏覽人次-------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    // 模擬更新瀏覽人次
    let visitorCount = 480948; // 初始數值
    document.getElementById('visitor-count').textContent = visitorCount;
});



function switchContent(tabId) {
    // 移除所有內容區塊的 active 狀態
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    // 為被點擊的內容區塊添加 active 狀態
    document.getElementById(tabId).classList.add('active');
}


// function handleDatabaseChange() {
//     const databaseSelect = document.getElementById("database");
//     const extraDropdownContainer = document.getElementById("extra-dropdown-container");

//     // 如果選擇了 "Library Catalogue"，顯示新的下拉選單
//     if (databaseSelect.value === "library") {
//         extraDropdownContainer.style.display = "block";
//     } else {
//         extraDropdownContainer.style.display = "none";
//     }
// }


// 初始化：只顯示預設的內容 info && 館藏快速查詢
document.addEventListener("DOMContentLoaded", () => {
    // 初始化兩組標籤切換功能
    switchTab("library-search"); // 預設顯示館藏快速查詢
    info_switchTab("latest-news"); // 預設顯示最新消息
});

// 切換館藏快速查詢標籤內容
function switchTab(tabId) {
    // 隱藏所有內容
    document.querySelectorAll(".quicksort-content").forEach(content => {
        content.classList.remove("active");
        content.style.display = "none"; // 隱藏內容
    });

    // 移除所有按鈕的 active 樣式
    document.querySelectorAll(".quicksort-button").forEach(button => {
        button.classList.remove("active");
    });

    // 顯示選定的內容
    const activeContent = document.getElementById(tabId);
    if (activeContent) {
        activeContent.classList.add("active");
        activeContent.style.display = "block"; // 顯示內容
    }

    // 添加 active 樣式到相應的按鈕
    const activeButton = document.querySelector(`.quicksort-button[onclick="switchTab('${tabId}')"]`);
    if (activeButton) {
        activeButton.classList.add("active");
    }
}

// 切換資訊區標籤內容
function info_switchTab(tabId) {
    // 隱藏所有內容
    document.querySelectorAll(".info-content").forEach(content => {
        content.classList.remove("active");
        content.style.display = "none"; // 隱藏內容
    });

    // 移除所有按鈕的 active 樣式
    document.querySelectorAll(".info-button").forEach(button => {
        button.classList.remove("active");
    });

    // 顯示選定的內容
    const activeContent = document.getElementById(tabId);
    if (activeContent) {
        activeContent.classList.add("active");
        activeContent.style.display = "block"; // 顯示內容
    }

    // 添加 active 樣式到相應的按鈕
    const activeButton = document.querySelector(`.info-button[onclick="info_switchTab('${tabId}')"]`);
    if (activeButton) {
        activeButton.classList.add("active");
    }
}



// // -------------------------------------------------初始化：只顯示館藏快速查詢內容--------------------------------
// document.addEventListener("DOMContentLoaded", () => {
//     switchTab("library-search"); // 預設顯示館藏快速查詢
// });

// // 切換標籤內容函數
// function switchTab(tabId) {
//     // 隱藏所有內容
//     const allContents = document.querySelectorAll(".quicksort-content");
//     allContents.forEach(content => {
//         content.classList.remove("active");
//         content.style.display = "none"; // 隱藏內容
//     });

//     // 移除所有按鈕的 active 樣式
//     const allButtons = document.querySelectorAll(".quicksort-button");
//     allButtons.forEach(button => button.classList.remove("active"));

//     // 顯示選定的內容
//     const activeContent = document.getElementById(tabId);
//     if (activeContent) {
//         activeContent.classList.add("active");
//         activeContent.style.display = "block"; // 顯示內容
//     }

//     // 添加 active 樣式到相應的按鈕
//     const activeButton = document.querySelector(`.quicksort-button[onclick="switchTab('${tabId}')"]`);
//     if (activeButton) {
//         activeButton.classList.add("active");
//     }
// }

// //--------------------------------------------------- 初始化：info---------------------------------------
// document.addEventListener("DOMContentLoaded", () => {
//     switchTab("latest-news"); // 預設顯示館藏快速查詢
// });

// // 切換標籤內容函數
// function info_switchTab(tabId) {
//     // 隱藏所有內容
//     const allContents = document.querySelectorAll(".info-content");
//     allContents.forEach(content => {
//         content.classList.remove("active");
//         content.style.display = "none"; // 隱藏內容
//     });

//     // 移除所有按鈕的 active 樣式
//     const allButtons = document.querySelectorAll(".info-button");
//     allButtons.forEach(button => button.classList.remove("active"));

//     // 顯示選定的內容
//     const activeContent = document.getElementById(tabId);
//     if (activeContent) {
//         activeContent.classList.add("active");
//         activeContent.style.display = "block"; // 顯示內容
//     }

//     // 添加 active 樣式到相應的按鈕
//     const activeButton = document.querySelector(`.info-button[onclick="info_switchTab('${tabId}')"]`);
//     if (activeButton) {
//         activeButton.classList.add("active");
//     }
// }










// document.addEventListener("DOMContentLoaded", function () {
//     function switchTab(tabId) {
//         // 找到所有的按鈕和內容區塊
//         const allButtons = document.querySelectorAll(".tab-button");
//         const allContents = document.querySelectorAll(".tab-content");

//         // 移除所有按鈕和內容區塊的 active 樣式
//         allButtons.forEach(button => button.classList.remove("active"));
//         allContents.forEach(content => content.classList.remove("active"));

//         // 為當前選中的按鈕和內容區塊添加 active 樣式
//         document.querySelector(`.tab-button[onclick="switchTab('${tabId}')"]`).classList.add("active");
//         document.getElementById(tabId).classList.add("active");
//     }

//     // 頁面加載後，默認顯示「館藏快速查詢」和「最新消息」
//     switchTab('library-search');
//     switchTab('latest-news');
// });
