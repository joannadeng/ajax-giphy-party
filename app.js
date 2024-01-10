console.log("Let's get this party started!");

const form = document.querySelector('form');
const input = document.querySelector('input')
const gifDiv = document.querySelector('#gif');
const btn = document.querySelector('#remove')
const api_key = 'NxeD2W1gbv9Fy0Xm7PgS5uk1SqMCSo97';


async function searchGif(q,api_key){
    const res = await axios.get('http://api.giphy.com/v1/gifs/search',{params:{q,api_key}});
    return res.data.data[0].images.original.url;
}
// searchGif('hilarious',api_key)


form.addEventListener('submit', async function(e){
    e.preventDefault();
    await createImg();
    
})

 async function createImg(){
    const img = document.createElement('img');
    img.src = await searchGif(input.value, api_key);
    const imgDiv = document.createElement('div');
    imgDiv.append(img);
    gifDiv.append(imgDiv);
    input.value = '';
}



btn.addEventListener('click',function(e){
    e.preventDefault();
    gifDiv.innerHTML = '';
})