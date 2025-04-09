// تغيير اللغة من الإنجليزية إلى العربية والعكس
document.getElementById("langBtn").addEventListener("click", function () {
    const currentLang = document.documentElement.lang;
    if (currentLang === "en") {
        window.location.href = "ar.html";
    } else {
        window.location.href = "index.html";
    }
});

// زر العودة لأعلى الصفحة
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.id = "scrollTopBtn";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.fontSize = "18px";
scrollBtn.style.backgroundColor = "#283E51";
scrollBtn.style.color = "#fff";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "5px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";
document.body.appendChild(scrollBtn);

// عرض الزر فقط عند النزول
window.onscroll = () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// عند الضغط عليه، يرجع لأعلى
scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};











