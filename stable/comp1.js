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

      const plugin = doc.findPlugin('comp')

      //Create our submodel
      const compdoc = libsbml.castObject(plugin, libsbml.CompSBMLDocumentPlugin)
      compdoc.setRequired(true)
      const mod1 = compdoc.createModelDefinition()
      mod1.setId("enzyme")
      mod1.setName("enzyme")

      const comp=mod1.createCompartment()
      comp.setSpatialDimensions(3)
      comp.setConstant(true)
      comp.setId("comp")
      comp.setSize(1)

      let spec = mod1.createSpecies()
      spec.setCompartment("comp")
      spec.setHasOnlySubstanceUnits(false)
      spec.setConstant(false)
      spec.setBoundaryCondition(false)
      spec.setId("S")

      spec = mod1.createSpecies()
      spec.setCompartment("comp")
      spec.setHasOnlySubstanceUnits(false)
      spec.setConstant(false)
      spec.setBoundaryCondition(false)
      spec.setId("E")

      spec = mod1.createSpecies()
      spec.setCompartment("comp")
      spec.setHasOnlySubstanceUnits(false)
      spec.setConstant(false)
      spec.setBoundaryCondition(false)
      spec.setId("D")

      spec = mod1.createSpecies()
      spec.setCompartment("comp")
      spec.setHasOnlySubstanceUnits(false)
      spec.setConstant(false)
      spec.setBoundaryCondition(false)
      spec.setId("ES")

      const rxn = model.createReaction()
      rxn.setReversible(true)
      rxn.setId("J0")

      const rxn2 = model.createReaction()
      rxn2.setReversible(true)
      rxn2.setId("J1")

      const sr = rxn.createReactant()
      sr.setConstant(true)
      sr.setStoichiometry(1)
      sr.setSpecies("S")

      sr.setSpecies("E")
      rxn.addReactant(sr)
      rxn2.addProduct(sr)

      sr.setSpecies("ES")
      rxn.addProduct(sr)
      rxn2.addReactant(sr)

      sr.setSpecies("D")
      rxn2.addProduct(sr)

      // Create a submodel
      const model_plugin = doc.getModel().findPlugin('comp')
      const comp_model_plugin = libsbml.castObject(model_plugin, libsbml.CompModelPlugin)

      const submod1 = comp_model_plugin.createSubmodel()
      submod1.setId("submod1")
      submod1.setModelRef("enzyme")

      const submod2 = comp_model_plugin.createSubmodel()
      submod2.setId("submod2")
      submod2.setModelRef("enzyme")

      const writer = new libsbml.SBMLWriter()
      const serializedSBML = writer.writeSBMLToString(doc)

      console.log(serializedSBML)

      libsbml.destroy(doc)
    } catch(error) {
      console.log(error.stack)
    }
})
