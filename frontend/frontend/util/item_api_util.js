const baseUrl = 'https://localhost:3000/';

export const fetchAllItems = () => {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();

    request.open('GET', `${baseUrl}`);

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 300) {
          // console.log('Status:', this.status);
          // console.log('Headers:', this.getAllResponseHeaders());
          // console.log('Body:', this.responseText);

          var response = this.responseText;
          resolve(JSON.parse(response));

        } else {
          reject({
            status: this.status,
            statusText: this.statusText,
          })
        }
      }
    };

    request.send();
  })
}

export const fetchSingleItem = (itemId) => {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();

    request.open('GET', `${baseUrl}${itemId}`);

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 300) {
          // console.log('Status:', this.status);
          // console.log('Headers:', this.getAllResponseHeaders());
          // console.log('Body:', this.responseText);
          var response = this.responseText;
          resolve(JSON.parse(response));

        } else { // something wasn't right
          reject({
            status: this.status,
            statusText: this.statusText,
          });
        }
      }
    };

    request.send();
  })
}
