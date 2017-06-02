const baseUrl = 'https://localhost:3000/';

export const requestToken = (phoneNumber) => {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    var params = JSON.stringify({ phone: phoneNumber });
    console.log(params);
    request.open('GET', `${baseUrl}request`);
    request.setRequestHeader('Content-length', params.length)

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 300) {
          console.log('Status:', this.status);
          console.log('Headers:', this.getAllResponseHeaders());
          console.log('Body:', this.responseText);
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
    request.send(params);
  })
}
