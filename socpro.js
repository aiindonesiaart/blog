// script.js

// Array of social proof data
const socialProofData = [
   {
    userName: "Nurul",
    productName: "Mockup Generator Gambar AI",
    productLink: "https://ratakan.com/cart/direct/202403201059496E862DE9FDABE21B6259?aff=bezimeni.id@gmail.com",
    productImage: "https://ratakan.com/uploads/prd-89ed7719e8.jpg"
  },
  {
    userName: "Sebastian",
    productName: "Character Generator Gambar AI",
    productLink: "https://ratakan.com/cart/direct/202404011209293D4FF43168331E7F15B3?aff=bezimeni.id@gmail.com",
    productImage: "https://ratakan.com/uploads/prd-14342c8582.jpg"
  },
  {
    userName: "Yuliana",
    productName: "Logo Generator Gambar AI",
    productLink: "https://ratakan.com/cart/direct/20240320102914947D6723405A3366BE9D?aff=bezimeni.id@gmail.com",
    productImage: "https://ratakan.com/uploads/prd-2b06068c1d.jpg"
  },
  {
    userName: "Patih",
    productName: "AI Untuk Pemasaran",
    productLink: "https://ratakan.com/cart/direct/20250130182559C4593FD3D03F0ADEAF52?aff=bezimeni.id@gmail.com",
    productImage: "https://ratakan.com/uploads/prd-6eeaa60c6d.png"
  },
   {
    userName: "Sugeng",
    productName: "Mahir Meta Ads",
    productLink: "https://ratakan.com/cart/direct/20250211110226E588EDC460D9BD60F946?aff=bezimeni.id@gmail.com",
    productImage: "https://ratakan.com/uploads/prd-9e3cda7e17.png"
  },
   {
    userName: "Masno",
    productName: "Gampang Bikin Ebook Pakai Hape",
    productLink: "https://ratakan.com/cart/direct/20250131112150A33F83BC6DF021F17A71?aff=bezimeni.id@gmail.com",
    productImage: "https://ratakan.com/uploads/prd-78af3f96c7.png"
  },
   {
    userName: "Didik",
    productName: "Prompt Generator Ai Tool (Bundling Product)",
    productLink: "https://ratakan.com/cart/direct/2024032211201909746BB8E08CCC0E85C8?aff=bezimeni.id@gmail.com",
    productImage: "https://ratakan.com/uploads/prd-49a4d9cef3.jpg"
  },
   {
    userName: "Azmi",
    productName: "Raja Prompt dan Panduan Gambar AI",
    productLink: "https://ratakan.com/cart/direct/202402261156470A0FC508C1060A360216?aff=bezimeni.id@gmail.com",
    productImage: "https://ratakan.com/uploads/prd-49ece041a6.jpg"
  },
  {
    userName: "Supriatinu",
    productName: "AI Untuk Pemasaran",
    productLink: "https://ratakan.com/cart/direct/20250130182559C4593FD3D03F0ADEAF52?aff=bezimeni.id@gmail.com",
    productImage: "https://ratakan.com/uploads/prd-6eeaa60c6d.png"
  },
  {
    userName: "Enok",
    productName: "Kursus Online Gambar AI",
    productLink: "https://ratakan.com/cart/direct/202404091749138437B92A72B9620F449B?aff=bezimeni.id@gmail.com",
    productImage: "https://ratakan.com/uploads/prd-8d7f39d27f.jpg"
  },
  {
    userName: "Agus",
    productName: "Prompt Generator Gambar AI",
    productLink: "https://ratakan.com/cart/direct/20240311132703B5F989D27C3843E729A3?aff=bezimeni.id@gmail.com",
    productImage: "https://ratakan.com/uploads/prd-e4c6a0fdb3.jpg"
  }
];

// DOM Elements
const notificationContainer = document.getElementById("social-proof-notification");
const productImage = document.getElementById("product-image");
const userName = document.getElementById("user-name");
const productLink = document.getElementById("product-link");

let currentIndex = 0;

// Function to update the notification content
function updateNotification() {
  const currentData = socialProofData[currentIndex];
  productImage.src = currentData.productImage;
  userName.textContent = currentData.userName;
  productLink.textContent = currentData.productName;
  productLink.href = currentData.productLink;

  // Show the notification
  notificationContainer.classList.remove("hidden");

  // Hide the notification after 5 seconds
  setTimeout(() => {
    notificationContainer.classList.add("hidden");
  }, 5000);

  // Move to the next notification
  currentIndex = (currentIndex + 1) % socialProofData.length;
}

// Start the notification cycle
setInterval(updateNotification, 6000); // Change every 6 seconds
