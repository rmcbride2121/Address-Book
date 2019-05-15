const newArray = [];
function get(){
    fetch("https://randomuser.me/api/")
      .then( thisIsTheResponseFromTheAPI => thisIsTheResponseFromTheAPI.json())
      .then( data => {
          document.getElementById("idOfList").innerHTML = " ";
          newArray.push(data)
          console.log(newArray)
          const blarb = newArray["0"].results["0"].name.first;
          firstName.innerHTML = '${blarb}'
        })
      .catch( oopsThisIsAnError => console.log("oops, looks like we got an error: ", oopsThisIsAnError))
      .finally( ()=> console.log("finally, This function always runs...")) // Whether or not there's an error or success, this will happen such as stopping a loading wheel on the front end
      return newArray;
  }