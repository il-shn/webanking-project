  
window.onload = function(){

    // const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    
    // // Get CurrencyList (Create account)

    // const reqestCurrencyListURL = '/main/api/currency'

    // function sendGetRequest(method,url) {
    //     return new Promise((resolve,reject)=>{
    //         const xhr = new XMLHttpRequest()

    //         xhr.open(method, url)
    //         xhr.responseType = 'json'
    //         xhr.setRequestHeader('X-XSRF-TOKEN', csrfToken);
    //         xhr.onload = () => {
    //             if (xhr.status>=400) {
    //                 reject('Помилка: ' + xhr.status)
    //             } else {
    //                 resolve(xhr.response)
    //             }
    //         }
    //         xhr.onerror = () => {
    //             reject (xhr.response);
    //         }
    //         xhr.send()
    //     })
    // }
    
    // let currencyList = document.querySelector('.currencyList');
    // sendGetRequest('GET', reqestCurrencyListURL)
    // .then(data => {
    //     let currencyItems = data.data;
    //     if (currencyItems.length > 0) {
    //         currencyItems.forEach(item => {
    //             let option = document.createElement('option');
    //             option.textContent = item;
    //             option.value = item;
    //             currencyList.appendChild(option);
    //         });
    //     } else {
    //         console.log('No available currency');
    //     }
    // })
    // .catch(err => console.log(err))

    // // ================================
    
    
    
    
    // // Post Currency option (Create account) 

    // function sendPostRequest(method,url,body=null) {
    //     return new Promise((resolve,reject)=>{
    //         const xhr = new XMLHttpRequest()

    //         xhr.open(method, url)
    //         xhr.responseType = 'json'
    //         xhr.setRequestHeader('Content-type', 'application/json')
    //         xhr.setRequestHeader('X-XSRF-TOKEN', csrfToken);
    //         xhr.onload = () => {
    //             if (xhr.status>=400) {
    //                 reject(xhr.response)
    //             } else {
    //                 resolve(xhr.response)
    //             }
    //         }
    //         xhr.onerror = () => {
    //             reject (xhr.response);
    //         }
    //         xhr.send(JSON.stringify(body))
    //     })
    // }
    
    // document.getElementById('currencyForm').addEventListener('submit', function(e) {
    //     e.preventDefault()
    //     const selectedOption = currencyList.options[selectElement.selectedIndex];
    //     const selectedText = selectedOption.text;
          
    //     sendPostRequest('POST', '/main/api/createAccount', {
    //         "currencyName": selectedText })
    //         .then(response => {
    //             console.log('Успішна відповідь:', response);
    //             profileGetRequest()
    //             alert(`Account with ${selectedText} currency has created successfully`);
    //         })
    //         .catch(error => {
    //             console.error('Помилка:', error);
    //             alert('Account with this currency has been created')
    //         });
    // });    


    // // ================================


    // // Get Profile data

        // fetch('https://moneyguard-fc72823844dd.herokuapp.com/main/api/profile')
    //   .then(response => response.json())
    //   .then(json => console.log(json))


        
        // let helmetImgSrc = document.querySelector('.helmetImg').src

        // fetch('https://moneyguard-fc72823844dd.herokuapp.com/main/api/profile', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'X-XSRF-TOKEN': csrfToken
        //     }
        // })
        
        //     .then(response=>{
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json()
        //     })
        //     .then(data => {
        //         if (data.success = true) {
        //             console.log(data.message);
        //             let profileList = document.querySelector('#profileList');

        //             // let profileItems = data;
        //             // if (profileItems.length > 0) {
        //             //     console.log(data);
        //             //     profileList.innerHTML = '';
        //             //     data.forEach(item => {
        //             //         profileList.innerHTML += `<li>${item}</li>`;
        //             //     });                
        //             // }

        //             switch (data.titul.name) {
        //                 case "ADMIN":
        //                     helmetImgSrc = '/helmet9.png'
        //                     break;
        //                 case "HERALD":
        //                     helmetImgSrc = '/helmet1.png'
        //                     break;
        //                 case "GUARDIAN":
        //                     helmetImgSrc = '/helmet2.png'
        //                     break;
        //                 case "CRUSADER":
        //                     helmetImgSrc = '/helmet3.png'
        //                     break;
        //                 case "ARCHON":
        //                     helmetImgSrc = '/helmet4.png'
        //                     break;
        //                 case "LEGEND":
        //                     helmetImgSrc = '/helmet5.png'
        //                     break;
        //                 case "ANCIENT":
        //                     helmetImgSrc = '/helmet6.png'
        //                     break;
        //                 case "DIVINE":
        //                     helmetImgSrc = '/helmet7.png'
        //                     break;
        //                 case "IMMORTAL":
        //                     helmetImgSrc = '/helmet8.png'
        //                     break;
                            
        //                     default:
        //                     helmetImgSrc = '/helmet10.png'
        //                     break;
        //             }
        //             let helmetImgSrc = document.querySelector('.helmetImg').src
        //             helmetImgSrc = '/helmet1.png'
        //             const profileCard = `
        //                 <div>
        //                     <h2>Profile info</h2>
        //                     <p><strong>First name:</strong> ${data.firstName}</p>
        //                     <p><strong>Last Name:</strong> ${data.secondName}</p>
        //                     <p><strong>Date of birth:</strong> ${data.dateOfBirth}</p>
        //                     <p><strong>Phone number:</strong> ${data.phoneNumber}</p>
        //                     <p><strong>Email:</strong> ${data.email}</p>
        //                     <p><strong>Titul name:</strong> ${data.titul.name}</p>
        //                     <p><strong>Limit for service:</strong> ${data.titul.limitForService}</p>
        //                     <p><strong>Cashback:</strong> ${data.cashBackInUSD}</p>
        //                     <p><strong>IBAN:</strong> ${data.iban}</p>
        //                 </div>
        //             `;   
    
        //             profileList.innerHTML = profileCard;     
    
        //         } else {
        //             console.log('data.success != true');
        //         }
        //     })
        //     .catch(err => console.log(err))
    // 

    // //  ================================


    // // Replenishment

    // const selectElement = document.getElementById("replenishSelect");
    // const selectedOption = selectElement.options[selectElement.selectedIndex];
    // const selectedText = selectedOption.text;

    // fetch('/main/api/cheatingAccountReplenishment', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'X-XSRF-TOKEN': csrfToken
    //     },
    //     body: JSON.stringify({
    //         "currencyName": selectedText
    //     })
    // })
    // .then(response => {
    //     if (response.ok) {
    //         console.log(data.success);
    //         alert(data.message)
    //     } else {
    //         return response.text().then(text => {
    //             throw new Error(text || 'Error');
    //         });
    //     }
    // })
    // .catch(error => {
    //     alert('Error: ' + error.message);
    //     console.log(data.success);
    // });


    // // ================================
    


    // // Get Exchange Rates


    // fetch('/main/api/exchangeRates', {
    //     method: 'GET',
    //     headers: {
    //         'X-XSRF-TOKEN': csrfToken
    //     }   
    // })
    // .then(response => {
    //     if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     if (data.success=true) {
    //         console.log('data.success=true');
    //         alert(data.message)

    //         const currencies = data.data;
    //         const currencyContainer = document.getElementById('currencyContainer');
            
    //         currencies.forEach(currency => {
    //             const currencyBlock = document.createElement('div');
    //             currencyBlock.classList.add('currency');
                
    //             currencyBlock.innerHTML = `
    //             <h4>${currency.shortName}</h4>
    //             <div>Sell Rate: ${currency.sellRate}</div>
    //             <div>Buy Rate: ${currency.buyRate}</div>
    //             `;
    //             currencyContainer.appendChild(currencyBlock);
    //         });
    //     } else {
    //         console.log('data.success!=true');
    //         alert('Error')
    //     }
    // })
    // .catch(error => {
    //     console.error('There was a problem with the fetch operation:', error);
    // });    
    



    // // Пагінація аккаунтів

    //     loadPages();
    //     loadData(0);
    
    
    // function loadPages() {
    //     fetch('/admin/count')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             const pageCount = data.data.totalPages;
    //             const pagesContainer = document.getElementById('pages');
    
    //             for (let i = 0; i < pageCount; i++) {
    //                 const pageLink = document.createElement('a');
    //                 pageLink.classList.add('page-link');
    //                 pageLink.id = i;
    //                 pageLink.textContent = 'Page ' + (i + 1);
    
    //                 const listItem = document.createElement('li');
    //                 listItem.classList.add('page-item');
    //                 listItem.appendChild(pageLink);
    
    //                 pagesContainer.appendChild(listItem);
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Failed to load pages:', error);
    //         });
    
    //     document.getElementById('pages').addEventListener('click', function(event) {
    //         if (event.target.classList.contains('page-link')) {
    //             loadData(event.target.id);
    //         }
    //     });
    // }
    
    // function loadData(page) {
    //     const dataContainer = document.getElementById('data');
    //     dataContainer.innerHTML = ''; 
    
    //     fetch('/admin/geo?page=' + page)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             data.data.content.forEach(item => {
    //                 const row = document.createElement('tr');
    //                 row.innerHTML = `
    //                     <td>${item.cardIds[0].cardNumber}</td>
    //                     <td>${item.cardIds[0].ownerName}</td>
    //                     <td>${item.amountOfMoney}</td>
    //                     <td>${item.currencyName}</td>
    //                 `;
    //                 dataContainer.appendChild(row);
    //             });
    //         })
    //         .catch(error => {
    //             console.error('Failed to load data:', error);
    //         });
    // }
    
    // //ПАгінація транзакцій
    // document.addEventListener('DOMContentLoaded', function() {
    //     loadPages();
    //     loadData(0);
    // });
    
    // function loadPages() {
    //     fetch('/main/api/transaction/{0}')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             const pageCount = data.data.totalPages;
    //             const pagesContainer = document.getElementById('pagination');
    
    //             for (let i = 0; i < pageCount; i++) {
    //                 const pageLink = document.createElement('a');
    //                 pageLink.classList.add('page-link');
    //                 pageLink.id = i;
    //                 pageLink.textContent = 'Page ' + (i + 1);
    
    //                 const listItem = document.createElement('li');
    //                 listItem.classList.add('page-item');
    //                 listItem.appendChild(pageLink);
    
    //                 pagesContainer.appendChild(listItem);
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Failed to load pages:', error);
    //         });
    
    //     document.getElementById('pagination').addEventListener('click', function(event) {
    //         if (event.target.classList.contains('page-link')) {
    //             loadData(event.target.id);
    //         }
    //     });
    // }
    
    // function loadData(page) {
    //     const dataContainer = document.getElementById('accountList');
    //     dataContainer.innerHTML = ''; 
    
    //     fetch(`/main/api/transaction/{0}`)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             data.data.content.forEach(transaction => {
    //                 const listItem = document.createElement('li');
    //                 listItem.classList.add('list-group-item');
    //                 listItem.innerHTML = `
    //                     <p>Date/Time: ${transaction.dateTimeOfTransaction}</p>
    //                     <p>Name: ${transaction.nameOfTransaction}</p>
    //                     <p>From: ${transaction.fromCardNumber}</p>
    //                     <p>To: ${transaction.toCardNumber}</p>
    //                     <p>Amount: ${transaction.howMuch}</p>
    //                 `;
    //                 dataContainer.appendChild(listItem);
    //             });
    //         })
    //         .catch(error => {
    //             console.error('Failed to load data:', error);
    //         });
    // }


    // //Вакантний get

    // fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //     method: 'GET',
    //     headers: {
    //         // 'Content-Type': 'application/json',
    //         'X-XSRF-TOKEN': csrfToken
    //     },
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     return response.json()
    // })
    // .then(data => {
        
    // })
    // .catch(error => {
    //     alert('Помилка: ' + error.message);
    // });



    //==========================================================================

    //==========================================================================

    //==========================================================================


    /////////////
    ////TEST/////!!!!!!!!!!!!
    /////////////

    // let data = {
    //     "success": true,
    //     "message": "",
    //     "data": [
    //     "CHF", "MXN", "ZAR", "TND", "XAU", "VND", "AUD", "ILS", "MDL", "IDR", "AMD", "TRY", "LBP", "TJS", "IQD", "TWD", "AED", 
    //     "HKD", "RSD", "EUR", "DOP", "DKK", "MYR", "BGN", "NOK", "GEL", "RON", "MAD", "AZN", "CZK", "PKR", "SEK", "KZT", "SAR", 
    //     "IRR", "INR", "XPD", "THB", "CNY", "UZS", "KRW", "JPY", "PLN", "BDT", "GBP", "BYN", "LYD", "HUF", "XPT", "RUB", "XDR", 
    //     "USD", "DZD", "EGP", "SGD", "KGS", "NZD", "TMT", "BRL", "XAG"
    //     ]
    // }

    // let currencyItems = data.data;

    // let currencyList = document.querySelector('.currencyList');

    // if (currencyItems.length > 0) {
    //     currencyItems.forEach(item => {
    //         let option = document.createElement('option');
    //         option.textContent = item;
    //         option.value = item;
    //         currencyList.appendChild(option);
    //     });
    // } else {
    //     console.log('No available currency');
    // }

    // currencyList.addEventListener('change', function() {
    //     let selectedValue = this.value;
    //     sendPostRequest('POST', 'https://jsonplaceholder.typicode.com/posts', { selectedValue })
    //         .then(response => {
    //             console.log('Успішна відповідь:', response);
    //             alert(`Account with ${this.value} currency has created`);
    //             window.location.href = '/html/profile.html'
    //         })
    //         .catch(error => {
    //             console.error('Помилка:', error);
    //         });
    // });    




    // /////////////
    // ////TEST/////!!!!!!!!!!!!!!!!
    // /////////////
    // let responseCurrency = {
    //     "success": true,
    //     "message": "Retrieved top three currency rates",
    //     "data": [
    //       {
    //         "rateId": 1,
    //         "shortName": "USD",
    //         "fullName": "United States Dollar",
    //         "sellRate": 1.1000,
    //         "buyRate": 1.0800
    //       },
    //       {
    //         "rateId": 2,
    //         "shortName": "EUR",
    //         "fullName": "Euro",
    //         "sellRate": 1.2000,
    //         "buyRate": 1.1700
    //       },
    //       {
    //         "rateId": 3,
    //         "shortName": "GBP",
    //         "fullName": "British Pound",
    //         "sellRate": 1.3000,
    //         "buyRate": 1.2800
    //       }
    //     ]
    //   }
    //     console.log(responseCurrency.success);

    //     const currencies = responseCurrency.data;
    //     console.log(currencies);
    //     const currencyContainer = document.querySelector('#currencyContainer');
        
    //     currencies.forEach(currency => {
    //         const currencyBlock = document.createElement('div');
    //         currencyBlock.classList.add('currency');
    //         currencyContainer.appendChild(currencyBlock);
            
    //       console.log(currency);
    //       currencyBlock.innerHTML = `
    //         <h4>${currency.shortName}</h4>
    //         <div>Sell Rate: ${currency.sellRate}</div>
    //         <div>Buy Rate: ${currency.buyRate}</div>
    //       `;
    //     });
      
      


    // /////////////
    // ////TEST/////!!!!!!!!!!!!!!!! PAGINATION ACCOUNTS
    // /////////////

    // let response = {
    //     "success": true,
    //     "message": "",
    //     "data": {
    //       "content": [
    //         {
    //           "cardIds": [
    //             {
    //               "validity": "2024-12-31T23:59:59",
    //               "cvv": 123,
    //               "ownerName": "John Doe",
    //               "cardNumber": "1234-5678-9101-1121"
    //             },
    //             {
    //               "validity": "2025-11-30T23:59:59",
    //               "cvv": 456,
    //               "ownerName": "Jane Smith",
    //               "cardNumber": "1223-4567-8910-1112"
    //             }
    //           ],
    //           "amountOfMoney": 1500.00,
    //           "currencyName": "USD"
    //         }
    //       ],
    //       "pageable": {
    //         "pageSize": 10,
    //         "pageNumber": 0,
    //         "offset": 0,
    //         "unpaged": false,
    //         "paged": true
    //       },
    //       "totalElements": 1,
    //       "totalPages": 1,
    //       "last": true,
    //       "size": 10,
    //       "number": 0,
    //       "sort": {
    //         "sorted": false,
    //         "unsorted": true,
    //         "empty": true
    //       },
    //       "numberOfElements": 1,
    //       "first": true,
    //       "empty": false
    //     }
    // }
    
    //     loadPages(response);
    //     loadData(response, 0);
    
    
    // function loadPages(response) {
    //     const pageCounts = response.data.totalPages;
    //     const pageContainer = document.getElementById('pages');
    
    //     for (let i = 0; i < pageCounts; i++) {
    //         const pageLink = document.createElement('a');
    //         pageLink.classList.add('page-link');
    //         pageLink.id = i;
    //         pageLink.textContent = 'Page ' + (i + 1);
    
    //         const listItem = document.createElement('li');
    //         listItem.classList.add('page-item');
    //         listItem.appendChild(pageLink);
    
    //         pageContainer.appendChild(listItem);
    //     }
    
    //     document.getElementById('pages').addEventListener('click', function(event) {
    //         if (event.target.classList.contains('page-link')) {
    //             loadData(response, event.target.id);
    //         }
    //     });
    // }
    
    // function loadData(response, page) {
    //     const dataContainer = document.getElementById('data');
    //     dataContainer.innerHTML = '';
        
    //     response.data.content.forEach(item => {
    //         const row = document.createElement('tr');
    //         row.innerHTML = `
    //             <td class="card-title">${item.cardIds[0].cardNumber}</td>
    //             <td class="card-text">${item.cardIds[0].ownerName}</td>
    //             <td class="card-text">${item.amountOfMoney}</td>
    //             <td class="card-text">${item.currencyName}</td>
    //         `;
    //         dataContainer.appendChild(row);
    //     });
    // }
    

    // /////////////
    // ////TEST/////!!!!!!!!!!!!!!!! ПАгінація транзакцій
    // /////////////

    // const responseTransaction = {
    //     "success": true,
    //     "message": "",
    //     "data": {
    //       "content": [
    //         {
    //             "dateTimeOfTransaction": "2024-05-15T16:31:54", 
    //             "nameOfTransaction": "SERVICE_REPLENISHMENT", 
    //             "toCardNumber": "ADMIN", 
    //             "howMuch": 110.0 
    //         }, 
    //         { 
    //             "dateTimeOfTransaction": "2024-05-15T16:27:11", 
    //             "nameOfTransaction": "SERVICE_REPLENISHMENT", 
    //             "toCardNumber": "ADMIN", 
    //             "howMuch": 93.0 
    //         }, 
    //         { 
    //             "dateTimeOfTransaction": "2024-05-15T15:08:24", 
    //             "nameOfTransaction": "GET_SERVICE", 
    //             "toCardNumber": "ADMIN", 
    //             "howMuch": 200.0 

    //         }
    //       ],
    //       "pageable": {
    //         "pageSize": 10,
    //         "pageNumber": 0,
    //         "offset": 0,
    //         "unpaged": false,
    //         "paged": true
    //       },
    //       "totalElements": 2,
    //       "totalPages": 1,
    //       "last": true,
    //       "size": 10,
    //       "number": 0,
    //       "sort": {
    //         "sorted": true,
    //         "unsorted": false,
    //         "empty": false
    //       },
    //       "numberOfElements": 2,
    //       "first": true,
    //       "empty": false
    //     }
    //   }
        
    // loadPagesTr();
    // loadDataTr(0);
    
    // function loadPagesTr() {
    //             const pageCount = responseTransaction.data.totalPages;
    //             const pagesContainer = document.getElementById('pagination');
    
    //             for (let i = 0; i < pageCount; i++) {
    //                 const pageLink = document.createElement('a');
    //                 pageLink.classList.add('page-link');
    //                 pageLink.id = i;
    //                 pageLink.textContent = 'Page ' + (i + 1);
    
    //                 const listItem = document.createElement('li');
    //                 listItem.classList.add('page-item');
    //                 listItem.appendChild(pageLink);
    
    //                 pagesContainer.appendChild(listItem);
    //             }
    
    //     document.getElementById('pagination').addEventListener('click', function(event) {
    //         if (event.target.classList.contains('page-link')) {
    //             loadDataTr(event.target.id);
    //         }
    //     });
    // }
    
    // function loadDataTr(page) {
    //     const dataContainer = document.getElementById('accountList');
    //     dataContainer.innerHTML = ''; 
    
    //             responseTransaction.data.content.forEach(transaction => {
    //                 const listItem = document.createElement('li');
    //                 listItem.classList.add('list-group-item');
    //                 listItem.innerHTML = `
    //                     <p>Date/Time: ${transaction.dateTimeOfTransaction}</p>
    //                     <p>Name: ${transaction.nameOfTransaction}</p>
    //                     <p>From: ${transaction.fromCardNumber}</p>
    //                     <p>To: ${transaction.toCardNumber}</p>
    //                     <p>Amount: ${transaction.howMuch}</p>
    //                 `;
    //                 dataContainer.appendChild(listItem);
    //             });
    // }


    // //===========================================================================


    //     // Get Profile data

    const profileDataRequest = {
        "success":true,
        "message":"",
        "data":{
            "firstName":"ADMIN",
        "secondName":"VSEIA Bankov",
        "dateOfBirth":[2004,5,16],
        "phoneNumber":"+380966839230",
        "email":"123@gmail.com",
        "cashBackInUSD":0,
        "titul":"ANCIENT",
        "limitForService":25000,
        "iban":"UA69305299000000000000000001"}}

        
        
        let helmetImgSrc = document.querySelector('#helmetImg').src
        let profileList = document.querySelector('#profileList');
        
        
        // alert(profileDataRequest.data)
        // console.log(profileDataRequest);
        // console.log(profileItems);
        // console.log(profileDataRequest.data);
        // console.log(JSON.stringify(profileDataRequest));
        // console.log(`profileDataRequest: ${profileDataRequest}`);
        // console.log(`profileItems: ${profileItems}`);
        // console.log(`profileDataRequest.data: ${profileDataRequest.data}`);
        
        let profileItems = JSON.stringify(profileDataRequest.data)
        console.dir({ profileDataRequest })
        console.log(`<p><strong>IBAN:</strong> ${JSON.stringify(profileDataRequest.data.iban)}</p>`);
        console.log(`profileDataRequest.data.iban: ${profileDataRequest.data.iban}`);
    // if (profileItems.length > 0) {
    //     console.log(profileDataRequest);
    //     profileList.innerHTML = '';
    //     profileItems.forEach(item => {
    //         profileList.innerHTML += `<li>${item}</li>`;
    //     });                
    // }

    switch (profileDataRequest.data.titul) {
        case "ADMIN":
            helmetImgSrc = '../helmet9.png'
            break;
        case "HERALD":
            helmetImgSrc = '../helmet1.png'
            break;
        case "GUARDIAN":
            helmetImgSrc = '../helmet2.png'
            break;
        case "CRUSADER":
            helmetImgSrc = '../helmet3.png'
            break;
        case "ARCHON":
            helmetImgSrc = '../helmet4.png'
            break;
        case "LEGEND":
            helmetImgSrc = '../helmet5.png'
            break;
        case "ANCIENT":
            helmetImgSrc = '../helmet6.jpg'
            break;
        case "DIVINE":
            helmetImgSrc = '../helmet7.jpg'
            break;
        case "IMMORTAL":
            helmetImgSrc = '../helmet8.jpg'
            break;
            
            default:
            helmetImgSrc = '../helmet10.jpg'
            break;
    }
    // helmetImgSrc = '../helmet1.png'
    const profileCard = `
        <div>
            <h2>Profile info</h2>
            <p><strong>First name:</strong> ${profileDataRequest.data.iban}</p>
            <p><strong>First name:</strong> ${profileDataRequest.data.firstName}</p>
            <p><strong>Last Name:</strong> ${profileDataRequest.data.secondName}</p>
            <p><strong>Date of birth:</strong> ${profileDataRequest.data.dateOfBirth}</p>
            <p><strong>Phone number:</strong> ${profileDataRequest.data.phoneNumber}</p>
            <p><strong>Email:</strong> ${profileDataRequest.data.email}</p>
            <p><strong>Titul name:</strong> ${profileDataRequest.data.titul}</p>
            <p><strong>Cashback:</strong> ${profileDataRequest.data.cashBackInUSD}</p>
            <p><strong>IBAN:</strong> ${profileDataRequest.data.iban}</p>
            </div>
            `;   
            // <p><strong>Limit for service:</strong> ${data.titul.limitForService}</p>

    profileList.innerHTML = profileCard;     


}