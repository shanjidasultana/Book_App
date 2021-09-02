const searchBook =()=>{
    const searchinput= document.getElementById('input-field');
    const searchValue= searchinput.value;


// ========searchbook by input value=========


    loading('block');
    searchinput.value="";
    status.textContent='';
    const url= `https://openlibrary.org/search.json?q=${searchValue}`;

    if (searchValue=='') {
        alert('please enter a valid book name');
    } else {
        loading ('block')
        fetch(url) 
        .then(res => res.json())
        .then(data =>getBooks(data.docs))

    };
   
};

// loading spinner=======

const loading=(displaystyle) =>{
  const spinner= document.getElementById('spinner').style.display=displaystyle;
    
};


const getBooks=(books)=>{
    // console.log(books);
    if (books.length == 0) {
       console.log('lll');
    }
    else{
        const status = document.getElementById('status');
 
        status.textContent=`Search-Result found: ${books.length}`;
       
    
        const searchResult=document.getElementById('result');
       
        searchResult.textContent="";
        books.forEach(book => {
            console.log(book);
            const div=document.createElement('div');
            div.classList.add('row');
            div.innerHTML=`
                <div onclick="bookDetail('${book.edition_key}')">
                    <div  class="col-md-6">
                        <img  src=https://covers.openlibrary.org/b/id/${book.cover_i ? book.cover_i:'not found'}-M.jpg >
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title"> Book-Title:${book.title}</h5>
                            <p class="card-text">Author-Name: ${book.author_name ? book.author_name:"Not Found"}</p>
                            <p class="card-text"><small class=" text-white">${book.first_publish_year}</small></p>
                         </div>
                    </div>
                </div>
                
            `;
            searchResult.appendChild(div);
            
            
        });
        loading('none');

    }
   
};
const bookDetail=(search)=>{
    const url= `https://openlibrary.org/search.json?q=${search}`;

        fetch(url) 
        .then(res => res.json())
        .then(data =>getBook(data.docs));

    };
    
const getBook=(eachBook)=>{
    const div3=document.getElementById("bookDetails");

    eachBook.forEach(book => {
        // console.log(book);
        const div4=document.createElement('div');
        
        div4.innerHTML=`
            
                <div  class="col-md-6">
                    <img  src=https://covers.openlibrary.org/b/id/${book.cover_i ? book.cover_i:'not found'}-M.jpg >
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h5 class="card-title"> Book-Title:${book.title}</h5>
                        <p class="card-text">Author-Name: ${book.author_name ? book.author_name:"Not Found"}</p>
                        <p class="card-text"><small class="text-muted">${book.first_publish_year}</small></p>
                     </div>
                </div>
            
            
        `;

        div3.appendChild(div4);
        
        
        
    });
   
};   
    
