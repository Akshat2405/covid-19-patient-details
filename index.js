console.log("This is my new project");
function updatecases(){
    fetch('https://api.covid19india.org/data.json')
    .then(response=> response.text())
    .then((text) =>{
      const textobj=JSON.parse(text);
      const myiid=document.getElementById("myiid");
      const myobj=textobj.statewise
      let string=""
      for (const item of myobj) {
          string += `<tr>
          <th scope="row">${item.state}</th>
          <td>${item.confirmed}</td>
          <td>${item.recovered}</td>
          <td>${item.active}</td>
          <td>${item.deaths}</td>
        </tr>`
      }
   
   
      myiid.innerHTML=string;
    });
}
updatecases();
setInterval(()=>{
    updatecases()},3000   
)
