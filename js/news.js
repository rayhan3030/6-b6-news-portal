const loadAllNewsCat = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    return (data.data.news_category);

}

const setAllCat = async () => {
    const data = await loadAllNewsCat();
    const menu = document.getElementById('all-menu')
    const allCats = await loadAllNewsCat();
    // console.log(allCats)
    data.forEach(newscat => {
        const li = document.createElement('li');
        li.innerHTML = `<a onclick="'toggleSpinner(true)', newsClick('${newscat.category_id}')">${newscat.category_name}</a>`;
        menu.appendChild(li);

    });