import libsbml from 'libsbmljs_stable'

libsbml().then((libsbml) => {
  try {
    // create new document
    const doc = new libsbml.SBMLDocument(3,2)

    doc.enablePackage(libsbml.FbcExtension.prototype.getXmlnsL3V1V2(), 'fbc', true)
    doc.setPackageRequired("fbc", false)

    const model = doc.createModel()
    model.setId('model1')

    const compartment = model.createCompartment()
    compartment.setId('compartment')
    compartment.setConstant(true)
    compartment.setSize(1)

    let species = model.createSpecies()
    species.setId("Node1")
    species.setCompartment("compartment")
    species.setBoundaryCondition(false)
    species.setConstant(false)
    species.setHasOnlySubstanceUnits(false)
    species = model.createSpecies()
    species.setId("Node2")
    species.setCompartment("compartment")
    species.setBoundaryCondition(false)
    species.setConstant(false)
    species.setHasOnlySubstanceUnits(false)
    species = model.createSpecies()
    species.setId("Node3")
    species.setCompartment("compartment")
    species.setBoundaryCondition(false)
    species.setConstant(false)
    species.setHasOnlySubstanceUnits(false)
    species = model.createSpecies()
    species.setId("Node4")
    species.setCompartment("compartment")
    species.setBoundaryCondition(false)
    species.setConstant(false)
    species.setHasOnlySubstanceUnits(false)
    species = model.createSpecies()
    species.setId("Node5")
    species.setCompartment("compartment")
    species.setBoundaryCondition(false)
    species.setConstant(false)
    species.setHasOnlySubstanceUnits(false)
    species = model.createSpecies()
    species.setId("Node6")
    species.setCompartment("compartment")
    species.setBoundaryCondition(false)
    species.setConstant(false)
    species.setHasOnlySubstanceUnits(false)
    species = model.createSpecies()
    species.setId("Node7")
    species.setCompartment("compartment")
    species.setBoundaryCondition(false)
    species.setConstant(false)
    species.setHasOnlySubstanceUnits(false)
    species = model.createSpecies()
    species.setId("Node8")
    species.setCompartment("compartment")
    species.setBoundaryCondition(false)
    species.setConstant(false)
    species.setHasOnlySubstanceUnits(false)
    species = model.createSpecies()
    species.setId("Node0")
    species.setCompartment("compartment")
    species.setBoundaryCondition(true)
    species.setConstant(false)
    species.setHasOnlySubstanceUnits(false)
    species = model.createSpecies()
    species.setId("Node9")
    species.setCompartment("compartment")
    species.setBoundaryCondition(true)
    species.setConstant(false)
    species.setHasOnlySubstanceUnits(false)


    let reaction = model.createReaction()
    reaction.setId("J0")
    reaction.setReversible(false)

    let reactant = reaction.createReactant()
    reactant.setSpecies("Node0")
    reactant.setStoichiometry(1)
    reactant.setConstant(true)

    let product = reaction.createProduct()
    product.setSpecies("Node1")
    product.setStoichiometry(1)
    product.setConstant(true)

    reaction = model.createReaction()
    reaction.setId("J1")
    reaction.setReversible(false)
    reactant = reaction.createReactant()
    reactant.setSpecies("Node1")
    reactant.setStoichiometry(1)
    reactant.setConstant(true)

    product = reaction.createProduct()
    product.setSpecies("Node2")
    product.setStoichiometry(1)
    product.setConstant(true)

    reaction = model.createReaction()
    reaction.setId("J2")
    reaction.setReversible(false)

    reactant = reaction.createReactant()
    reactant.setSpecies("Node2")
    reactant.setStoichiometry(1)
    reactant.setConstant(true)

    product = reaction.createProduct()
    product.setSpecies("Node3")
    product.setStoichiometry(1)
    product.setConstant(true)

    reaction = model.createReaction()
    reaction.setId("J3")
    reaction.setReversible(false)

    reactant = reaction.createReactant()
    reactant.setSpecies("Node1")
    reactant.setStoichiometry(1)
    reactant.setConstant(true)

    product = reaction.createProduct()
    product.setSpecies("Node4")
    product.setStoichiometry(1)
    product.setConstant(true)

    reaction = model.createReaction()
    reaction.setId("J4")
    reaction.setReversible(false)

    reactant = reaction.createReactant()
    reactant.setSpecies("Node4")
    reactant.setStoichiometry(1)
    reactant.setConstant(true)

    product = reaction.createProduct()
    product.setSpecies("Node3")
    product.setStoichiometry(1)
    product.setConstant(true)

    reaction = model.createReaction()
    reaction.setId("J5")
    reaction.setReversible(false)

    reactant = reaction.createReactant()
    reactant.setSpecies("Node3")
    reactant.setStoichiometry(1)
    reactant.setConstant(true)

    product = reaction.createProduct()
    product.setSpecies("Node5")
    product.setStoichiometry(1)
    product.setConstant(true)

    reaction = model.createReaction()
    reaction.setId("J6")
    reaction.setReversible(false)

    reactant = reaction.createReactant()
    reactant.setSpecies("Node5")
    reactant.setStoichiometry(1)
    reactant.setConstant(true)

    product = reaction.createProduct()
    product.setSpecies("Node6")
    product.setStoichiometry(1)
    product.setConstant(true)

    reaction = model.createReaction()
    reaction.setId("J7")
    reaction.setReversible(false)

    reactant = reaction.createReactant()
    reactant.setSpecies("Node6")
    reactant.setStoichiometry(1)
    reactant.setConstant(true)

    product = reaction.createProduct()
    product.setSpecies("Node7")
    product.setStoichiometry(1)
    product.setConstant(true)

    reaction = model.createReaction()
    reaction.setId("J8")
    reaction.setReversible(false)

    reactant = reaction.createReactant()
    reactant.setSpecies("Node5")
    reactant.setStoichiometry(1)
    reactant.setConstant(true)

    product = reaction.createProduct()
    product.setSpecies("Node8")
    product.setStoichiometry(1)
    product.setConstant(true)

    reaction = model.createReaction()
    reaction.setId("J9")
    reaction.setReversible(false)

    reactant = reaction.createReactant()
    reactant.setSpecies("Node8")
    reactant.setStoichiometry(1)
    reactant.setConstant(true)

    product = reaction.createProduct()
    product.setSpecies("Node7")
    product.setStoichiometry(1)
    product.setConstant(true)

    reaction = model.createReaction()
    reaction.setId("J10")
    reaction.setReversible(false)

    reactant = reaction.createReactant()
    reactant.setSpecies("Node7")
    reactant.setStoichiometry(1)
    reactant.setConstant(true)

    product = reaction.createProduct()
    product.setSpecies("Node9")
    product.setStoichiometry(1)
    product.setConstant(true)

    //
    // Get a FbcModelPlugin object plugged in the model object.
    //
    // The type of the returned value of SBase::getPlugin() function is
    // SBasePlugin*, and thus the value needs to be casted for the
    // corresponding derived class.
    //

    const plugin = doc.getModel().findPlugin('fbc')
    const fbc_model_plugin = libsbml.castObject(plugin, libsbml.FbcModelPlugin)
    fbc_model_plugin.setStrict(false)

    const bound= fbc_model_plugin.createFluxBound()
    bound.setId("bound1")
    bound.setReaction("J0")
    bound.setOperation("equal")
    bound.setValue(10)

    const objective = fbc_model_plugin.createObjective()
    objective.setId("obj1")
    objective.setType(libsbml.OBJECTIVE_TYPE_MAXIMIZE)

    // mark obj1 as active objective
    fbc_model_plugin.setActiveObjectiveId("obj1")
    const fluxObjective = objective.createFluxObjective()
    fluxObjective.setReaction("J8")
    fluxObjective.setCoefficient(1)

    const writer = new libsbml.SBMLWriter()
    const serializedSBML = writer.writeSBMLToString(doc)

    console.log(serializedSBML)

    libsbml.destroy(doc)
  } catch(error) {
    console.log(error.stack)
  }
})
