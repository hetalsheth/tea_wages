// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tearp Wages Entry', {
	refresh: function(frm) {

	}
});
<<<<<<< HEAD
//Entry for the required data in the attendence child table
=======

// Reflecting the record_date, garden, book_code in the child table

>>>>>>> ad0daf0c54444f2588994e6a74212a01287b49ae
frappe.ui.form.on('Tearp Wages Entry', 'validate', function(frm) {
  for(var i in frm.doc.attendance){
		 frm.doc.attendance[i].record_date = frm.doc.record_date;
     frm.doc.attendance[i].garden = frm.doc.garden;
		 frm.doc.attendance[i].book_code = frm.doc.book_code;
     }
  });
<<<<<<< HEAD
// Defining name series for each wage entry
=======

// Naming series
>>>>>>> ad0daf0c54444f2588994e6a74212a01287b49ae
frappe.ui.form.on('Tearp Wages Entry', 'validate', function(frm) {
	frm.naming_series = '';
	name = frm.doc.garden+"/"+frm.doc.book_code+"/"+frm.doc.record_date;
	frm.set_value('naming_series', name);
  });

<<<<<<< HEAD
// Defining different rate for different attendence type
=======
// Wage Rate for each entry
>>>>>>> ad0daf0c54444f2588994e6a74212a01287b49ae
frappe.ui.form.on('Tearp Wages Entry', 'validate', function(frm) {
	var rate = 137.50;
	for(var i in frm.doc.attendance){
		if(frm.doc.attendance[i].attendance_type == 'Full Day'){
			frm.doc.attendance[i].wage_rate = rate;
		}
		else if (frm.doc.attendance[i].attendance_type == 'Paid Leave') {
			frm.doc.attendance[i].wage_rate = rate;
		}
		else if (frm.doc.attendance[i].attendance_type == 'Maternity Leave') {
			frm.doc.attendance[i].wage_rate = rate;
		}
		else if (frm.doc.attendance[i].attendance_type == 'Half Day') {
			frm.doc.attendance[i].wage_rate = rate/2;
		}
		else if (frm.doc.attendance[i].attendance_type == 'Sick Leave') {
			frm.doc.attendance[i].wage_rate = (rate*(2/3)).toFixed(2);
		}
	}
	 });


//Download and upload buttons
erpnext.stock.StockReconciliation = erpnext.stock.StockController.extend({
	setup: function() {
	var me = this;
	this.frm.get_docfield("attendance").allow_bulk_edit = 1;
	}

});
cur_frm.cscript = new erpnext.stock.StockReconciliation({frm: cur_frm});

<<<<<<< HEAD
=======
//Make button
>>>>>>> ad0daf0c54444f2588994e6a74212a01287b49ae
frappe.ui.form.on('Tearp Wages Entry', {
	after_save: function(frm) {
		frm.add_custom_button(__('Tearp Wages Reconciliation'), function(){
			frappe.model.with_doctype('Tearp Wages Reconciliation', function(){
				var tr = frappe.model.get_new_doc('Tearp Wages Reconciliation');
				frappe.set_route('Form', 'Tearp Wages Reconciliation', tr.name);
				});
			}, __("Make"));
	}
});
