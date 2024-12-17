var keywordInput = document.getElementById("keyword")
var engine;

engine = "baidu"

searchEngine.addEventListener('change', () => {
    // 获取当前选中项的值
    const selectedValue = searchEngine.value;

    // 更新页面显示，设置变量
    console.log(selectedValue)
    engine = selectedValue
    console.log(engine)
});

function search(keyword) {
    keyword = keywordInput.value;

    if (engine == "baidu") {
        window.open("https://www.baidu.com/s?&wd=" + keyword, "_blank")
    };
    if (engine == "sogou") {
        window.open("https://sogou.com/web?query=" + keyword, "_blank")
    };
    if (engine == "so") {
        window.open("https://www.so.com/s?q=" + keyword, "_blank")
    };
    if (engine == "chinaso") {
        window.open("https://www.chinaso.com/newssearch/all/allResults?q=" + keyword, "_blank")
    };
    if (engine == "toutiao") {
        window.open("https://so.toutiao.com/search?dvpf=pc&source=trending_card&keyword=" + keyword, "_blank")
    };

    if (engine == "google") {
        window.open("https://www.google.com/search?q=" + keyword, "_blank")
    };
    if (engine == "bing") {
        window.open("https://www.bing.com/search?q=" + keyword, "_blank")
    };
    if (engine == "yandex") {
        window.open("https://yandex.com/search/?text=" + keyword, "_blank")
    };
    if (engine == "duckduckgo") {
        window.open("https://duckduckgo.com/?q=" + keyword, "_blank")
    };
    if (engine == "ask") {
        window.open("https://www.ask.com/web?q=" + keyword, "_blank")
    };
}