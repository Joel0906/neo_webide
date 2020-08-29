sap.ui.define([
	"sap/m/Button"
	], function(Button){
	
	return 	Button.extend("joel.customcontrol.superButton",{
	
	metadata :{
		properties : {},
		aggregation : {},
		events : {
			onfocus : ""
		}
	},
	
	init :  function(){
		
	},
	
	renderer :{},
	
	"onmouseover" : function(){
		this.fireOnfocus();
	}
		
	});
	});