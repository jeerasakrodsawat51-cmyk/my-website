document.addEventListener("DOMContentLoaded", () => {

  /* ===== เอฟเฟกต์ Fade-in ตอนเลื่อน ===== */
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => observer.observe(sec));

  /* ===== ข้อมูลรูปในแต่ละแฟ้ม ===== */
  const albums = {
    vr: [
      "788.jpg",
      "999_0.jpg",
      "998_0.jpg",
      "997_0.jpg",
      "977_0.jpg",
      "981_0.jpg",
      "995_0.jpg",
      "1000_0.jpg",
      "980_0.jpg",
      "979.jpg",
      
      
      
    ],
    meeting: [
      "785.jpg",
      "786.jpg",
      "992_0.jpg",
      "991_0.jpg",
      "990_0.jpg",
      "988_0.jpg",
      "993_0.jpg",
      "1001_0.jpg"
    ]

  };

  /* ===== อ้างอิง Element ===== */
  const modal = document.getElementById("albumModal");
  const albumImages = document.getElementById("albumImages");
  const closeBtn = document.getElementById("albumClose");

  /* ===== คลิกแฟ้มแล้วเปิดรูป ===== */
  document.querySelectorAll(".folder-card").forEach(folder => {
    folder.addEventListener("click", () => {

      const albumKey = folder.dataset.album;
      albumImages.innerHTML = "";

      albums[albumKey].forEach(img => {
        const image = document.createElement("img");
        image.src = img;
        albumImages.appendChild(image);
      });

      modal.style.display = "flex";
    });
  });

  /* ===== ปิดหน้ารูป ===== */
  closeBtn.onclick = () => modal.style.display = "none";

  modal.onclick = e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

});
