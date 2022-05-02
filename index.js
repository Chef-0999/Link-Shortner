const axios = require('axios')
const inquirer = require('inquirer')


async function run() {

    const prompts = await inquirer.prompt([
        {
          type: "input",
          name: "link",
          message: "Link",
          default: "https://www.google.com"
        },
      ])

      const res = await request(prompts.link)

      console.log(`Shortened Link: ${res.url}`)



}


async function request(url) {

    try {

        const response = await axios.post('https://cleanuri.com/api/v1/shorten', {

            url: url
        
        })

        return {
            statusCode: response.status,
            statusMessage: response.statusText,
            url: response.data['result_url']
        }


    }
    catch (err) {

        console.log(`Error Shortening Link: ${err}`)

    }
}


run()