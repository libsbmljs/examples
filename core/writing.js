import libsbml from 'libsbmljs_core'

libsbml().then((libsbml) => {
  // create new document
  const doc = new libsbml.SBMLDocument(3,2)

  const model = doc.createModel()
  model.setId('model1')

  const comp = model.createCompartment()
  comp.setId('comp1')
  comp.setSize(1)
  comp.setConstant(true)

  const sp1 = model.createSpecies()
  sp1.setId('spec1')
  sp1.setName('S1')
  sp1.setInitialAmount(0)
  sp1.setCompartment('comp1')
  sp1.setBoundaryCondition(false)
  sp1.setConstant(false)
  sp1.setHasOnlySubstanceUnits(false)

  const sp2 = model.createSpecies()
  sp2.setId('spec2')
  sp2.setName('S2')
  sp2.setInitialAmount(0)
  sp2.setCompartment('comp1')
  sp2.setBoundaryCondition(false)
  sp2.setConstant(false)
  sp2.setHasOnlySubstanceUnits(false)

  const rxn = model.createReaction()
  rxn.setId('reaction1')
  rxn.setReversible(false)

  const spr1 = rxn.createReactant()
  spr1.setSpecies('spec1')
  spr1.setConstant(false)

  const spr2 = rxn.createProduct()
  spr2.setSpecies('spec2')
  spr2.setConstant(false)

  const k1 = rxn.createKineticLaw()
  const parser = new libsbml.SBMLFormulaParser()
  const kmath = parser.parseL3Formula('S1*S2')

  k1.setMath(kmath)

  // finished building model - round trip it

  const writer = new libsbml.SBMLWriter()
  const serializedSBML = writer.writeSBMLToString(doc)

  console.log(serializedSBML)

  libsbml.destroy(doc)
  libsbml.destroy(writer)
})
