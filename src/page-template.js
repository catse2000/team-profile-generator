const generateEmployeeCards = employeesArr => {
    console.log(employeesArr);

    return `
        ${employeesArr
            .filter(({ role }) => "Manager") 
            .map(({name, id, email, office, role}) => {
                return `
                    <section class="mx-4 mt-4">
                        <div class="card" style="width: 18rem">
                            <div class="card-header text-white bg-primary">
                                ${name}
                                ${role}
                            </div>
                            <div class="card-body bg-light">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">ID: ${id}</li>
                                    <li class="list-group-item">Email: ${email}</li>
                                    <li class="list-group-item">Office: ${office}</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                `;
            })
            .join('')}

        ${employeesArr
            .filter(({ role }) => "Engineer") 
            .map(({name, id, email, github, role}) => {
                return `
                    <section class="mx-4 mt-4">
                        <div class="card" style="width: 18rem">
                            <div class="card-header text-white bg-primary">
                                ${name}
                                ${role}
                            </div>
                            <div class="card-body bg-light">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">ID: ${id}</li>
                                    <li class="list-group-item">Email: ${email}</li>
                                    <li class="list-group-item">Github: ${github}</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                `;
            })
            .join('')}

        ${employeesArr
            .filter(({ role }) => "Intern") 
            .map(({name, id, email, school, role}) => {
                return `
                    <section class="mx-4 mt-4">
                        <div class="card" style="width: 18rem">
                            <div class="card-header text-white bg-primary">
                                ${name}
                                ${role}
                            </div>
                            <div class="card-body bg-light">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">ID: ${id}</li>
                                    <li class="list-group-item">Email: ${email}</li>
                                    <li class="list-group-item">School: ${school}</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                `;
            })
            .join('')}
    `;
};

module.exports = templateData => {

    //destructure page data by section
    const employees = templateData;

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    </head>
    <body>
        <header class="bg-danger text-light text-center py-5" style="font-size: 24px;">My Team</header>
        <main class="d-flex justify-content-center flex-wrap">
            ${generateEmployeeCards(employees)}
        </main>
    `;
};