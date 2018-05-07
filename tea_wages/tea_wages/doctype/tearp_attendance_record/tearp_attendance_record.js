// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tearp Attendance Record', {
	refresh: function(frm) {
		frm.add_fetch('worker_id', 'worker_name', 'worker_name')
	}
});
