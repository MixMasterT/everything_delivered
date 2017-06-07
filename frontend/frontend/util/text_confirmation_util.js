const baseUrl = 'http://localhost:3000/';

export const requestToken = (phoneNumber) => {
  $.ajax({
<<<<<<< HEAD
    method: 'GET',
=======
    method: 'POST',
>>>>>>> d130f2b031552d2f1a925cf424ba7ad040bf4acc
    url: '/request',
    data: { phone_number: phoneNumber, country_code: "+1" },
    success: (res) => console.log(res),
    error: (res) => console.log(res)
  })
}
// export const requestToken = (phoneNumber) => {
//   return new Promise((resolve, reject) => {
//     var request = new XMLHttpRequest();
//     var params = JSON.stringify({ phone: phoneNumber, country_code: "+1" });
//
//     request.open('GET', `${baseUrl}request`);
//     request.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (this.status >= 200 && this.status < 300) {
//           console.log('Status:', this.status);
//           console.log('Headers:', this.getAllResponseHeaders());
//           console.log('Body:', this.responseText);
//           var response = this.responseText;
//           resolve(JSON.parse(response));
//         } else {
//           reject({
//             status: this.status,
//             statusText: this.statusText,
//           })
//         }
//       }
//     };
//     request.send(params);
//   })
// }
