const fs = require('fs')
const path = require('path')
const yamlFront = require('yaml-front-matter')

const directoryPath = path.join(__dirname, '../content')
const output = []

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Error al leer el directorio: ' + err)
  }

  files.forEach(file => {
    if (path.extname(file) === '.md') {
      const fileName = path.basename(file, '.md')
      const content = fs.readFileSync(path.join(directoryPath, file), 'utf8')
      const frontMatter = yamlFront.loadFront(content)
      delete frontMatter.__content

      output.push({ ...frontMatter, slug: fileName })
    }
  })

  fs.writeFileSync('./src/data/tracks.data.json', JSON.stringify(output, null, 4))
  console.log('Archivo JSON generado exitosamente.')
})
