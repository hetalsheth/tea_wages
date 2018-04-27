// Copyright (c) 2016, Frappe and contributors
// For license information, please see license.txt
/* eslint-disable */

//Search field by which the report table will be filtered
frappe.query_reports["Tearp LIC Report"] = {
	"filters": [
		{
		 "fieldname":"garden",
			"label": __("Garden"),
			"fieldtype": "Link",
			"options": "Tearp Estate",
			"default": "",
			"reqd":0
	 }
	]
}
