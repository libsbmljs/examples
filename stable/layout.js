import libsbml from 'libsbmljs_stable'
import { rangle } from 'lodash'
import { readFileSync } from 'fs'

libsbml().then((libsbml) => {
  try {
    const reader = new libsbml.SBMLReader()
    const sbml = readFileSync('models/layout-glycolysis.xml', 'utf8')
    console.log(sbml) // sbml
    const doc = reader.readSBMLFromString(sbml)

    const plugin = doc.getModel().findPlugin('layout')
    // const layoutplugin = plugin.asLayout()
    const layoutplugin = libsbml.castObject(plugin, libsbml.LayoutModelPlugin)

    const layout = layoutplugin.layouts[0]

    // test species glyphs
    console.log('Number of layout species glyphs:', layout.specglyphs.length)

    for (const s of layout.specglyphs) {
      console.log('Species glyph:', s.getId())
      console.log('  position:', s.getBoundingBox().getPosition().x(), ', ', s.getBoundingBox().getPosition().y())
      console.log('  width:', s.getBoundingBox().width)
      console.log('  height:', s.getBoundingBox().height)
    }

    libsbml.destroy(doc)
  } catch(error) {
    console.log(error.stack)
  }
})
