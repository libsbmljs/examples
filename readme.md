# libsbmljs examples

This repository contains examples for using the [libsbmljs wrapper](https://libsbmljs.github.io/) for the C++ libSBML library.
Included are Node.js scripts which print out results to the console, and a single example showing how to integrate libsbmljs with Webpack.
These scripts use newer JavaScript features like `import` so you need to run them with Babel as shown below.

## Prerequisites

Make sure you have Node.js 10.15.0 or later before starting.

## Getting Started

The first step is to install all dependencies by running the following on the command line:

```
npm install
```

This should create the directory `node_modules` and install (among other things)
the `libsbmljs_core`, `libsbmljs_stable`, and `libsbmljs_experimental` npm packages.

### Running the Node Examples

To run one of the included Node.js example scripts, you can use babel-node from the command line:

```
npx babel-node --presets @babel/env path/to/example.js
```

For example, to run the `arrays3.js` example from the `experimental` directory, run:

```
npx babel-node --presets @babel/env experimental/arrays3.js
```

After running this command, you should see the following text appear on the command line:

```
<?xml version="1.0" encoding="UTF-8"?>
<sbml xmlns="http://www.sbml.org/sbml/level3/version2/core" xmlns:arrays="http://www.sbml.org/sbml/level3/version1/arrays/version1" level="3" version="2" arrays:required="true">
  <model>
    <listOfParameters>
      <parameter id="m" value="2" constant="true"/>
      <parameter id="n" value="1" constant="true"/>
      <parameter id="x" constant="false">
        <arrays:listOfDimensions>
          <arrays:dimension arrays:size="m" arrays:arrayDimension="0"/>
          <arrays:dimension arrays:size="n" arrays:arrayDimension="1"/>
        </arrays:listOfDimensions>
      </parameter>
      <parameter id="y" value="2.3" constant="true"/>
    </listOfParameters>
    <listOfInitialAssignments>
      <initialAssignment symbol="x">
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <vector>
            <vector>
              <ci> y </ci>
            </vector>
            <vector>
              <cn> 2 </cn>
            </vector>
          </vector>
        </math>
      </initialAssignment>
    </listOfInitialAssignments>
  </model>
</sbml>
```

These Node.js examples typically create an SBML file and print the results to the console.
There are three directories - "core", "stable", and "experimental," which each make use of the respective libsbmljs npm package ("libsbmljs_core", "libsbmljs_stable", and "libsbmljs_experimental").

### Running the Webpack Example

To use libsbmljs in the browser, you will most likely end up using Webpack to bundle all of the JavaScript assets used in your site.
Using Emscripten modules like libsbmljs with Webpack can be a little tricky, and, because this is such a common use case, we provide an example to show you the basics. Another, more complicated, resource would be the source code for the [libsbmljs official demo](https://github.com/libsbmljs/demo).

TODO
