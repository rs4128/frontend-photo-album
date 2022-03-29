
function callSearchGet(message) {
  // params, body, additionalParams
  return sdk.searchGet({'q':message,'x-api-key':'1dcJ4LN32c7cxizUQmiMKi3IT97ODJi8X5RaEDQg'}, {'q':message,'x-api-key':'1dcJ4LN32c7cxizUQmiMKi3IT97ODJi8X5RaEDQg'
    // messages: [{
    //   type: 'unstructured',
    //   unstructured: {
    //     text: message
    //   }
    // }]
  }, {'q':message,'x-api-key':'1dcJ4LN32c7cxizUQmiMKi3IT97ODJi8X5RaEDQg'});
}

function functionSearchImages(message)
{
callSearchGet(msg)
  .then((response) => {
    console.log(response)
    photos_array = response['data']['photos']
    console.log(photos_array)
    render_images(photos_array)
  })
  .catch((error) => {
    console.log('an error occurred', error);
    //insertResponseMessage('Oops, something went wrong. Please try again.');
  });
}





 




function functionuploadImage(msg){
  // callUploadPut(msg)
  // .then((response) => {
  //   console.log(response)
  // })
  // .catch((error) => {
  //   console.log('an error occurred', error);
  //   //insertResponseMessage('Oops, something went wrong. Please try again.');
  // });


  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("PUT", "https://uet3ogk4d2.execute-api.us-east-1.amazonaws.com/stage_v1/upload/photos-assignment-b2/mountain.jpeg");
  xhr.setRequestHeader("content-type", "image/jpeg");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("postman-token", "2ad84688-4e59-7975-753c-4848fda3d25a");

  xhr.send(data);

}

function handleUpload(event){
  msg = $('#myFile').val();
  console.log($('#myFile'))
  console.log(msg)
  functionuploadImage(msg)
}

function myFunction(){

  string = 'https://s3-external-1.amazonaws.com/{bucket}/{object}'
  console.log(string[37])
  console.log('Hi')
  msg = $('.message-input').val();
  console.log(msg)
  //render_images()
  new_message = (functionSearchImages(msg))
  console.log(new_message)
}

function convertBaseToImage(){

  var image = new Image();
  image.src = 'data:image/png;base64,iVBORw0K...';

}


function render_images(photos_array)
{
  var modalElement = document.getElementById('images_id')
  modalElement.innerHTML = ""
  images = photos_array
  let getImgs = ""
    for (let i = 0; i < images.length; i++) {
        var imageElement = document.createElement('img');
        //imageElement.classList.add('modal-content');
        imageElement.src = images[i];
        imageElement.width = '400'
        imageElement.width = '200'
        modalElement.appendChild(imageElement);

       
    }
    //console.log(getImgs)
    //modalElement.innerHTML = getImgs
}

function callChatbotApi(message) {
  // params, body, additionalParams
  return sdk.chatbotPost({}, {
    messages: [{
      type: 'unstructured',
      unstructured: {
        text: message
      }
    }]
  }, {});
}



// document.getElementById('form-upload').addEventListener('submit',function handleEventSelect(evt){
//   let files = evt.target.files;
//   var f = files[0]
//   console.log(f)

// })


