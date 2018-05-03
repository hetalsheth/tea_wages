// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tearp Task Register', {
	refresh: function(frm) {
		frm.trigger("toggle_fields");
		//frm.trigger("task");
	},
	validate: function(frm) {
		frm.naming_series = '';
		name = frm.doc.garden+"--"+frm.doc.task_date;
		frm.set_value('naming_series', name);
	},

	managerial_task: function(frm) {
		frm.trigger("toggle_fields");
	},
	no_task: function(frm) {
		frm.trigger("toggle_fields");
	},
	toggle_fields: function(frm) {
		//frm.toggle_reqd(['kamjari_codes'], frm.doc.kamjari_incentives);
		frm.toggle_display(['set_task'], frm.doc.managerial_task);
		//frm.toggle_reqd(['labor_list'], frm.doc.special_labor);
		frm.toggle_display(['display'], frm.doc.no_task);
	},
});


cur_frm.cscript.task_date = function(doc) {
	var peak_start_date = new Date();
	peak_start_date.setDate(15);
	peak_start_date.setMonth(4);
	peak_start_date.getFullYear();
	var peak_end_date = new Date();
	peak_end_date.setDate(31);
	peak_end_date.setMonth(9);
	peak_end_date.getFullYear();

	var non_peak_start_date = new Date();
	non_peak_start_date.setDate(1);
	non_peak_start_date.setMonth(10);
	non_peak_start_date.getFullYear();
	var non_peak_end_date = new Date();
	non_peak_end_date.setDate(14);
	non_peak_end_date.setMonth(4);
	non_peak_end_date.setFullYear(non_peak_end_date.getFullYear() + 1);

	if ((doc.task_date >= moment(peak_start_date).format())
	&& (doc.task_date <= moment(peak_end_date).format())) {
		cur_frm.set_value("period", 'Peak Period');
		frm.refresh_field("period");
		}
	/*else if((doc.task_date >= moment(non_peak_start_date).format())
	&& (doc.task_date <= moment(non_peak_end_date).format())) {
		//alert(moment(peak_start_date).format());
		cur_frm.set_value("period", 'Non-Peak Period');
		frm.refresh_field("period");
	}*/
	else {
		//alert("Please Enter a Vaild Date!!");
		cur_frm.set_value("period", 'Non-Peak Period');
		frm.refresh_field("period");
	}
};


/*var toggle_operations = function(frm) {
	frm.toggle_display("peak_period", cint(frm.doc.task) == 1);
};

frappe.ui.form.on("Tearp Task Register", "task", function(frm) {
	if(cint(frm.doc.peak_check)) {
		frm.set_value("peak_period", []);
	}
	toggle_operations(frm);
});*/

//frappe.ui.form.on("Tearp Task Register")
