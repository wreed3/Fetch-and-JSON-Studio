window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
            return response.json();
    }).then(function(json){
        // console.log(json)
        let complete ="";
        const sorted = json.sort((a, b) => (a.hoursInSpace < b.hoursInSpace) ? 1 : -1);
        let container = document.querySelector("#container");
        // console.log(container);
        for(astro of json){
            if(astro.active){
                    complete += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astro.firstName} ${astro.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astro.hoursInSpace}</li>
                                <li style="color: green"; >Active: ${astro.active}</li>
                                <li>Skills: ${astro.skills.join(", ")}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${astro.picture}"/>
                    </div>`;
            }else{
                complete += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astro.firstName} ${astro.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astro.hoursInSpace}</li>
                                <li>Active: ${astro.active}</li>
                                <li>Skills: ${astro.skills.join(", ")}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${astro.picture}"/>
                    </div>`;
            }
        }

        container.innerHTML = complete;

    });


});