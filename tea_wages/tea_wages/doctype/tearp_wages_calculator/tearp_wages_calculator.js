// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tearp Wages Calculator', {
	refresh: function(frm) {

	},
	validate: function(frm) {
		frm.naming_series = '';
		name = frm.doc.worker_id+"--"+frm.doc.date;
		frm.set_value('naming_series', name);
	}
});
