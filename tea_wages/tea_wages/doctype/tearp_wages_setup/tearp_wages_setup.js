// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tearp Wages Setup', {
	refresh: function(frm) {

	}
});
 // Defining naming series for different wage frequency
frappe.ui.form.on('Tearp Wages Setup', 'validate', function(frm) {
	frm.naming_series = '';
	if(frm.doc.wage_frequency == 'Weekly'){
		name = frm.doc.abbv+"/"+frm.doc.month+"/WK/"+frm.doc.week_no;
		frm.set_value('naming_series', name);
	}
	if(frm.doc.wage_frequency == 'Fortnightly'){
		name = frm.doc.abbv+"/"+frm.doc.month+"/"+frm.doc.fortnight_no;
		frm.set_value('naming_series', name);
	}

});
