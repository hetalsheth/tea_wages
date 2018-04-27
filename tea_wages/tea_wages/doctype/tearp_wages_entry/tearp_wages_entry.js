// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tearp Wages Entry', {
	refresh: function(frm) {
		for(var i in frm.doc.attendance){
		cur_frm.add_fetch('tearp_labors_information','worker_name',frm.doc.attendance[i].worker_name);
		}
	}
});

// Reflecting the record_date, garden, book_code in the child table

frappe.ui.form.on('Tearp Wages Entry', 'validate', function(frm) {
  for(var i in frm.doc.attendance){
		 frm.doc.attendance[i].record_date = frm.doc.record_date;
     frm.doc.attendance[i].garden = frm.doc.garden;
		 frm.doc.attendance[i].book_code = frm.doc.book_code;
		 cur_frm.add_fetch('tearp_labors_information','worker_name',cur_frm.doc.attendance[i].worker_name)
     }
  });

/*frappe.ui.form.on('Tearp Wages Entry', 'validate', function(frm) {
	var today_date=frappe.datetime.nowdate();
	if (frappe.datetime.frm.doc.record_date > today_date)
	{
		frappe.msgprint(__("You can not select date more than today's date."));
		frappe.validated = false;
	}
});*/

// Naming series
frappe.ui.form.on('Tearp Wages Entry', 'validate', function(frm) {
	frm.naming_series = '';
	name = frm.doc.garden+"/"+frm.doc.book_code+"/"+frm.doc.record_date;
	frm.set_value('naming_series', name);
  });

// Wage Rate for each entry
frappe.ui.form.on('Tearp Wages Entry', 'validate', function(frm) {
	var rate = 137.50;
	for(var i in frm.doc.attendance){
		if(frm.doc.attendance[i].attendance_type == 'Present'){
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

//Make button
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
