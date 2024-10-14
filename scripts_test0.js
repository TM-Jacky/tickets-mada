function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.querySelector("main");
    
    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        mainContent.classList.remove("shift");
    } else {
        sidebar.classList.add("open");
        mainContent.classList.add("shift");
    }
}