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
    // for (const newscat of data) {
    //     // console.log(newscat.category_name)
    ;
    // toggleSpinner(true)
    // const toggleSpinner = isLoading => {
    //     const loaderSection = document.getElementById('loader');
    //     if (isLoading === true) {
    //         loaderSection.classList.remove('invisible')
    //     }
    // }


}
const newsClick = (category_id) => {
    //https://openapi.programming-hero.com/api/news/category/{category_id}
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    // console.log('got news id', id)
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data))
}