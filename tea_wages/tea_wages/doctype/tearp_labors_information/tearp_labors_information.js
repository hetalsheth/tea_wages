// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tearp Labors Information', {
	refresh: function(frm) {

	}
});

<<<<<<< HEAD
// Entry of dependent names in dependent child table
=======
// Entry for details of dependents
>>>>>>> wage_aditya
frappe.ui.form.on("Tearp Labors Information", "validate", function(frm) {
  for(var i in frm.doc.dependent_name){
     frm.doc.dependent_name[i].worker_id = frm.doc.worker_id;
     frm.doc.dependent_name[i].worker_name = frm.doc.worker_name;
     frm.doc.dependent_name[i].dependents = frm.doc.dependents;
		 frm.doc.dependent_name[i].dependents = frm.doc.dependents
     }
  });

<<<<<<< HEAD
// Calculation of ages of dependents whether they are Minor or Adult
=======
// Age Calculation of dependents whether they are Minor or Adult
>>>>>>> wage_aditya
	frappe.ui.form.on("Tearp Labors Information", "validate", function(frm) {
	  for(var i in frm.doc.dependent_name){
	    var birth_date=frm.doc.dependent_name[i].dob
	    var today_date=frappe.datetime.nowdate()
	    var age_cal=parseInt(today_date)-parseInt(birth_date)
			frm.doc.dependent_name[i].age = age_cal;
	    if(age_cal>=2 && age_cal<=17){
	      frm.doc.dependent_name[i].dep_type = "Minor";
	    }
	    else{
	      frm.doc.dependent_name[i].dep_type = "Adult";
	    }

	     }
	  });
