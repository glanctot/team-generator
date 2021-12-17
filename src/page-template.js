const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div class="card col m-2">
            <div class="card-header bg-primary text-light">
                <h3 class="name">${manager.getName()}</h3>
                <h5 class="role"><i class="fas fa-mug-hot"></i>${manager.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
            </ul>
        </div>`
    }

    const generateEngineer = engineer => {
        return `
        <div class="card col m-2">
            <div class="card-header bg-primary text-light">
                <h3 class="name">${engineer.getName()}</h3>
                <h5 class="role"><i class="fas fa-glasses"></i>${engineer.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://www.github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </div>`
    }

    const generateIntern = intern => {
        return `
        <div class="card col m-2">
            <div class="card-header bg-primary text-light">
                <h3 class="name">${intern.getName()}</h3>
                <h5 class="role"><i class="fas fa-user-graduate"></i>${intern.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>`
    }

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        .join("")
    );

    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );

    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
}

const generateHtml = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header class="p-3 text-center bg-danger">
            <h1 class="title">My Team</h1>
        </header>
        <div class="container">
            <div class="row">
                ${generateTeam(team)}
            </div>
        </div>
    </body>
    </html>
    `
}    


module.exports = generateHtml;