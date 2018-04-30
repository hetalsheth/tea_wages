// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tearp Task Register', {
	refresh: function(frm) {
		frm.trigger("toggle_fields");
	},
	task: function(frm) {
		frm.trigger("toggle_fields");
	},
	managerial_task: function(frm) {
		frm.trigger("toggle_fields");
	},
	no_task: function(frm) {
		frm.trigger("toggle_fields");
	},
	toggle_fields: function(frm) {
		/*var peak_start_date = new Date;
		peak_start_date.setDate(15);
		peak_start_date.setMonth(3);
		var peak_end_date = new Date;
		peak_end_date.setDate(15);
		peak_end_date.setMonth(9);
		if(frm.doc.date >= peak_start_date and frm.doc.date<= peak_end_date) {
			frm.toggle_display(['peak_period'], frm.doc.task);
		}*/
		//frm.toggle_display(['task_date'], frm.doc.task);
		//frm.toggle_reqd(['kamjari_codes'], frm.doc.kamjari_incentives);
		frm.toggle_display(['set_task'], frm.doc.managerial_task);
		//frm.toggle_reqd(['labor_list'], frm.doc.special_labor);
		frm.toggle_display(['display'], frm.doc.no_task);
	},
});
