import libsbml from 'libsbmljs_stable'

libsbml().then((libsbml) => {
    try {
      // create new document
      const doc = new libsbml.SBMLDocument(3,2)

      doc.enablePackage(libsbml.MultiExtension.prototype.getXmlnsL3V1V1(), 'multi', true)
      doc.setPackageRequired("multi", true)

      const model = doc.createModel()

      let c = model.createCompartment()
      c.setId("membrane")
      c.setConstant(true)

      // set the multi attribute isType via the compartmentPlugin
      let compPlug = libsbml.castObject(c.findPlugin("multi"), libsbml.MultiCompartmentPlugin)
      compPlug.setIsType(true)

      c = model.createCompartment()
      c.setId("inter_membrane")
      c.setConstant(true)

      // set the multi attribute isType via the compartmentPlugin
      compPlug = libsbml.castObject(c.findPlugin("multi"), libsbml.MultiCompartmentPlugin)
      compPlug.setIsType(true)

      // create the compartmentReferences

      let compRef = compPlug.createCompartmentReference()
      compRef.setId("m1")
      compRef.setCompartment("membrane")

      compRef = compPlug.createCompartmentReference()
      compRef.setId("m2")
      compRef.setCompartment("membrane")

      // create the speciesTypes
      const modelPlug = libsbml.castObject(model.findPlugin("multi"), libsbml.MultiModelPlugin)

      let st = modelPlug.createMultiSpeciesType()
      st.setId("stX")
      st.setCompartment("ct")

      st = modelPlug.createMultiSpeciesType()
      st.setId("stXXcis")
      st.setCompartment("ct")

      // create speciesTypeInstances

      let sti = st.createSpeciesTypeInstance()
      sti.setId("stiX1")
      sti.setSpeciesType("stX")

      sti = st.createSpeciesTypeInstance()
      sti.setId("stiX2")
      sti.setSpeciesType("stX")

      // create speciesTypeBond

      let istb = st.createInSpeciesTypeBond()
      istb.setBindingSite1("stiX1")
      istb.setBindingSite2("stiX2")

      // another speciesType

      st = modelPlug.createMultiSpeciesType()
      st.setId("stXXtrans")
      st.setCompartment("cct")

      // create speciesTypeInstances

      sti = st.createSpeciesTypeInstance()
      sti.setId("stiX1")
      sti.setSpeciesType("stX")
      sti.setCompartmentReference("cr1")

      sti = st.createSpeciesTypeInstance()
      sti.setId("stiX2")
      sti.setSpeciesType("stX")
      sti.setCompartmentReference("cr2")

      // create speciesTypeBond

      istb = st.createInSpeciesTypeBond()
      istb.setBindingSite1("stiX1")
      istb.setBindingSite2("stiX2")

      const writer = new libsbml.SBMLWriter()
      const serializedSBML = writer.writeSBMLToString(doc)

      console.log(serializedSBML)

      libsbml.destroy(doc)
    } catch(error) {
      console.log(error.stack)
    }
})
