export class GameUi
{

     async getData(category) {
        let data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'd07694fbf7msh38011a983ae72efp14decejsndd5b2ca42fbe',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        });
        let result = await data.json();
        display(result);
        console.log(result);
    
        let box = document.querySelectorAll('.box');
        for (let i = 0; i < box.length; i++) {
            box[i].addEventListener('click', function () {
                document.querySelector('.home').classList.replace('d-block', 'd-none');
                document.querySelector('.details').classList.replace('d-none', 'd-block');
                getGameDetails(result[i].id);
    
            })
        }
    
    }


     display(result) 
{
        let temp = ``;
        for (let i = 0; i < result.length; i++) {
    
            temp += `  <div class="box col-lg-4 col-md-6 col-sm-12 col-xxl-3 pt-3 pb-2">
            <div class="inner p-3 pb-0 m-0 rounded-2">
            <img class="w-100 rounded-2" src="${result[i].thumbnail}" alt="">
            <div class="title d-flex align-items-center justify-content-between py-3">
            <h2 class=" h6 text-white ">${result[i].title}</h2>
            <span class="free text-white py-1 px-2 rounded-1">Free</span>
            
            </div>
            <h3 class="text-center overflow-x-hidden w-100 py-2">${result[i].short_description.split(',', 10).join()}</h3>
            <div class="pc d-flex justify-content-between align-items-center">
            <h4 class="px-2 py-1 rounded-1">MMORPG</h4>
            <h4 class="px-2 py-1 rounded-1">PC (Windows)</h4>
            </div>
            
            
            </div>
            </div>`;
    
    
        }
    
        document.querySelector('section').innerHTML = temp;
    }



    
}