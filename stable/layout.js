import libsbml from 'libsbmljs_stable'
import { rangle } from 'lodash'
import { readFileSync, existsSync } from 'fs'

if (!existsSync('models/layout-glycolysis.xml')) {
  throw new Error('Could not find models/layout-glycolysis.xml; Please ensure sure you running this script from the root directory')
}

libsbml().then((libsbml) => {
  try {
    const reader = new libsbml.SBMLReader()
    const doc = reader.readSBMLFromString(readFileSync('models/layout-glycolysis.xml', 'utf8'))

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

    for (const r of layout.rxnglyphs) {
      console.log('Reaction glyph:', r.getId())
      console.log('  number of species refs:', r.specref.length)
      for (const s of r.specref) {
        console.log('  is curve set?', s.isSetCurve())
        for (const segment of s.getCurve().segments) {
          console.log('  segment')
          console.log('    is cubic Bezier?', segment.isCubicBezier())
          if (segment.isCubicBezier()) {
            console.log('    start:', segment.getStart().x(), segment.getStart().y())
            console.log('    start:', segment.getEnd().x(), segment.getEnd().y())
            console.log('    start:', segment.getBasePoint1().x(), segment.getBasePoint1().y())
            console.log('    start:', segment.getBasePoint2().x(), segment.getBasePoint2().y())
            // expect(segment.getStart().x()).toEqual(225)
            // expect(segment.getStart().y()).toEqual(85.4117647058823)
            // expect(segment.getEnd().x()).toEqual(273)
            // expect(segment.getEnd().y()).toEqual(94.2)
            // expect(segment.getBasePoint1().x()).toEqual(246)
            // expect(segment.getBasePoint1().y()).toEqual(91)
            // expect(segment.getBasePoint2().x()).toEqual(247)
            // expect(segment.getBasePoint2().y()).toEqual(92)
          }
        }
      }
    }

    libsbml.destroy(doc)
  } catch(error) {
    console.log(error.stack)
  }
})
