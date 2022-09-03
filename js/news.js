const loadAllNewsCat = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    return (data.data.news_category);

}