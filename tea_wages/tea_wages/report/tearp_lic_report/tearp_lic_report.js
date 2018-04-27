// Copyright (c) 2016, Frappe and contributors
// For license information, please see license.txt
/* eslint-disable */

<<<<<<< HEAD
//Search field by which the report table will be filtered
=======
// Input Field for generating report table
>>>>>>> wage_aditya
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
