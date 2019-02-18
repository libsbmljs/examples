import libsbml from 'libsbmljs_experimental'

libsbml().then((libsbml) => {
    try {
      // create new document
      const doc = new libsbml.SBMLDocument(3,2)

      doc.enablePackage(libsbml.ArraysExtension.prototype.getXmlnsL3V1V1(), 'arrays', true)
      doc.setPackageRequired("arrays", true)

      const model = doc.createModel()

      let p = model.createParameter()
      p.setId("n")
      p.setConstant(true)
      p.setValue(10)

      // second parameter
      p = model.createParameter()
      p.setId("x")
      p.setConstant(false)


      // create the Dimensions via the Plugin
      let arraysPlug = libsbml.castObject(p.findPlugin("arrays"), libsbml.ArraysSBasePlugin)
      let dim = arraysPlug.createDimension()
      dim.setArrayDimension(0)
      dim.setSize("n")

      // third parameter
      p = model.createParameter()
      p.setId("y")
      p.setConstant(false)


      // create the Dimensions via the Plugin
      arraysPlug = libsbml.castObject(p.findPlugin("arrays"), libsbml.ArraysSBasePlugin)
      dim = arraysPlug.createDimension()
      dim.setArrayDimension(0)
      dim.setSize("n")


      // create the assignmentRule
      const ar = model.createAssignmentRule()
      ar.setVariable("y")

      const math = new libsbml.ASTNode(libsbml.AST_LINEAR_ALGEBRA_SELECTOR)
      const ci1 = new libsbml.ASTNode(libsbml.AST_NAME)
      ci1.setName("x")
      const ci2 = new libsbml.ASTNode(libsbml.AST_NAME)
      ci2.setName("i")
      math.addChild(ci1)
      math.addChild(ci2)
      ar.setMath(math)

      // set dimensions
      arraysPlug = libsbml.castObject(ar.findPlugin("arrays"), libsbml.ArraysSBasePlugin)
      dim = arraysPlug.createDimension()
      dim.setArrayDimension(0)
      dim.setSize("n")
      dim.setId("i")

      // set the index
      const ind = arraysPlug.createIndex()
      ind.setArrayDimension(0)
      ind.setReferencedAttribute("variable")

      const parser = new libsbml.SBMLFormulaParser()
      const indMath = parser.parseL3Formula("9 - i")
      ind.setMath(indMath)

      const writer = new libsbml.SBMLWriter()
      const serializedSBML = writer.writeSBMLToString(doc)

      console.log(serializedSBML)

      libsbml.destroy(doc)
    } catch(error) {
      fail(error)
      console.log(error.stack)
    }
})
