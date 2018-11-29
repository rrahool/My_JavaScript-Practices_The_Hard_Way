document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  // Optional - used for spinners/loaders
  xhr.onprogress = function(){
     console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function(){
  console.log('READYSTATE', xhr.readyState);
    
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }

    // Checks for error (if any)
    xhr.onerror = function() {
      console.log('Request Error....');

    }
  }


  // Another way of checking status ---- but not recommended
  // xhr.onreadystatechange = function(){
  // console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4) {
  //         console.log(this.responseText);
  //       }
  // }

  xhr.send();
}



// HTTP statuses              |           // readyState values
                       
  // 200: "OK"                |               // 0: request not initialized   
  // 403: "Forbidden"         |               // 1: server connection established
  // 404: "Not Found"         |               // 2: request received 
                                              // 3: processing request 
                                              // 4: request finished and response is ready