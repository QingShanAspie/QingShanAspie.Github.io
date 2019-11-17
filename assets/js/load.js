function load() {
    setTimeout("loading.style.transition='opacity 0.3s'", 0);
    setTimeout("loading.style.opacity=0", 500);
    setTimeout("loading.style.display='none'", 800);
    setTimeout("body.style.display = 'block' ", 600);
}