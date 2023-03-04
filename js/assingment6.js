const losdTools = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayToolss(data.data.tools);
}


 const displayToolss = data =>{
    const toolssContainer = document.getElementById('tools-container'); 
    // display 6 tools only
       data = data.slice(0,12);    
    
    data.forEach(tools =>{
        const toolsDiv = document.createElement('div');
        toolsDiv.classList.add('col');
        toolsDiv.innerHTML = `
        <div class="card h-100">
            <img src="${tools.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p class="card-text">                
                1. Natural language processing
                <br>
                2. Contextual understanding
                <br>3. Text generation</p>
                <hr>
                <div class="d-flex">
                    <div class="w-100">
                      <h4>${tools.name}</h4>
                      <p class="text-secondary"><i class="fa-regular fa-calendar-days"></i>  11/01/2022</p>
                    </div>
                    
                    <button onclick="loadToolsDetails" href="#" class="
                    border border-0 rounded-circle bg-white" data-bs-toggle="modal" data-bs-target="#toolsDetailModal"><i class="fa-solid fa-arrow-right bg-danger-subtle text-warning p-2 rounded-circle"></i></button>

                </div>                                        
            </div>
                 
        </div>        
        `;       
        toolssContainer.appendChild(toolsDiv);
        
     });
 }

// show all
document.getElementById('btn-show-all').addEventListener('click', function(){
    toggleSpinner(true);
    const onclick = document.getElementById('show-all');
    const searhClick = onclick.ariaValueMax;
    losdTools(searhClick);
})


const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-non')
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

losdTools();