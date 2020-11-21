const item = document.getElementById('item');
const desc = document.getElementById('desc');
const amt = document.getElementById('amt');
const add = document.getElementById('add');
const del =  document.getElementById('delete');
const dis = document.getElementById('showData');
const distAmt = document.getElementById('disAmt');
const ctrl = document.querySelector('#alert');
const data = [];
let totalAmt = 0;
let count = 0;

add.addEventListener('click' , () => {
    console.log('add');
   const local_item =  item.value;
   const local_desc = desc.value;
   const local_amt = amt.value;
   if (  local_item !== '' && local_item !== null && local_desc !== '' && local_desc !== null && local_amt !== '' && local_amt !== null) {
    count = count + 1;
    data.push({count, local_item , local_desc , local_amt});
    console.log(data);
    list_data = document.createElement('ion-item');
    list_data.innerHTML = `<div id=`+ count +`><span style="margin:0px 10px;">Item : `+local_item+ `</span><span style="margin:0px 10px;">Amount : `+local_amt+`</span><span style="margin:4px 10px;float:left;"><ion-icon slot="icon-only" name="close" color='danger' id=`+ count +`></ion-icon></span></div>`;
    dis.appendChild(list_data);
    item.value= null;
    desc.value = null;
    amt.value = null;
    data.forEach(item => {
        totalAmt = totalAmt + parseInt(item.local_amt , 10);
    })
    disAmt.innerHTML = totalAmt;
    totalAmt = 0;   
    count = 0;
   } else {
        presentAlert('Error!' , 'Invalid Inputs' ,'Please enter valid text' , ['Okay']);
   }
  
});

del.addEventListener('click' , () => {
    console.log('delete');
    if(data.length > 0) {
        data.pop();
        console.log(data);
        dis.removeChild(list_data);
        presentAlert('Delete' , 'Deleted Successfully' , ' ' , ['Okay']);
    } else {
        presentAlert('Delete' , 'No data to delete' , ' ' , ['Okay']);
    }
    
});

function presentAlert(header , subtitle ,message , button) {
    const alert = document.createElement('ion-alert');
    alert.header = header;
    alert.subHeader = subtitle;
    alert.message = message;
    alert.buttons = button;
    ctrl.appendChild(alert);
    return alert.present();
  }
  


