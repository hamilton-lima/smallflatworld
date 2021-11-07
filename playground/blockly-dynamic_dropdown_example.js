// @see https://gist.github.com/lewisjnewman/3531fbe0681239a0d482a853952351ca
// The mutator mixin object
var html_import_template_mutator = {
    mutationToDom: function () {
        var container = Blockly.utils.xml.createElement("mutation");
        
        // Save the currently selected option
        container.setAttribute("value", this.getFieldValue("TEMPLATE"));

        // save all the options here
        var options = this.getField("TEMPLATE").getOptions(false);
        for (var i = 0; i < options.length; i++) {
            var option_element = Blockly.utils.xml.createElement("option");
            option_element.setAttribute("display-value", options[i][0]);
            option_element.setAttribute("neutral-value", options[i][1]);
            container.appendChild(option_element);
        }

        // For debugging
        console.log("mutationToDom");
        console.dirxml(container);
      
        return container;
    },

    domToMutation: function (containerElement) {
        // If set then used by generateOptions in order to provide the list of options 
        this.mutator_saved = [["none", "none"]];

        // Add all the saved options to the mutator-saved list;
        for (var i = 0; i < containerElement.childNodes.length; i++) {
            var option_element = containerElement.childNodes[i];
            this.mutator_saved.push([option_element.getAttribute("display-value"), option_element.getAttribute("neutral-value")])
        }

        // Force set the currently selected option
        this.getField("TEMPLATE").getOptions(false);
        this.getField("TEMPLATE").setValue(containerElement.getAttribute("value"));
    }
}

// The blockly block object
Blockly.Blocks['html_template_substitute'] = {
  init: function () {

    const generateOptions = (function (that) {
      return function () {

        var results = [["_", "_"]];
        
        // If mutator saved has been set, then return a copy of it and delete it from this/that
        if (that.mutator_saved) {
          var result = that.mutator_saved;
          delete that.mutator_saved
          return result;
        }

        // Otherwise manually go and generate the list of html_templates (list_html_templates is provided elsewhere)
        results = results.concat(list_html_templates());
        return results;
      }
    })(this);

    this.appendDummyInput()
      .appendField("Include Template")
      .appendField(new Blockly.FieldDropdown(generateOptions), "TEMPLATE");
    this.setPreviousStatement(true, "html");
    this.setNextStatement(true, "html");
    this.setColour(html_block_colour);
    this.setTooltip("");
    this.setHelpUrl("");
    this.jsonInit({ "mutator": "html_import_template_mutator" });
  }
};