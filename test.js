const webdriver = require('selenium-webdriver');

const capabilities = {
  browserName: 'android',
  device: 'Google Pixel 3 XL',
  realMobile: 'true',
  os_version: '9.0',
  'browserstack.user': '',
  'browserstack.key': '',
  name: 'FUI Automated Node Test'
}

const driver = new webdriver.Builder()
  .usingServer('http://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities(capabilities)
  .build()

const quit = () => {
  driver.quit()
    .then(() => {
      console.log('quit')
    })
    .catch((err) => {
      console.error(err)
    })
}

driver.get('https://fomantic-ui.com')
  .then(() => {
    driver.findElement(webdriver.By.className('version'))
      .getText()
      .then((version) => {
        console.log(`Website version: ${version}`)
        quit()
      })
      .catch((err) => {
        console.error(err)
      })
  })
  .catch((err) => {
    console.error(err)
  })

