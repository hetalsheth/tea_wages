// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tearp Labors Information', {
	refresh: function(frm) {

	}
});

/*frappe.provide("erpnext.crm");

//cur_frm.email_field = "contact_email";
frappe.ui.form.on("Tearp Labors Information", {
	setup: function(frm) {
		frm.custom_make_buttons = {
			'Tearp Wages Structure': 'Tearp Wages Structure',
			//'Supplier Quotation': 'Supplier Quotation'
		}
},
customer: function(frm) {
		frm.trigger('set_contact_link');
		erpnext.utils.get_party_details(frm);
	},

	lead: function(frm) {
		frm.trigger('set_contact_link');
	},
	refresh: function(frm) {
			var doc = frm.doc;
			frm.events.enquiry_from(frm);
			frm.trigger('set_contact_link');
			frm.trigger('toggle_mandatory');
			erpnext.toggle_naming_series();

			if(!doc.__islocal && doc.status!=="Lost") {
				if(doc.with_items){
					frm.add_custom_button(__('Supplier Quotation'),
						function() {
							frm.trigger("make_supplier_quotation")
						}, __("Make"));
				}

				frm.add_custom_button(__('Quotation'),
					cur_frm.cscript.create_quotation, __("Make"));

				if(doc.status!=="Quotation") {
					frm.add_custom_button(__('Lost'),
						cur_frm.cscript['Declare Opportunity Lost']);
				}
			}

			if(!frm.doc.__islocal && frm.perm[0].write && frm.doc.docstatus==0) {
				if(frm.doc.status==="Open") {
					frm.add_custom_button(__("Close"), function() {
						frm.set_value("status", "Closed");
						frm.save();
					});
				} else {
					frm.add_custom_button(__("Reopen"), function() {
						frm.set_value("status", "Open");
						frm.save();
					});
				}
			}
		},

		set_contact_link: function(frm) {
			if(frm.doc.customer) {
				frappe.dynamic_link = {doc: frm.doc, fieldname: 'book_code', doctype: 'Tearp Wages Structure'}
			} else if(frm.doc.lead) {
				frappe.dynamic_link = {doc: frm.doc, fieldname: 'lead', doctype: 'Lead'}
			}
		},

		make_supplier_quotation: function(frm) {
			frappe.model.open_mapped_doc({
				method: "erpnext.crm.doctype.opportunity.opportunity.make_supplier_quotation",
				frm: cur_frm
			})
		},

		toggle_mandatory: function(frm) {
			frm.toggle_reqd("items", frm.doc.with_items ? 1:0);
		}
	}); */
/*frappe.ui.form.on("Tearp Labors Information", "Button", function(frm) {
  frappe.set_route("Tearp Wage Structure", "Tearp Labors Information", "tea_wages")
}); */

/*frappe.ui.form.on("Tearp Labors Information",{
	"Tearp Wage Structure": function(frm){
   frm.add_fetch("Tearp Wage Structure", "Tearp Labors Information", "Tearp Wage Structure");
	}

}); */

frappe.ui.form.on("Tearp Labors Information", "validate", function(frm) {
  for(var i in frm.doc.dependent_name){
     frm.doc.dependent_name[i].worker_id = frm.doc.worker_id;
     frm.doc.dependent_name[i].worker_name = frm.doc.worker_name;
		 frm.doc.dependent_name[i].dependents = frm.doc.dependents
     }
  });

	frappe.ui.form.on("Tearp Labors Information", "validate", function(frm) {
	  for(var i in frm.doc.dependent_name){
	    var birth_date=frm.doc.dependent_name[i].dob
	    var today_date=frappe.datetime.nowdate()
	    var age_cal=parseInt(today_date)-parseInt(birth_date)
			frm.doc.dependent_name[i].age = age_cal;
	    if(age_cal>=2 && age_cal<=17){
	      frm.doc.dependent_name[i].dep_type = "Minor";
	    }
	    else{
	      frm.doc.dependent_name[i].dep_type = "Adult";
	    }

	     }
	  });
