import libsbml from 'libsbmljs_stable'

libsbml().then((libsbml) => {
    try {
      // create new document
      const doc = new libsbml.SBMLDocument(3,2)

      doc.enablePackage(libsbml.CompExtension.prototype.getXmlnsL3V1V1(), 'comp', true)
      doc.setPackageRequired('comp', true)

      // create the Model
      const model=doc.createModel()
      model.setId("aggregate")

      // Set the submodels
      const model_plugin = doc.getModel().findPlugin('comp')
      const comp_model_plugin = libsbml.castObject(model_plugin, libsbml.CompModelPlugin)

      const submod1 = comp_model_plugin.createSubmodel()
      submod1.setId("A")
      submod1.setModelRef("ExtMod1")

      const submod2 = comp_model_plugin.createSubmodel()
      submod2.setId("B")
      submod2.setModelRef("ExtMod1")

      // create a replacement compartment
      const comp=model.createCompartment()
      comp.setSpatialDimensions(3)
      comp.setConstant(true)
      comp.setId("comp")
      comp.setSize(1)

      //Tell the model that this compartment replaces both of the inside ones.
      const compartplug = libsbml.castObject(comp.findPlugin("comp"), libsbml.CompSBasePlugin)

      const re1 = compartplug.createReplacedElement()
      re1.setIdRef("comp")
      re1.setSubmodelRef("A")

      const re2 = compartplug.createReplacedElement()
      re2.setIdRef("comp")
      re2.setSubmodelRef("B")

      // create a replacement species
      const spec = model.createSpecies()
      spec.setCompartment("comp")
      spec.setHasOnlySubstanceUnits(false)
      spec.setConstant(false)
      spec.setBoundaryCondition(false)
      spec.setId("S")

      //Tell the model that this species replaces both of the inside ones.
      const spp = libsbml.castObject(spec.findPlugin("comp"), libsbml.CompSBasePlugin)

      const re3 = spp.createReplacedElement()
      re3.setIdRef("S")
      re3.setSubmodelRef("A")

      const re4 = spp.createReplacedElement()
      re4.setIdRef("S")
      re4.setSubmodelRef("B")

      const writer = new libsbml.SBMLWriter()
      const serializedSBML = writer.writeSBMLToString(doc)

      console.log(serializedSBML)

      libsbml.destroy(doc)
    } catch(error) {
      console.log(error.stack)
    }
})
