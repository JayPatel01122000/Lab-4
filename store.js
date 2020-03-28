//JavaScript Document

//access the JSON file using XHR object
let requestURL = 'https://jaypatel01122000.github.io/Lab-4/store.json';

//function to access the information and callback
function storeInformation(url, callback) {
    //Create new XHR object, XHR object allows us to fetch data without a page referesh
    let request = new XMLHttpRequest();
    //opening a new request
    request.open('GET', requestURL);

    request.responseType = 'json';
    //send the request using the send method
    request.send();

    request.onload = function() {
        callback(request.response);
    }
}
//create a jsonobject and build html elements
function Information(jsonObj) {
    let StoreInformation = jsonObj.StoreInformation;
    let section = document.querySelector('section');
    for (let i = 0; i < StoreInformation.length; i++) {
        //build html elements
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');

        img.setAttribute('src', 'https://jaypatel01122000.github.io/Lab-4/Image/' + StoreInformation[i].image);
        img.setAttribute('alt', StoreInformation[i].image);
        h2.textContent = StoreInformation[i].productName;
        p1.textContent = 'price' + StoreInformation[i].price;
        p2.textContent = 'details' + StoreInformation[i].details;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        section.appendChild(article);
    }
}

storeInformation('https://jaypatel01122000.github.io/Lab-4/store.json', Information);
