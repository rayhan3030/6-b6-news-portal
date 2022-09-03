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

const displayNews = newses => {
    // console.log(news)

    const newsDiv = document.getElementById('news-div');

    newsDiv.textContent = '';
    for (news of newses) {
        console.log(news)
        const counterDiv = document.getElementById('counter')
        counterDiv.innerText = `Total News Loaded :${newses.length}`


        const newDiv = document.createElement('div')
        newDiv.classList.add('card')
        newDiv.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl w-3/4 border  flex-col md:flex-row md:ml-40 ml-10 mt-5">
                <figure><img class="w-44" src="${news.thumbnail_url}" alt="Movie"></figure>
                <div class="card-body">
                    <h2 class="card-title">${news.title}</h2>
                    <p>${news.details.slice(0, 200)}...</p>
                    <div class="md:flex md:flex-row flex-col">
                    <p><img class="w-10 rounded-full" src="${news.author.img}" alt="">${news.author.name}</p>
                    <p>Total Views: ${news.total_view}</p>
                        
                        <a onclick="loadNewsDetails('${news._id}')" href="#my-modal-2" class="btn">Details</a>
                    </div>
                </div>
            </div>
        `;
        newsDiv.appendChild(newDiv);


    }



    // stop loader
}


const loadNewsDetails = async _id => {
    const url = `https://openapi.programming-hero.com/api/news/${_id}`;
    const res = await fetch(url);
    const data = await res.json();
    detailsNews(data.data);
}

const detailsNews = news => {
    console.log(news)
    const modalDiv = document.getElementById('my-modal-2')
    modalDiv.classList.add('modal')
    modalDiv.innerHTML = `
        <div class="modal-box">
        <figure><img class="" src="${news[0].image_url}" alt="Movie"></figure>
        <h3 class="font-bold text-lg">${news[0].title}!</h3>
        <p class="py-4">${news[0].details}!</p>
        <p><img class="w-10 rounded-full" src="${news[0].author.img}" alt="">${news[0].author.name}</p>
        <p>Publish Date : ${news[0].author.published_date}</p>
        <div class="modal-action">
            <a href="#" class="btn">Close!</a>
        </div>
    </div>
        `;


    // modalDiv.appendChild(newModalDiv)

}



setAllCat();

// loadAllNews ()