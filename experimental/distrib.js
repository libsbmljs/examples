import libsbml from 'libsbmljs_experimental'

libsbml().then((libsbml) => {
  try {
    const coreVersion = 2
    // create the document
    const document = new libsbml.SBMLDocument()

    document.enablePackage(libsbml.DistribExtension.prototype.getXmlnsL3V2V1(), 'distrib', true)
    document.setPackageRequired("distrib", true)

    const distdoc = libsbml.castObject(document.findPlugin("distrib"), libsbml.DistribSBMLDocumentPlugin)
    // distdoc.setRequired(true)
    const model = document.createModel()

    const parser = new libsbml.SBMLFormulaParser()

    const fd = model.createFunctionDefinition()
    fd.setMath(parser.parseL3Formula("lambda(x, y, NaN)"))
    fd.setId("distribution")
    const dfdp = libsbml.castObject(fd.findPlugin("distrib"), libsbml.DistribFunctionDefinitionPlugin)
    const draw = dfdp.createDistribDrawFromDistribution()

    let param = model.createParameter()
    param.setId("P1")
    param.setConstant(true)
    const ia = model.createInitialAssignment()
    ia.setSymbol("P1")

    param = model.createParameter()
    param.setConstant(true)
    param.setId("mean")
    param.setValue(1)
    let di = draw.createDistribInput()
    di.setId("meani")
    di.setIndex(0)

    param = model.createParameter()
    param.setConstant(true)
    param.setId("stddev")
    param.setValue(1)
    di = draw.createDistribInput()
    di.setId("stddevi")
    di.setIndex(1)

    ia.setMath(parser.parseL3Formula('distribution(mean,stddev)'))

    const normal = new libsbml.DistribNormalDistribution(3, coreVersion, 1)
    const mean = normal.createMean()
    mean.setVar("mean")
    const stddev = normal.createStddev()
    stddev.setVar("stddev")
    draw.setDistribution(normal)


    const writer = new libsbml.SBMLWriter()
    const serializedSBML = writer.writeSBMLToString(document)

    console.log(serializedSBML)

    libsbml.destroy(document)
  } catch(error) {
    console.log(error.stack)
  }
})
