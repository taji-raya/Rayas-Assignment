
//fetch the data from the website
fetch('https://jsonplaceholder.typicode.com/posts')
        //fetch returns a promise. if a promise is fulfilled, then:
        .then((data) => {
    //everything in the api is going to be stored here
    //and whatever i got, i want to turn it into json format

    return data.json();

})
    //whatever i turned into json, i want to save it here (in completeData)
    .then((completeData) => {
        //to display api data into my cards:
        let data1 = "";
        //using map method, ill access the data from the api 
        //it takes 3 arguments: 1 is the current value, 2 is index number and 3 is the array we're working on
        //instead of having a card container in the html file, we create it in the js so it creates a new card everytime
        //we add new data
        completeData.map((values) => {
            data1 += `
                <div class='card' >
                    <div class='cardContent' >
                        <h1 class="dataTitle">Title:  ${values.title}</h1>
                        <br>
                        <p class="dataBody">${values.body}</p>
                       
                    </div>
                </div>`

        });
        document.getElementById("dataContainer").innerHTML = data1;
    });
    document.getElementById("addPost").addEventListener('submit', addPost);
    document.getElementById("editPost").addEventListener('submit', editPost);


function addPost(e) {
    e.preventDefault(); //prevents it from submetting to an actual file

    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        //action were doing: POSTING
        method: 'POST',
        headers: {
            'Accept': 'application/json; charset=UTF-8',
            'Content-type': 'application/json'
        },
        //where we apply data
        body: JSON.stringify({
            title: title,
            body: body,
        }),
        
    })
        .then((response) => response.json())
        .then((json) => {
            let data2 = " ";
            json.forEach(function(post){
                data2 = `
                    <div class='card' >
                        <div class='cardContent' >
                            <h1 class="dataTitle">Title:  ${values.title}</h1>
                            <br>
                            <p class="dataBody">${values.body}</p>
                           
                        </div>
                    </div>`
    
                
            });
            document.getElementById("dataContainer").innerHTML = data2;
            });
            
    
}

function editPost(e){
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    
    title: title,
    body: body,
    
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    let data3 = " ";
    json.forEach(function(post){
        data3 = `
            <div class='card' onclick="cardInfo()">
                <div class='cardContent' >
                    <h1 class="dataTitle">Title:  ${values.title}</h1>
                    <br>
                    <p class="dataBody">${values.body}</p>
                   
                </div>
            </div>`

        
    });
    document.getElementById("dataContainer").innerHTML = data3;
    });

}

function cardInfo(){
    console.log("Pass")
}
