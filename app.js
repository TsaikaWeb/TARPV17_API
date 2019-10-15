//Init Github Class
const github = new Github;
//Init UI class
const ui = new UI;

github.getUser("Sempiternus666")
        .then(data => {
            if(data.profile.message === 'Not Found') {
                ui.showAlert('User not found!', 'alert alert-danger')
            } else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })

/* searchUser.addEventListener('keyup', (event) => {
    //get input text from the searchUser input field
    const userText = event.target.value;
    if(userText !== ''){
            //make an http call to github API
            github.getUser(userText)
            .then(data =>{
                if(data.profile.message === 'Not Found') {
                    //Show alert if user was not found 
                    ui.showAlert('User Not Found', 'alert alert-danger');
                } else{
                    //Show user profile and repos
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
                console.log(data);
            })
    } else{
        ui.clearProfile();
    }
}) */






























/*loadEventListeners();

function loadEventListeners() {
    document.addEventListener(`DOMContentLoaded`, getObject);
}

function getObject(){
    const gitHub = new Github;
    console.log(gitHub);

    gitHub.getUser(`Sempiternus666`)
    .then(data=>{
        console.log(data);
    })
}*/