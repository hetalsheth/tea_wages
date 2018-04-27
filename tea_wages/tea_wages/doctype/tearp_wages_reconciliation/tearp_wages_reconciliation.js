// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tearp Wages Reconciliation', {
	refresh: function(frm) {

	}
});

// Defining the name series for each Wage Reconciliation
frappe.ui.form.on("Tearp Wages Reconciliation", "validate", function(frm) {
  frm.naming_series = "";

	 name=frm.doc.garden+"/"+frm.doc.date;
   frm.set_value("naming_series",name);


});

// Reflecting date in the record date in attendence child table
frappe.ui.form.on("Tearp Wages Reconciliation", "validate", function(frm) {
  for(var i in frm.doc.attendence){
     frm.doc.attendence[i].record_date = frm.doc.date;
     }
  });


// Calculating rates for different attendence type
	frappe.ui.form.on("Tearp Wages Reconciliation", "validate", function(frm){
		var rate = 137.50;
		for(var i in frm.doc.attendence){
			if(frm.doc.attendence[i].attendence_type == "Full Day"){
				frm.doc.attendence[i].wage_rate = rate;
			}
			else if(frm.doc.attendence[i].attendence_type == "Half Day"){
				frm.doc.attendence[i].wage_rate = rate/2;
			}
			else if(frm.doc.attendence[i].attendence_type == "Sick Leave"){
				frm.doc.attendence[i].wage_rate = (rate*(2/3)).toFixed(2);
			}
			else if(frm.doc.attendence[i].attendence_type == "Maternity Leave"){
				frm.doc.attendence[i].wage_rate = rate;
			}
			else if(frm.doc.attendence[i].attendence_type == "Paid Leave"){
				frm.doc.attendence[i].wage_rate = rate;
			}
		}
	});

// Calculating total number of labors from the attendence child table
	frappe.ui.form.on("Tearp Wages Reconciliation", "validate", function(frm) {
  var total_labor = 0
  for(var i in frm.doc.attendence){
     total_labor += 1;

    }
    frm.set_value("total_labor",total_labor);

  });
