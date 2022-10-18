//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

//run fetch on load 10 times
//have button that loads it 10 more times

const url = 'http://www.boredapi.com/api/activity?price=0.0'

for(let i=0; i<10; i++){
fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
          const activity = document.createElement("li");

        activity.innerText = data.activity
        
        const list = document.getElementById("list");
  document.body.insertBefore(activity, list)
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }

function getFetch(){
  for(let i=0; i<10; i++){
    fetch(url)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            console.log(data)
            
              const activity = document.createElement("li");
    
            activity.innerText = data.activity
            
            const list = document.getElementById("list");
      document.body.insertBefore(activity, list)
            
          })
          .catch(err => {
              console.log(`error ${err}`)
          });
        }
}