document.getElementById('entertainment').addEventListener("click",function () {
	getNews("entertainment");
});
document.getElementById('science').addEventListener("click",function()
	{
		getNews("science");
	});
document.getElementById('sports').addEventListener("click",function () {
	getNews("sports");
});
document.getElementById('business').addEventListener("click",function(){
	getNews("business");
});
document.getElementById('popular').addEventListener("click",getNewsO);
document.addEventListener("DOMContentLoaded",getNewsO);

const headerText=document.getElementById('heading');

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function getNews(category) {
	const heading=capitalizeFirstLetter(category);
	headerText.innerHTML=heading;
	let newsContainer=document.getElementById('bodyNews');
	newsContainer.innerHTML="";
	const xhr= new XMLHttpRequest();
	var url = 'https://newsapi.org/v2/top-headlines?' +
	          'country=in&category=' + category +
	          '&apiKey=9ad299f940c94a938272d3c3b5d94363';
	xhr.open("GET",url,true);
	xhr.onerror=function() {
		console.log("Something went wrong!");
	}
	xhr.onprogress=function () {
		newsContainer.innerHTML="center><img src='loading.gif'></center>";
	}
	xhr.onload=function(){
		if(this.status==200)
		{
			let response= JSON.parse(this.responseText);
			if(response.status=='ok')
			{
				let arg=response.articles;
				console.log(arg);
				let output='';
				let i=0;
				while(i<response.totalResults-1)
				{
					output+=`<div class="card-deck">
								<div class="card mb-3 " style="width: 28rem;">
								  <img class="card-img-top" src="${arg[i].urlToImage}" alt="Sorry, No Image Here">
								  <div class="card-body">
								    <h5 class="card-title">${arg[i].title}</h5>
								    <p class="card-text">${arg[i].description}</p>
								    <p class="card-text"><small class="text-muted">Published By:${arg[i].author} </small></p>
								    <a href="${arg[i].url}" class="btn btn-primary">Click For Full Article</a>
								  </div>
								</div>`;
					i++;
					output+=`<div class="card mb-3 " style="width: 28rem;">
								  <img class="card-img-top" src="${arg[i].urlToImage}" alt="Sorry, No Image Here">
								  <div class="card-body">
								    <h5 class="card-title">${arg[i].title}</h5>
								    <p class="card-text">${arg[i].description}</p>
								    <p class="card-text"><small class="text-muted">Published By:${arg[i].author} </small></p>
								    <a href="${arg[i].url}" class="btn btn-primary">Click For Full Article</a>
								  </div>
								</div></div>`;
					i++;
				}

				newsContainer.innerHTML=output;



			}
		}
	}
	xhr.send();
}

function getNewsO() {
	headerText.innerHTML="News App";
	let newsContainer=document.getElementById('bodyNews');
	newsContainer.innerHTML="";
	const xhr= new XMLHttpRequest();
	var url = 'https://newsapi.org/v2/top-headlines?' +
	          'country=in&' +
	          'apiKey=9ad299f940c94a938272d3c3b5d94363';
	xhr.open("GET",url,true);
	xhr.onerror=function() {
		console.log("Something went wrong!");
	}
	xhr.onprogress=function () {
		newsContainer.innerHTML="<center><img src='loading.gif'></center>";
	}
	xhr.onload=function(){
		if(this.status==200)
		{
			let response= JSON.parse(this.responseText);
			if(response.status=='ok')
			{
				let arg=response.articles;
				let output='';
				let i=0;
				while(i<response.totalResults-1)
				{
					output+=`<div class="card-deck">
								<div class="card mb-3 " style="width: 28rem;">
								  <img class="card-img-top" src="${arg[i].urlToImage}" alt="Sorry, No Image Here">
								  <div class="card-body">
								    <h5 class="card-title">${arg[i].title}</h5>
								    <p class="card-text">${arg[i].description}</p>
								    <p class="card-text"><small class="text-muted">Published By:${arg[i].author} </small></p>
								    <a href="${arg[i].url}" class="btn btn-primary">Click For Full Article</a>
								  </div>
								</div>`;
					i++;
					output+=`<div class="card mb-3 " style="width: 28rem;">
								  <img class="card-img-top" src="${arg[i].urlToImage}" alt="Sorry, No Image Here">
								  <div class="card-body">
								    <h5 class="card-title">${arg[i].title}</h5>
								    <p class="card-text">${arg[i].description}</p>
								    <p class="card-text"><small class="text-muted">Published By:${arg[i].author} </small></p>
								    <a href="${arg[i].url}" class="btn btn-primary">Click For Full Article</a>
								  </div>
								</div></div>`;
					i++;
				}
				newsContainer.innerHTML=output;



			}
		}
	}
	xhr.send();
}