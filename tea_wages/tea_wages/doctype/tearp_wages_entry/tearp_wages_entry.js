// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tearp Wages Entry', {
	refresh: function(frm) {

	}
});

frappe.ui.form.on('Tearp Wages Entry', 'validate', function(frm) {
  for(var i in frm.doc.attendance){
		 frm.doc.attendance[i].record_date = frm.doc.record_date;
     frm.doc.attendance[i].garden = frm.doc.garden;
		 frm.doc.attendance[i].book_code = frm.doc.book_code;
     }
  });

frappe.ui.form.on('Tearp Wages Entry', 'validate', function(frm) {
	frm.naming_series = '';
	name = frm.doc.garden+"/"+frm.doc.book_code+"/"+frm.doc.record_date;
	frm.set_value('naming_series', name);
  });


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



erpnext.stock.StockReconciliation = erpnext.stock.StockController.extend({
	setup: function() {
	var me = this;
	this.frm.get_docfield("attendance").allow_bulk_edit = 1;
	}

});

cur_frm.cscript = new erpnext.stock.StockReconciliation({frm: cur_frm});


/*frappe.ui.form.on('Tearp Wages Entry', {
	after_save: function(frm) {
		if(frm.doc.attendance==){
			frm.add_custom_button(__('Tearp Labors Information'), function(){
				frappe.model.with_doctype('Tearp Labors Information', function(){
					var tr = frappe.model.get_new_doc('Tearp Labors Information');
					frappe.set_route('Form', 'Tearp Labors Information', tr.name);
					});
				}, __("Make"));
			}
	}
});*/



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



/*if (frm.doc.docstatus===0) {
			frm.add_custom_button(__('Purchase Invoice'), function() {
				erpnext.utils.map_current_doc({
					method: "erpnext.accounts.doctype.purchase_invoice.purchase_invoice.make_stock_entry",
					source_doctype: "Purchase Invoice",
					target: frm,
					date_field: "posting_date",
					setters: {
						supplier: frm.doc.supplier || undefined,
					},
					get_query_filters: {
						docstatus: 1
					}
				})
			}, __("Get items from"));
}*/
