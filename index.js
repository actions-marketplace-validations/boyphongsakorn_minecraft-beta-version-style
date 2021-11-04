const fetch = require('node-fetch');
const core = require('@actions/core');
const github = require('@actions/github');

try {
    // `who-to-greet` input defined in action metadata file
    /*const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);*/
    /*const time = (new Date()).toTimeString();
    core.setOutput("time", time);*/
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let now = new Date();
    let onejan = new Date(now.getFullYear(), 0, 1);
    let week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
    let beforeversion = now.getFullYear().toString().substr(-2)+"W"+week
    // Get the JSON webhook payload for the event that triggered the workflow
    //const payload = JSON.stringify(github.context.payload, undefined, 2)
    //console.log(`The event payload: ${payload}`);
    //console.log(github.context.payload["repository"]["tags_url"])
    const tagurl = github.context.payload["repository"]["tags_url"]
    let betatag,gettoit
    fetch(tagurl)
    .then(res => res.json())
    .then(body => {
        body.forEach(element => {
            if(element["name"].search(beforeversion) > -1){
                let aplhabetbefore = element["name"].slice(element["name"].search(beforeversion)+6, element["name"].search(beforeversion)+7);
                gettoit = alphabet[aplhabetbeforebeasts.indexOf(aplhabetbefore)+1]
                betatag = beforeversion+gettoit
                return false
            }else{
                betatag = beforeversion+"A"
            }
        });
        core.setOutput("betaversion", betatag);
    });
    //console.log(now.getFullYear().toString().substr(-2))
} catch (error) {
    core.setFailed(error.message);
}