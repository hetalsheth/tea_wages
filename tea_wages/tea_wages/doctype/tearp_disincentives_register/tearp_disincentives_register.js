// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tearp Disincentives Register', {
	refresh: function(frm) {
		frm.trigger("toggle_fields");
	},

	kamjari_disincentives: function(frm) {
		frm.trigger("toggle_fields")
	},

	special_labor: function(frm) {
		frm.trigger("toggle_fields")
	},

	plucking_disincentives: function(frm) {
		frm.trigger("toggle_fields")
	},

	factory_disincentives: function(frm) {
		frm.trigger("toggle_fields")
	},

	toggle_fields: function(frm) {
		frm.toggle_display(['kamjari_codes'], frm.doc.kamjari_disincentives);
		//frm.toggle_reqd(['kamjari_codes'], frm.doc.kamjari_incentives);
		frm.toggle_display(['labor_list'], frm.doc.special_labor);
		//frm.toggle_reqd(['labor_list'], frm.doc.special_labor);
		frm.toggle_display(['plucking_info'], frm.doc.plucking_disincentives);
		//frm.toggle_reqd(['plucking_info'], frm.doc.plucking_incentives);
		frm.toggle_display(['factory_info'], frm.doc.factory_disincentives);
		//frm.toggle_reqd(['factory_info'], frm.doc.factory_incentives);
	},
});
