module.exports = (obj, arr) => `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="/style.css" />
		<title>Document</title>
	</head>
	<body>
    <h1> Details for ${obj.id} </h1>
      ${arr
				.map(
					(element) => `
        <div>
          <p> ${element.id} </p>
        </div>`
				)
				.join('')}

	</body>
</html>
`;
