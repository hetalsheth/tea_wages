// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tearp Wages Entry', {
	refresh: function(frm) {

	}
});

frappe.ui.form.on('Tearp Wages Entry', 'validate', function(frm) {
  for(var i in frm.doc.attendance){
     frm.doc.attendance[i].garden = frm.doc.garden;
		 frm.doc.attendance[i].book_code = frm.doc.book_code
     }
  });
